<script type="text/javascript">
	import { countryNames } from '@/mixins/countryNames'
	export default{
		mixins: [countryNames],
		data(){
			return{
				countryName: null
			}
		},
		methods: {
			searchCountry(){
				if(this.countryName == null){
					alert('Lütfen ülke adı girin')
					return
				}
				this.$store.dispatch('countries/getCountryStat', this.countryName)
			},
			searchCountryByChip(countryName){
				this.$store.dispatch('countries/getCountryStat', countryName)
			}
		},
		props: {
			countries: {
				required: true
			}
		}
	}
</script>

<template>
	<div class="search-bar">
		<h1>Ülke Ara</h1>
		<hr>
		<input type="text" placeholder="Ülke Arayın" v-model='countryName' @keyup.enter='searchCountry()' />
		<div class="countries-chip">
			<div @click='searchCountryByChip(country.country_name)' 
				class="country-chip" 
				v-for='country in countries'>{{ countryNames[country.country_name] }}
			</div>
		</div>
	</div>
</template>

<style type="text/css">
.search-bar{
	flex: 1;
	padding: .9em;
	background-color: #E0E0E0;
}
.search-bar input{
	width: 100%;
	outline: none;
	border: none;
	height: 40px;
	border-radius: 2em;
	font-size: 1em;
	text-indent: 10px;
	margin-bottom: .9em;
}
.countries-chip{
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-items: center;
	row-gap: .9em;
	column-gap: .9em;
	cursor: pointer;
}
.countries-chip .country-chip{
	background-color: var(--card-color);
	height: 35px;
	width: 70%;
	border-radius: 3em;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	color: white;
	font-size: 1em;
	padding: 1.7em;
}
.country-chip:nth-child(-n+3){
	background-color: #B71C1C;
}
.search-bar h1{
	font-size: 2em;
}
</style>







