import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import turkeyCases from './modules/turkeyCases'
import news from './modules/news'
import countries from './modules/countries'
import worldStat from './modules/worldStat'


export const store = new Vuex.Store({
	modules: {
		turkeyCases, news, countries, worldStat
	}
})