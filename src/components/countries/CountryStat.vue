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
			axios({
				"method":"GET",
				"url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php",
				"headers":{
					"content-type":"application/octet-stream",
					"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
					"x-rapidapi-key":"8481f0db26mshee467481fa9fd60p17e613jsnf1d8f3e9a61c"
				},"params":{
					"country": this.country.country_name
				}
			})
			.then((response)=>{
				let stats = []
				let i = 0
				response.data.stat_by_country.forEach(stat => stats.push(stat.total_cases))
				Array.from(new Set(stats)).slice(-5).forEach(stat => {
					i++
					this.options.xaxis.categories.push(`${i}`)
					this.series[0].data.push(stat.split(',').join(''))
					this.loaded = true
				})			})			

		},
		components: {
			VueApexCharts
		},
		watch: {
			country(val){
				this.loaded = false
				this.series[0].data = []
				this.options.xaxis.categories = []
				axios({
					"method":"GET",
					"url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php",
					"headers":{
						"content-type":"application/octet-stream",
						"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
						"x-rapidapi-key":"8481f0db26mshee467481fa9fd60p17e613jsnf1d8f3e9a61c"
					},"params":{
						"country": this.country.country_name
					}
				})
				.then((response)=>{
					let stats = []
					let i = 0
					response.data.stat_by_country.forEach(stat => stats.push(stat.total_cases))
					console.dir(Array.from(new Set(stats)))
					Array.from(new Set(stats)).slice(-5).forEach(stat => {
						i++
						this.options.xaxis.categories.push(`${i}`)
						this.series[0].data.push(stat.split(',').join(''))
						this.loaded = true
					})			})			
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
				pieSeries: [44, 55, 41, 17, 15],
				pieOptions: {
					labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
				}
			}
		},	
	}
</script>

<template>
	<div class="country-stat">
		<div class="country">
			<h1>{{ countryNames[country.country_name] }}</h1>
			<hr>
			<p>Toplam Vaka: <b>{{ country.total_cases }}</b></p>
			<p>İyileşenler: <b>{{ country.total_recovered }}</b></p>
			<p>Ölümler: <b>{{ country.total_deaths }}</b></p>
			<p>Yeni Bildirilen Vakalar: <b>{{ country.new_cases != '' ? country.new_cases : 'Bugün Yeni Vaka Bildirilmedi' }}</b></p>
			<p>Kritik Durumda Olan Hastalar  <b>{{ country.serious_critical }}</b> </p>
			<p>Aktif Vakalar <b>{{ country.active_cases }}</b> </p>
			<p>Bugün Bildirilen Ölümler <b>{{ country.new_deaths != '' ? country.new_deaths : 'Bugün Bildirilmedi'  }}</b> </p>
			<div class="country-charts" v-if='loaded'>
				<VueApexCharts :height='200' :options='options' :series='series' type='bar' />
				<VueApexCharts :height='200' :options='options' :series='series' type='line' />
				<VueApexCharts :height='200' :options='pieOptions' :series='pieSeries' type='pie' />
			</div>

		</div>
	</div>
</template>

<style type="text/css">
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

</style>