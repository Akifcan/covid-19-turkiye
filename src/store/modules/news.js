import axios from 'axios'

const state={
	lastNews: [],
	allNews: []
}
const getters={
	lastNews: state => state.lastNews,
	allNews: state => state.allNews
}
const mutations={
	setLastNews(state, payload){
		state.lastNews = payload
	},
	setAllNews(state, payload){
		state.allNews = payload
	}
}
const actions={
	getLastNews(vuexContext){
		axios({
			"method":"GET",
			"url":"https://api.collectapi.com/corona/coronaNews",
			"headers":{
				"content-type":"application/json",
				"authorization": "apikey 5msW9kTCOvqznvq58gCOIO:2rvg8JH7VM27rBe1Ix82Ww"
			},"params":{
				"country":"turkey"
			}
		})
		.then(response => {
			vuexContext.commit('setLastNews', response.data.result.splice(0, 6))
		})
	},
	getAllNews(vuexContext){
		axios({
			"method":"GET",
			"url":"https://api.collectapi.com/corona/coronaNews",
			"headers":{
				"content-type":"application/json",
				"authorization": "apikey 5msW9kTCOvqznvq58gCOIO:2rvg8JH7VM27rBe1Ix82Ww"
			},"params":{
				"country":"turkey"
			}
		})
		.then(response => {
			vuexContext.commit('setAllNews', response.data.result)
		})
	}
}

export default{
	namespaced: true,
	state, getters, mutations, actions
}