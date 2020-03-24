<script type="text/javascript">
  import Navbar from '@/components/Navbar'
  import Footer from '@/components/Footer'
  export default{
    components: {Navbar, Footer}
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

footer{
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 10vh;
  background-color: var(--primary-color);
}

</style>
