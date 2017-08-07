<template>
  <div id="app">
     <!-- <headers></headers> -->
     <router-view></router-view>
    <!-- <footers></footers> -->
	<!-- <index2></index2> -->
  </div>
</template>

<script>
import Topmenu from './components/menu'
import footers from './components/footer'

import headers from './components/header'
import index2 from './components/index2'



export default {
  name: 'app',
  components: {
    Topmenu,footers,headers,index2
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
