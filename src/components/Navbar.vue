<script type="text/javascript">
  export default{
    data(){
      return{
        isMenuOpen: false
      }
    },
    watch: {
      isMenuOpen(val){
        val ?
        this.$refs.menu.style.transform = 'translateY(0px)'
        :
        this.$refs.menu.style.transform = 'translateY(-300px)'
      },
    }
  }
</script>

<template>
	<nav>
    <div class="mobile-menu">
      <div ref='menu' class="menu">
        <router-link tag='a' :to="{name: 'home'}"><span @click='isMenuOpen=false'>Ana Sayfa</span></router-link>
        <router-link tag='a' :to="{name: 'news'}"><span @click='isMenuOpen=false'>Haberler</span></router-link>
        <router-link tag='a' :to="{name: 'worldStat'}"><span @click='isMenuOpen=false'>Tüm Dünya</span></router-link>
      </div>
      <h1 @click='isMenuOpen = !isMenuOpen'>Covid-19 Turkiye</h1>
    </div>
    <router-link tag='h1' class='nav-item' :to="{name: 'home'}">Covid-19 Türkiye</router-link>
    <ul class="nav-item">
     <li><router-link tag='a' :to="{name: 'news'}">Haberler</router-link></li>
     <li><router-link tag='a' :to="{name: 'worldStat'}">Tüm Dünya</router-link></li>
   </ul>
 </nav>
</template>


<style type="text/css">


nav{
  background-color: var(--primary-color);
  min-height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: white;
}

nav a{
  color: white;
  text-decoration: none;
}

nav a:hover{
  text-decoration: underline;
  text-underline-position: under;
}

nav ul{
  list-style-type: none;
  display: flex;
}

nav ul li{
  margin-right: .9em;
}

nav h1{
  cursor: pointer;
}

.mobile-menu{
  display: none;
}

@media(max-width: 900px){
  nav .nav-item{
    display: none;
  }
  nav .mobile-menu{
    display: block;
  }
  nav .mobile-menu .menu{
    display: flex;
    justify-content: space-evenly;
    flex-direction: column;
    align-items: center;
    transition: all .3s;
    transform: translateY(-300px);
    position: absolute;
    left: 0;
    top: 0;
    background-color: black;
    width: 100%;
    height: 20vh;
  }
}

</style>