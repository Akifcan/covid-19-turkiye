<template>
	<footer>
		<router-link tag='h1' :to="{name: 'home'}">Covid-19 <b>Türkiye</b></router-link>
	</footer>
</template>

<style type="text/css">
footer{
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	min-height: 10vh;
	background-color: var(--primary-color);
}

footer h1{
	cursor: pointer;
}
</style>