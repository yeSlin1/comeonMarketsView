<template>
  <div class="menu">
  <div class="span10 last">
<div class="topNav clearfix">
  <ul>
        <li id="headerLogin" class="headerLogin" style="display: list-item;">

              <router-link to="/login">登录 </router-link>
              |
    				</li>
    				<li id="headerRegister" class="headerRegister"
    					style="display: list-item;">
                  <router-link to="/register">注册 </router-link>|
    				</li>
     <li id="headerLogin" class="headerLogin" style="display: list-item;">
        {{ username }}
      </li>
      <li id="headerRegister" class="headerRegister"
        style="display: list-item;">
  <router-link to="/myorder">
        <a href=" #">我的订单</a></router-link>|</li>
      <li id="headerRegister" class="headerRegister"
        style="display: list-item;"><a
        href=" #">退出</a>|
      </li>
    <li>
<router-link to="/shop">会员中心 </router-link>
    |</li>
    <li><a>购物指南</a> |</li>
    <li><a>关于我们</a></li>
  </ul>
</div>
<div class="cart">
<router-link to="/cart">我的购物车{{ shopcarcount }} </router-link>
</div>
<div class="phone">
  客服热线: <strong>96008/53277764</strong>
</div>
</div>
<div class="span24">
<ul class="mainNav">
  <li> <router-link  to="/"><a href="#">首页</a></router-link>   |</li>
  <li v-for="cetegory in cetegorys">
      <router-link :to="{ name: 'shoppage', params: {cid:cetegory.cid} }">
     {{cetegory.cname}}
     </router-link>|</li>
     <!-- <a  href="javascript:volid(0);" v-on:click="goto" class="">
           goto
          </a> -->
</ul>
</div>
</div>

</template>

<script>
export default {
  name: 'topmenu',
  data () {
    return {
      cetegorys:[]
    }
  },
  computed:{
    username(){
      return this.$store.state.username
    },
    shopcarcount(){
      return this.$store.state.shopcarcount
    }
  }, created (){

      this.$http.get('http://localhost:9090/category/list').then(
        function(response){
        this.cetegorys = response.body;
        },
        function(response){
          console.log("error")
        }
      )
    },methods:{
       goto: function (event) {

         this.$router.go(0);
       }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.header .cart {
	width: 60px;
	height: 28px;
	line-height: 28px;
	_display: inline;
	float: left;
	padding-left: 30px;
	margin-left: 80px;
	margin-bottom: 4px;
	background: url(../assets/common.gif) -210px -180px no-repeat;
}
</style>
