import axios from 'axios'

const state={
	cases: [],
	loaded: false
}
const getters={
	cases: state => state.cases,
	loaded: state => state.loaded
}
const mutations={
	setCases(state, payload){
		state.cases = payload
	}
}
const actions={
	getTurkeyCases(vuexContext){
		axios({
			"method":"GET",
			"url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/latest_stat_by_country.php",
			"headers":{
				"content-type":"application/octet-stream",
				"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
				"x-rapidapi-key":"8481f0db26mshee467481fa9fd60p17e613jsnf1d8f3e9a61c"
			},"params":{
				"country":"turkey"
			}
		})
		.then(response => {
			vuexContext.commit('setCases', response.data.latest_stat_by_country[0])
			vuexContext.state.loaded = true
		})
	}
}

export default{
	namespaced: true,
	state, getters, mutations, actions
}