<script type="text/javascript">
  import Navbar from '@/components/Navbar'
  import TurkeyCases from '@/components/home/TurkeyCases'
  import LastNews from '@/components/home/LastNews'
  import MostAffectedCountries from '@/components/home/MostAffectedCountries'
  import Charts from '@/components/home/Charts'


  export default{
    created(){
      this.$store.dispatch('turkeyCases/getTurkeyCases')
      this.$store.dispatch('news/getLastNews')
      this.$store.dispatch('countries/getMostAffectedCountries')
    },
    computed: {
      turkeyCases(){
        return this.$store.getters['turkeyCases/cases']
      },
      lastNews(){
        return this.$store.getters['news/lastNews']
      },
      mostAffectedCountries(){
        return this.$store.getters['countries/mostAffectedCountries']
      }
    },
    components: {
      Navbar, TurkeyCases, LastNews, MostAffectedCountries, Charts
    }
  }
</script>

<template>
  <div>
    <main>
      <TurkeyCases :cases='turkeyCases' />
      <Charts />
      <LastNews :lastNews='lastNews' />
      <MostAffectedCountries :countries='mostAffectedCountries' />
    </main>
    
  </div>
</template>