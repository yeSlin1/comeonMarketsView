<template>
<div class="container header">
    <div class="span5">
      <div class="logo">
      <img
          src="./../assets/xiaoba.jpg">
      </div>
    </div>
    <div class="span9">
      <div class="headerAd">
       <img src="./../assets/header.jpg" width="320" height="50" alt="正品保障" title="正品保障">
   </div>
    </div>
  <topmenu></topmenu>
    </div>
</template>

<script>
import Topmenu from './menu'
export default {
  name: 'headers',
  data () {
    return{ 
   }
  },
  components: {
   Topmenu
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
