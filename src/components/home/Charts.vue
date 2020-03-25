<script type="text/javascript">
	import VueApexCharts from 'vue-apexcharts'
	import axios from 'axios'
	export default{
		created(){
			axios({
				"method":"GET",
				"url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_particular_country.php",
				"headers":{
					"content-type":"application/octet-stream",
					"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
					"x-rapidapi-key":"8481f0db26mshee467481fa9fd60p17e613jsnf1d8f3e9a61c"
				},"params":{
					"country":"turkey"
				}
			})
			.then(response => {
				let stats = []
				let i = 0
				response.data.stat_by_country.forEach(stat => stats.push(stat.total_cases))
				Array.from(new Set(stats)).forEach(stat => {
					i++
					this.options.xaxis.categories.push(`${i}. gün`)
					this.series[0].data.push(stat.split(',').join(''))
				})
				this.loaded = true
			})
		},
		components: {
			VueApexCharts
		},
		data(){
			return{
				loaded: false,
				options: {
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
				}]
			}
		}
	}
</script>

<template>
	<section class="charts">
		<div>
			<VueApexCharts :options='options' :series='series' type='bar' v-if='loaded' />
		</div>
		<div>
			<VueApexCharts :options='options' :series='series' type='line' v-if='loaded' />
		</div>
	</section>
</template>


<style type="text/css">
	.charts{
		display: grid;
		grid-template-columns: 1fr 1fr;
	}
	@media(max-width: 900px){
		.charts{grid-template-columns: 1fr}
	}
</style>