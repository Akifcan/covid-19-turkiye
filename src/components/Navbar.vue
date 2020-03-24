<template>
	<nav>
    <router-link tag='h1' :to="{name: 'home'}">Covid-19 Türkiye</router-link>
		<ul>
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
</style>