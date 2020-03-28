<script type="text/javascript">
	import SearchBar from '@/components/countries/SearchBar'
	import CountryStat from '@/components/countries/CountryStat'
	import Preventions from '@/components/countries/Preventions'

	export default{
		components: {SearchBar, CountryStat, Preventions},
		data(){
			return{
				redirectToComparePage: false
			}
		},
		computed: {
			affectedCountries(){
				return this.$store.getters['countries/mostAffectedCountries']
			},
			countryStat(){
				return this.$store.getters['countries/countryStat']
			},
			compare(){
				return this.$store.getters['countries/compare']
			},
			compareWith(){
				return this.$store.getters['countries/compareWith']
			}
		},
		methods: {
			addToCompare(country){
				if(this.compare == null && this.compareWith == null){
					this.$store.commit('countries/addCompare', country)
					this.$refs.compareFeed.innerHTML = `<p>Karşılaştırmaya Eklenmiştir</p>  <b>${country}</b>`
				}else if(this.compare != null && this.compareWith == null){
					this.$store.commit('countries/addCompareWith', country)
				}
				this.$refs.compareFeed.style.transform = 'translateY(0px)'

				setTimeout(() => {
					this.$refs.compareFeed.style.transform = 'translateY(300px)'
				}, 3000)
			}
		},
		watch: {
			compareWith(val){
				if(this.compare != null && this.compareWith != null){
					this.$refs.redirectComparePage.style.transform = 'translateY(0px)'
					this.$refs.compareFeed.innerHTML = `
						<p>Karşılaştırma Hazır</p>  
						<b>${this.compare}</b> 
						<b>${this.compareWith}</b>
					`
				}
			}
		}
	}

</script>

<template>
	<div class="countries">
		<div class="compare-feed" ref='compareFeed'></div>
		<div class="redirect-compare-page" ref='redirectComparePage'>
			<router-link tag='button' :to="{name: 'compare', 
								query: {
									'country': this.compare, 
									'compareWith': this.compareWith
								}}">
								Karşılaştır
			</router-link>
		</div>
		<SearchBar :countries='affectedCountries' />
		<component :is="countryStat != null ? 'CountryStat' : 'Preventions'" 
					:country='countryStat' 
					@compare='addToCompare($event)' />
	</div>
</template>

<style type="text/css">
.compare-feed, .redirect-compare-page{
	display: flex;
	flex-direction: column;
	text-align: center;
	justify-content: center;
	align-items: center;
	position: absolute;
	transition: all .3s;
	transform: translateY(300px);
	right: 0;
	bottom: 0;
	margin: 2em;
	width: 40%;
	background-color: var(--card-color);
	height: 150px;
	border-radius: .9em;
	color: white;
	z-index: 1;
}

.redirect-compare-page button{
	background-color: var(--card-color);
	width: 30%;
	height: 40px;
	border: 2px solid var(--primary-color);
	outline: none;
	border-radius: 1em;
	color: white;
	text-align: center;
}

.countries{
	position: relative;
	overflow: hidden;
	display: flex;
	min-height: 80vh;
}

hr{
	background-color: var(--primary-color);
	margin-top: .9em;
	margin-bottom: .9em;
}

@media(max-width: 900px){
	.compare-feed, .redirect-compare-page{
		width: 40%;
	}
	.redirect-compare-page button{
		width: 50%;
	}
}
</style>