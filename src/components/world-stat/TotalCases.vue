<script type="text/javascript">
	export default{
		props: {
			stat: {required: true}
		}
	}
</script>

<template>
	<div class="all">
		<div class="total-cases total">
			<h1>Toplam Vakalar</h1>
			<p>{{ stat.totalCases }}</p>
		</div>
		<div class="recovered total">
			<h1>İyileşenler</h1>
			<p>{{ stat.totalRecovered }}</p>
		</div>
		<div class="deaths total">
			<h1>Ölümler</h1>
			<p>{{ stat.totalDeaths }}</p>
		</div>
	</div>

</template>

<style type="text/css">

.all{
	height: 60vh;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	text-align: center;
}

.recovered h1{
	color: #4CAF50;
}

.deaths h1{
	color: #B71C1C;
}

.total h1{
	font-size: 3em;
}

.total p{
	font-size: 2em;
}
</style>