import axios from 'axios'


const state={
	compare: [],
	compareWith: []
}
const getters={
	compare: state => state.compare,
	compareWith: state => state.compareWith
}
const mutations={
	setCompare(state, payload){
		state.compare = payload
	},
	setCompareWith(state, payload){
		state.compareWith = payload
	}
}
const actions={
	compareCountry(vuexContext, payload){
			axios({
				"method":"GET",
				"url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php",
				"headers":{
					"content-type":"application/octet-stream",
					"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
					"x-rapidapi-key":"8481f0db26mshee467481fa9fd60p17e613jsnf1d8f3e9a61c"
				},"params":{
					"country": payload.countryName
				}
			})	
			.then(response => {
				let countryData = response.data.latest_stat_by_country[0]
				payload.type == 'country' 
					?
					vuexContext.commit('setCompare', countryData)
					:
					vuexContext.commit('setCompareWith', countryData)
			})
		}
	}

	export default{
		namespaced: true,
		state, getters, mutations, actions
	}