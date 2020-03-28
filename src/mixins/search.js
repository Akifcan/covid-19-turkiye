export const search = {
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
	}
}