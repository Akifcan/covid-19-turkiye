<script type="text/javascript">
  import Navbar from '@/components/Navbar'
  import TurkeyCases from '@/components/home/TurkeyCases'
  import LastNews from '@/components/home/LastNews'
  import MostAffectedCountries from '@/components/home/MostAffectedCountries'
  import Charts from '@/components/home/Charts'


  export default{
    computed: {
      turkeyCases(){
        return this.$store.getters['turkeyCases/cases']
      },
      lastNews(){
        return this.$store.getters['news/lastNews']
      },
      mostAffectedCountries(){
        return this.$store.getters['countries/mostAffectedCountries']
      },
    },
    components: {
      Navbar, TurkeyCases, LastNews, MostAffectedCountries, Charts
    }
  }
</script>

<template>
  <div>
    <div class="background"></div>
    <main>
      <TurkeyCases :cases='turkeyCases' />
      <Charts />
      <LastNews :lastNews='lastNews' />
      <MostAffectedCountries :countries='mostAffectedCountries' />
    </main>
    
  </div>
</template>

<style type="text/css">
.background{
  display: none;
}
@media(max-width: 900px){
  .background{
    position: absolute;
    display: block;
    background-color: #90A4AE;
    height: 110vh;
    width: 100%;
    z-index: -1;
  }
}
</style>