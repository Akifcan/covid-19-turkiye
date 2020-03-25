<script type="text/javascript">
  import Navbar from '@/components/Navbar'
  import Footer from '@/components/Footer'
  export default{
    components: {Navbar, Footer},
    data(){
      return{
        isOpened: false
      }
    },
    methods: {
      openMenu(){
        this.isOpened = !this.isOpened
        this.isOpened ? 
            this.$refs.menu.style.display = 'block'
            : 
            this.$refs.menu.style.display = 'none'

      }
    }
  }
</script>

<template>
  <div>
    <Navbar />
    <router-view />
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

</style>
