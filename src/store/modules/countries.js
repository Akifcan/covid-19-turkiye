import axios from 'axios'

const state={
	mostAffectedCountries: []
}
const getters={
	mostAffectedCountries: state => state.mostAffectedCountries
}
const mutations={
	setmostAffectedCountries(state, payload){
		state.mostAffectedCountries = payload
	}
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
			vuexContext.commit('setmostAffectedCountries', response.data.countries_stat.splice(0, 6))
		})
	}
}

export default{
	namespaced: true,
	state, getters, mutations, actions
}