<script type="text/javascript">
	import TotalCases from '@/components/world-stat/TotalCases'
	import Today from '@/components/world-stat/Today'

	export default{
		created(){
			this.$store.dispatch('worldStat/setTotalStat')
		},
		computed: {
			totalStat(){
				return this.$store.getters['worldStat/all']
			},
			todayStat(){
				return this.$store.getters['worldStat/today']
			}
		},
		components: {
			TotalCases, Today
		}
	}
</script>

<template>
	<div>
		<main>
			<section class="world-stat">
				<TotalCases :stat='totalStat' />
				<Today :stat='todayStat' />
			</section>
		</main>
	</div>
</template>

<style type="text/css">
.world-stat{
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;
	text-align: center;
}




</style>