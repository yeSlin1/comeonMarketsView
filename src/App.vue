<template>
  <div id="app">
     <headers></headers>
      <router-view></router-view>
     <footers></footers>
  </div>
</template>

<script>
import Hello from './components/Hello' 
import Topmenu from './components/menu'
import footers from './components/footer'

import headers from './components/header'
export default {
  name: 'app',
  components: {
    Hello,Topmenu,footers,headers
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
//