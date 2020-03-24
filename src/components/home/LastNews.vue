<script type="text/javascript">
	export default{
		props: {
			lastNews: {required: true}
		}
	}
</script>

<template>
	<section class="last-news">
		<marquee>
			<span v-for='lastNew in lastNews'><b><a target="_blank" :href="lastNew.url">{{ lastNew.name }}</a></b></span>
		</marquee>
	</section>
</template>

<style type="text/css">
	.last-news{
		padding-top: var(--default-top);
	}

	marquee span{
		margin-right: 2em;
	}

	marquee span a{
		color: black;
		text-decoration: none;
	}

	marquee span a:hover{
		text-decoration: underline;
		text-underline-position: under;
	}
</style>