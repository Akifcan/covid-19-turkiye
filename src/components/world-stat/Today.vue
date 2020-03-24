<script type="text/javascript">
	export default{
		props: {
			stat: { required: true }
		}
	}
</script>

<template>
	<div class="today">
		<div class="today-card">
			<h1>Bugünkü Vakalar</h1>
			<p>{{ stat.newCases }}</p>
		</div>
		<div class="today-card">
			<h1>Ölümler</h1>
			<p>{{ stat.newDeaths }}</p>
		</div>
		<div class="today-card">
			<h1>Son Güncelleme</h1>
			<p>{{ stat.lastUpdate }}</p>
		</div>
	</div>
</template>

<style type="text/css">
.today{
	padding-top: var(--default-top);
	display: flex;
	width: 100%;
	justify-content: space-around;
	margin-bottom: var(--default-top);
}

.today-card{
	border: 2px solid #FF6F00;
	padding: 2em;
}

.today h1{
	font-size: 2em;
}

.today p{
	font-size: 1.3em;
}

.total-cases h1{
	color: #FF9800;
}

@media screen and (max-width: 900px){
	.today{
		flex-direction: column;
	}
	.today-card{
		margin-top: var(--default-top);
		margin-bottom: var(--default-top);
	}
}
</style>