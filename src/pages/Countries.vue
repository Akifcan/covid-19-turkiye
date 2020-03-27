<script type="text/javascript">
	import SearchBar from '@/components/countries/SearchBar'
	import CountryStat from '@/components/countries/CountryStat'
	import Preventions from '@/components/countries/Preventions'

	export default{
		components: {SearchBar, CountryStat, Preventions},
		computed: {
			affectedCountries(){
				return this.$store.getters['countries/mostAffectedCountries']
			},
			countryStat(){
				return this.$store.getters['countries/countryStat']
			}
		}
	}

</script>

<template>
	<div class="countries">
		<SearchBar :countries='affectedCountries' />
		<component :is="countryStat != null ? 'CountryStat' : 'Preventions'" :country='countryStat' />
	</div>
</template>

<style type="text/css">
	.countries{
		display: flex;
		height: 80vh;
	}
	hr{
		background-color: var(--primary-color);
		margin-top: .9em;
		margin-bottom: .9em;
	}
</style>