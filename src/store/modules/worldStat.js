import axios from 'axios'

const state={
	all: [],
	today: [],
	loaded: false
}
const getters={
	all: state => state.all,
	today: state => state.today,
	loaded: state => state.loaded
}
const mutations={
	setAll(state, payload){
		state.all = payload
	},
	setToday(state, payload){
		state.today = payload
	}
}
const actions={
	setTotalStat(vuexContext){
		axios({
			"method":"GET",
			"url":"https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
			"headers":{
				"content-type":"application/octet-stream",
				"x-rapidapi-host":"coronavirus-monitor.p.rapidapi.com",
				"x-rapidapi-key":"8481f0db26mshee467481fa9fd60p17e613jsnf1d8f3e9a61c"
			}
		})
		.then(response => {
			vuexContext.commit('setAll', {
				totalCases: response.data.total_cases,
				totalDeaths: response.data.total_deaths,
				totalRecovered: response.data.total_recovered
			})
			vuexContext.commit('setToday', {
				newCases: response.data.new_cases,
				newDeaths: response.data.new_deaths,
				lastUpdate: response.data.statistic_taken_at
			})
			vuexContext.state.loaded = true
		})
	}
}

export default{
	namespaced: true,
	state, getters, mutations, actions
}