<template>
  <div class="menu">
  <div class="span10 last">
<div class="topNav clearfix">
  <ul>

      <li id="headerLogin" class="headerLogin" style="display: list-item;">
        欢迎您：
      </li>
      <li id="headerRegister" class="headerRegister"
        style="display: list-item;"><a href=" #">我的订单</a>|</li>
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
  <a href="#">我的购物车</a>
</div>
<div class="phone">
  客服热线: <strong>96008/53277764</strong>
</div>
</div>
<div class="span24">
<ul class="mainNav">
  <li><a href="#">首页</a>
    |</li>   <li><a 	href="#">女装男装 </a> |</li>
            <li><a   href="#">女装男装 </a> |</li>
                    <li><a href="#"> 女装男装</a> |</li>
                            <li><a   href="#"> 女装男装</a> |</li>
                                    <li><a href="#">女装男装</a> |</li>
</ul>
</div>
</div>

</template>

<script>
export default {
  name: 'order',
  data () {
    return {
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
