<script type="text/javascript">
	export default{
		props: {
			news: { required: true }
		}
	}
</script>

<template>
	<div>
		<div class="new-card" v-for='coronaNew in news'> 
			<div class="new-img">
				<img :src="coronaNew.image">
			</div>
			<div class="new-body">
				<h1>{{ coronaNew.name }}</h1>
				<p>{{ coronaNew.description }}</p>
				<a target="_blank" :href="coronaNew.url">
					<button>Oku</button>
				</a>
			</div>
		</div>
	</div>
	
</template>

<style type="text/css">
.new-card{
	height: auto;
	border-radius: 20px;
	border: 3px solid black;
	display: grid;
	grid-template-columns: 1fr 1fr;
	margin-bottom: var(--default-top);
}
.new-card button{
	border-radius: 20px;
	padding: .9em;
	border: none;
	background-color: #1A237E;
	color: white;
	width: 250px;
}
.new-body{
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}
.new-card{
	padding: .9em;
}
.new-card img{
	height: 250px;
}
</style>