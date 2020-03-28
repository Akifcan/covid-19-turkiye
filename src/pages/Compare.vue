<script type="text/javascript">
	import VueApexCharts from 'vue-apexcharts'
	import axios from 'axios'
	export default{
		components: {
			VueApexCharts
		},
		created(){
			this.$store.dispatch('compareCountries/compareCountry', {countryName: this.$route.query.country, type: 'country'})
			this.$store.dispatch('compareCountries/compareCountry', {countryName: this.$route.query.compareWith, type: 'compare'})
			axios({
				"method":"GET",
				"url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php",
				"headers":{
					"content-type":"application/octet-stream",
					"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
					"x-rapidapi-key":"8481f0db26mshee467481fa9fd60p17e613jsnf1d8f3e9a61c"
				},"params":{
					"country": this.$route.query.country
				}
			})
			.then(country => {
				axios({
					"method":"GET",
					"url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php",
					"headers":{
						"content-type":"application/octet-stream",
						"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
						"x-rapidapi-key":"8481f0db26mshee467481fa9fd60p17e613jsnf1d8f3e9a61c"
					},"params":{
						"country": this.$route.query.compareWith
					}
				})
				.then(compareWith => {
					let countryStat = []
					let compareWithStat = []
					country.data.stat_by_country.forEach(stat => countryStat.push(stat.total_cases))
					compareWith.data.stat_by_country.forEach(stat => compareWithStat.push(stat.total_cases))

					Array.from(new Set(countryStat)).slice(-5).forEach(stat => {
						this.options.xaxis.categories.push('Vakalar')
						this.series[0].data.push(stat.split(',').join(''))
					})
					Array.from(new Set(compareWithStat)).slice(-5).forEach(stat => this.series[1].data.push(stat.split(',').join('')))
					this.loaded = true
				})
			})
		},
		computed: {
			country(){
				return this.$store.getters['compareCountries/compare']
			},
			compareWith(){
				return this.$store.getters['compareCountries/compareWith']
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
				series: [
				{
					name: this.$route.query.country,
					data: []
				},
				{
					name: this.$route.query.compareWith,
					data: []
				},
				],
			}
		}
	}
</script>

<template>
	<div class="compare-country">
		<div class="compare-countries" v-if='country != null && compareWith != null'>
			<div class="compare">
				<h1>{{ country.country_name }}</h1>
				<p>Toplam Vaka: <b>{{ country.total_cases }}</b>  </p>
				<p>İyileşenler: <b>{{ country.total_recovered }}</b>  </p>
				<p>Ölümler: <b>{{ country.total_deaths }}</b>  </p>
			</div>
			<div class="compare-with">
				<h1>{{ compareWith.country_name }}</h1>
				<p>Toplam Vaka: <b>{{ compareWith.total_cases }}</b>  </p>
				<p>İyileşenler: <b>{{ compareWith.total_recovered }}</b>  </p>
				<p>Ölümler: <b>{{ compareWith.total_deaths }}</b>  </p>
			</div>
		</div>

		<div class="compare-charts">
			<div>
				<VueApexCharts 
				:height='400' 
				:options='options' 
				:series='series' type='bar'
				v-if='loaded' />
			</div>

			<div>
				<VueApexCharts 
				:height='400' 
				:options='options' 
				:series='series' 
				type='line'
				v-if='loaded' />
				
			</div>
		</div>

	</div>
</template>

<style type="text/css">
.compare-country{
	overflow-x: scroll;
	margin-top: var(--default-top);
	margin-bottom: var(--default-top);
	height: 80vh;
}
.compare-countries{
	text-align: center;
	display: flex;
	justify-content: space-around;
}
.compare-countries p{
	margin-top: .9em;
}
.compare-charts{
	display: grid;
	width: 100%;
	grid-template-columns: 1fr 1fr;
	margin-top: var(--default-top);
}

@media(max-width: 900px){
	.compare-charts{
		grid-template-columns: 1fr;
	}
}
</style>