<script type="text/javascript">
	import {forProtectedVirus} from '@/mixins/forProtectedVirus'
	import {search} from '@/mixins/search'
	export default{
		mixins: [forProtectedVirus, search]
	}
</script>

<template>
	<div class="prevensions">
		<input type="text" class="prevensions-input" placeholder="Ülke (eg: Turkey)" v-model='countryName' @keyup.enter='searchCountry()' />
		<div class="images">
			<img 
			:src="require('@/assets/antibacterial.png')" 
			height="200" 
			alt="antiseptik kullanın" 
			title="Antiseptik jeller kullanın" 
			/>
			<img 
			:src="require('@/assets/hygiene.png')" 
			height="200" 
			alt="hijyen"
			title="Hijyene önem verin" 
			/>
			<img 
			:src="require('@/assets/no-handshake.png')" 
			height="200" 
			alt="temastan kaçının" 
			title="Temastan kaçının" 
			/>
			<img 
			:src="require('@/assets/real-estate.png')" 
			height="200" 
			alt="zorunlu olmadıkça evden çıkmayın"
			title="Zorunlu olmadıkça evden çıkmamaya çalışın" 
			/>
		</div>
		<ul>
			<li v-for='(protect, i) in forProtectedVirus'> <b>{{ i+1 }}</b> {{ protect }}</li>
		</ul>
	</div>
</template>

<style type="text/css">
.prevensions-input input{
	display: none;
}
.prevensions{
	height: 80vh;
	flex: 3;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.prevensions ul{
	list-style-type: none;
}
.prevensions ul li{
	margin-top: 1em;
	font-size: 1.5em;
}
@media(max-width: 900px){
	input{
		display: block;
		width: 100%;
		outline: none;
		height: 40px;
		border-radius: 2em;
		font-size: 1em;
		text-indent: 10px;
		margin-bottom: .9em;
		z-index: -1;
	}
	.prevensions{
		padding: 0.5em;
	}
	img{
		height: 50px;
	}
}
</style>