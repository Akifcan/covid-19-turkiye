import axios from 'axios'

const state={
	mostAffectedCountries: [],
	countryStat: null,
	loaded: false
}
const getters={
	mostAffectedCountries: state => state.mostAffectedCountries,
	loaded: state => state.loaded,
	countryStat: state => state.countryStat,
}
const mutations={
	setmostAffectedCountries(state, payload){
		state.mostAffectedCountries = payload
	},
	setCountryStat(state, payload){
		state.countryStat = payload
	},
}
const actions={
	getMostAffectedCountries(vuexContext){
		axios({
			"method":"GET",
			"url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/cases_by_country.php",
			"headers":{
				"content-type":"application/octet-stream",
				"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
				"x-rapidapi-key":"8481f0db26mshee467481fa9fd60p17e613jsnf1d8f3e9a61c"
			}
		})
		.then(response => {
			vuexContext.commit('setmostAffectedCountries', response.data.countries_stat.splice(0, 12))
			vuexContext.state.loaded = true
		})
	},
	getCountryStat(vuexContext, countryName){
		axios({
			"method":"GET",
			"url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php",
			"headers":{
				"content-type":"application/octet-stream",
				"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
				"x-rapidapi-key":"8481f0db26mshee467481fa9fd60p17e613jsnf1d8f3e9a61c"
			},"params":{
				"country": countryName
			}
		})
		.then(response => {
			vuexContext.commit('setCountryStat', response.data.latest_stat_by_country[0])
		})
	},
}

export default{
	namespaced: true,
	state, getters, mutations, actions
}