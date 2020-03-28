<script type="text/javascript">
	import { countryNames } from '@/mixins/countryNames'
	import VueApexCharts from 'vue-apexcharts'
	import axios from 'axios'

	export default{
		mixins: [countryNames],
		props: {
			country: {required: true}
		},
		created(){
			this.getCountryChart()
		},
		components: {
			VueApexCharts
		},
		methods: {
			getCountryChart(){
				this.loaded = false
				this.options.xaxis.categories = []
				this.series[0].data = []
				axios({
					"method":"GET",
					"url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php",
					"headers":{
						"content-type":"application/octet-stream",
						"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
						"x-rapidapi-key":"8481f0db26mshee467481fa9fd60p17e613jsnf1d8f3e9a61c"
					},"params":{
						"country":this.country.country_name
					}
				})
				.then(response => {
					let stats = []
					response.data.stat_by_country.forEach(stat => stats.push(stat.total_cases))

					Array.from(new Set(stats)).slice(-5).forEach(stat => {
						this.options.xaxis.categories.push(`${stat} vaka`)
						this.series[0].data.push(stat)
					})

					let totalRecovered = this.country.total_recovered.split(',').join('')
					let totalDeaths = this.country.total_deaths.split(',').join('')

					this.pieOptions.labels.push('İyileşenler', 'Ölümler')
					this.pieSeries.push(parseInt(totalRecovered), parseInt(totalDeaths))
					this.loaded = true


				})

			},
			addToCompare(){
				this.$emit('compare', this.country.country_name)
			},
			back(){
				this.$store.dispatch('countries/removeStat')
			}
		},
		data(){
			return{
				loaded: false,
				options: {
					stroke: {
						curve: 'stepline',
					},
					chart: {
						id: 'vuechart-example'
					},
					xaxis: {
						categories: []
					}
				},
				series: [{
					name: 'series-1',
					data: []
				}],
				pieSeries: [],
				pieOptions: {
					labels: []
				}
			}
		},	
		computed: {
			compare(){
				return this.$store.getters['countries/compare']
			}
		},
		watch: {
			country(val){
				this.getCountryChart()
			}
		}
	}
</script>

<template>
	<div class="country-stat">
		<div class="fab" @click='back()'><p>Geri</p></div>
		<div class="country">
			<div class="country-name">
				<h1>{{ countryNames[country.country_name] }}</h1>
				<button @click='addToCompare()' :disabled='compare == country.country_name'>Karşılaştır</button>
			</div>
			<hr>
			<p>Toplam Vaka: <b>{{ country.total_cases }}</b></p>
			<p>İyileşenler: <b>{{ country.total_recovered }}</b></p>
			<p>Ölümler: <b>{{ country.total_deaths }}</b></p>
			<p>Yeni Bildirilen Vakalar: <b>{{ country.new_cases != '' ? country.new_cases : 'Bugün Yeni Vaka Bildirilmedi' }}</b></p>
			<p>Kritik Durumda Olan Hastalar  <b>{{ country.serious_critical }}</b> </p>
			<p>Aktif Vakalar <b>{{ country.active_cases }}</b> </p>
			<p>Bugün Bildirilen Ölümler <b>{{ country.new_deaths != '' ? country.new_deaths : 'Bugün Bildirilmedi'  }}</b> </p>
			<div class="country-charts">
				<VueApexCharts :height='200' :options='options' :series='series' type='bar' v-if='loaded'/>
				<VueApexCharts :height='200' :options='options' :series='series' type='line' v-if='loaded'/>
				<VueApexCharts :height='200' :options='pieOptions' :series='pieSeries' type='pie' v-if='loaded'  />
			</div>

		</div>
	</div>
</template>

<style type="text/css">
.fab{
	display: none;
}
.country-stat{
	overflow-x: scroll;
	padding-top: var(--default-top);
	flex: 3;
}
.country{
	width: 95%;
	margin: auto;
}
.country-stat h1{
	font-size: 3em;
}
.country-charts{
	display: grid;
	height: 40vh;
	align-items: center;
	grid-template-columns: 1fr;
}

.country-name{
	display: flex;
	justify-content: space-between;
}

.country-name button{
	background-color: var(--card-color);
	padding: .9em;
	border: none;
	color: white;
	border-radius: .9em;
	font-size: 1em;
	cursor: pointer;
}

.country-name button:disabled{
	opacity: .5;
}

@media(max-width: 900px){
	.fab{
		color: white;
		text-align: center;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1;
		position: absolute;
		bottom: 0;
		right: 0;
		margin: .9em;
		display: block;
		height: 70px;
		width: 20%;
		background-color: var(--primary-color);
		border-radius: 3em;
	}
	.fab p{
		padding-top: 25px;
	}
}

</style>