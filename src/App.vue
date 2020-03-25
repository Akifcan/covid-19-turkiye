<script type="text/javascript">
  import Navbar from '@/components/Navbar'
  import Footer from '@/components/Footer'
  export default{
    created(){
      this.$store.dispatch('turkeyCases/getTurkeyCases')
      this.$store.dispatch('news/getLastNews')
      this.$store.dispatch('countries/getMostAffectedCountries')
      this.$store.dispatch('news/getAllNews')
      this.$store.dispatch('worldStat/setTotalStat')
    },
    computed: {
      loaded(){
        return this.$store.getters['turkeyCases/loaded'] && this.$store.getters['news/loaded'] && this.$store.getters['worldStat/loaded'] && this.$store.getters['countries/loaded']
      }
    },
    data(){
      return{
        forProtectedVirus: ['Ellerini En Az 20 Saniye Sabunlu Su İle Yıka', 'Kabalık Ortamlardan Uzak Dur', 'Dışarıya Çıktığın Zaman Yanında Antiseptik Bulundur', 'Ellerin kirliyken yüzüne götürme']
      }
    },
    components: {Navbar, Footer},
  }
</script>

<template>
  <div @click='close()'>
    <Navbar />
    <router-view v-if='loaded' />
    <div class="loader" v-else><h1>{{ forProtectedVirus[Math.floor(Math.random() * forProtectedVirus.length)] }}</h1></div>
    <Footer />
  </div>
</template>

<style type="text/css">

@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');


:root{
  --primary-color: #263238;
  --card-color: #607D8B;
  --default-top: 2em;
  font-family: 'Open Sans', sans-serif;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main{
  width: 80%;
  margin: auto;
}

.loader{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  text-align: center;
}

</style>
