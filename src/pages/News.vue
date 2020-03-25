<script type="text/javascript">
	import NewCard from '@/components/news/NewCard'
	export default{
		components: {
			NewCard,
		},
		computed: {
			allNews(){
				return this.$store.getters['news/allNews']
			}
		},
	}
</script>

<template>
	<main>
		<div class="news">
			<NewCard :news='allNews' />
		</div>
	</main>
</template>

<style type="text/css">

.news{
		padding-top: var(--default-top);
		padding-bottom: var(--default-top);
	height: auto;
}

</style>


