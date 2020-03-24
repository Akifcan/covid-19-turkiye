<script type="text/javascript">
	export default{
		props: {
			countries: {required: true}
		},
		data(){
			return{
				countryNames: {
					'China': 'Çin',
					'USA': 'ABD',
					'Spain': 'İspanya',
					'Germany': 'Almanya',
					'Italy': 'İtalya',
					'Iran': 'İran'
				}
			}
		}
	}
</script>

<template>
	<section class="most-affected-countries">
		<div class="countries-card" v-for='country in countries'>
			<div>
				<h3>{{ countryNames[country.country_name] }}</h3>
				<p>Toplam Vaka: {{ country.cases }}</p>
			</div>
			<ul>
				<li>İyileşenler: {{ country.total_recovered }}</li>
				<li>Ölümler: {{ country.deaths }}</li>
				<li>Yeni Vakalar: {{ country.new_cases }}</li>
			</ul>
		</div>
	</section>
</template>

<style type="text/css">
.most-affected-countries{
	padding-top: var(--default-top);
	padding-bottom:  var(--default-top);
	display: grid;
	column-gap: .9em;
	row-gap: .9em;
	grid-template-columns: 1fr 1fr 1fr;
	justify-items: center;
}

.countries-card{
	display: flex;
	justify-content: space-around;
	align-items: center;
	color: white;
	background-color: var(--card-color);
	width: 100%;
	height: 10vh;
}

.countries-card ul{
	display: none;
	list-style-type: none;
}

.countries-card:hover ul{
	display: block;
}


@media screen and (max-width: 900px){
	.most-affected-countries{
		grid-template-columns: 1fr 1fr;
	}
}
</style>