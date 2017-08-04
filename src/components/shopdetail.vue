<template>
<div class="container productContent">
<leftCategory></leftCategory>
		<div class="span18 last">

			<div class="productImage">
				<a title="" style="outline-style: none; text-decoration: none;"
					id="zoom"
					href="./../assets/bigPic1ea8f1c9-8b8e-4262-8ca9-690912434692.jpg"
					rel="gallery">
					<div class="zoomPad">
						<img style="opacity: 1;" title="" class="medium"
							src="./../assets/shop.jpg"/><div
								style="display: block; top: 0px; left: 162px; width: 0px; height: 0px; position: absolute; border-width: 1px;"
								class="zoomPup"></div>
							<div
								style="position: absolute; z-index: 5001; left: 312px; top: 0px; display: block;"
								class="zoomWindow">
								<div style="width: 368px;" class="zoomWrapper">
									<div style="width: 100%; position: absolute; display: none;"
										class="zoomWrapperTitle"></div>
									<div style="width: 0%; height: 0px;" class="zoomWrapperImage">

									</div>
								</div>
							</div>
							<div
								style="visibility: hidden; top: 129.5px; left: 106px; position: absolute;"
								class="zoomPreload">Loading zoom</div>
					</div>
				</a>

			</div>
			<div class="name">
				新式貂皮
			</div>
			<div class="sn">
				<div>
					编号：
					123
				</div>
			</div>
			<div class="info">
				<dl>
					<dt>商城价:</dt>
					<dd>
						<strong>￥：122222元
						</strong> 参 考 价：
						<del>
							￥
							122222
							元
						</del>
					</dd>
				</dl>
				<dl>
					<dt>促销:</dt>
					<dd>
						<a target="_blank" title="限时抢购 (2014-07-30 ~ 2015-01-01)">限时抢购</a>
					</dd>
				</dl>
				<dl>
					<dt></dt>
					<dd>
						<span> </span>
					</dd>
				</dl>
			</div>
			<form id="goToCart"
				action="${pageContext.request.contextPath}/cart_addToCart.action"
				method="post">
				<input type="hidden" name="pid"
					  />
				<div class="action">
					<dl class="quantity">
						<dt>购买数量:</dt>
						<dd>
							<input id="count" name="count" value="1" maxlength="4"
								onpaste="return false;" type="text">
								<div>
									<span id="increase" class="increase">&nbsp;</span> <span
										id="decrease" class="decrease">&nbsp;</span>
								</div>
						</dd>
						<dd>件</dd>
					</dl>
					<div class="buy">
						<input id="addCart" class="addCart" value="加入购物车" type="button"
							onclick="saveCart()">
					</div>
				</div>
			</form>
			<div id="bar" class="bar">
				<ul>
					<li id="introductionTab"><a href="#introduction">商品介绍</a></li>

				</ul>
			</div>

			<div id="introduction" name="introduction" class="introduction">
				<div class="title">
					<strong>不错不错</strong>
				</div>
				<div>
					<img
						src="./../assets/shop.jpg"/>
				</div>
			</div>



		</div>
	</div>


</template>

<script>
import leftCategory from './leftCategory'
export default {
  name: 'shopdetail',
  data () {
    return {
    }
  }, created (){
      this.$emit('viewIn',"购彩资讯");
      this.$http.get('http://localhost:9090/user/message') .then(
        function(response){
        this.msg = response.bodyText;
        },
        function(response){
          console.log("error")
        }
      )
    } ,
    components: {
     leftCategory
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
