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
						<input id="addCart" style="background:" class="addCart" value="加入购物车" type="button"
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
div.productContent .buy .addCart {
	width: 127px;
	height: 36px;
	line-height: 34px;
	float: left;
	padding-left: 20px;
	color: #ffffff;
	font-size: 15px;
	font-weight: bold;
	font-family: "Microsoft YaHei";
	cursor: pointer;
	border: none;
	background: url(../assets/product.gif) 0px -600px no-repeat;
}
@charset "utf-8";

/*
 * Copyright 2005-2013 dhcc.com.cn. All rights reserved.
 * Support: http://www.dhcc.com.cn
 * License: http://www.dhcc.com.cn/license
 *
 * Style - Product
 * Version: 3.0
 */


/* ---------- Score ---------- */

div.score0 {
	width: 60px;
	height: 20px;
	background: url(../assets/review.gif) 0px -60px no-repeat;
}

div.score1 {
	width: 60px;
	height: 20px;
	background: url(../assets/review.gif) 0px -90px no-repeat;
}

div.score2 {
	width: 60px;
	height: 20px;
	background: url(../assets/review.gif) 0px -120px no-repeat;
}

div.score3 {
	width: 60px;
	height: 20px;
	background: url(../assets/review.gif) 0px -150px no-repeat;
}

div.score4 {
	width: 60px;
	height: 20px;
	background: url(../assets/review.gif) 0px -180px no-repeat;
}

div.score5 {
	width: 60px;
	height: 20px;
	background: url(../assets/review.gif) 0px -210px no-repeat;
}

div.score6 {
	width: 60px;
	height: 20px;
	background: url(../assets/review.gif) 0px -240px no-repeat;
}

div.score7 {
	width: 60px;
	height: 20px;
	background: url(../assets/review.gif) 0px -270px no-repeat;
}

div.score8 {
	width: 60px;
	height: 20px;
	background: url(../assets/review.gif) 0px -300px no-repeat;
}

div.score9 {
	width: 60px;
	height: 20px;
	background: url(../assets/review.gif) 0px -330px no-repeat;
}

div.score10 {
	width: 60px;
	height: 20px;
	background: url(../assets/review.gif) 0px -360px no-repeat;
}
 

/* ---------- ProductContent ---------- */

div.productContent .productImage {
	width: 302px;
	height: 370px;
	float: left;
	margin-right: 10px;
	margin-bottom: 10px;
}

div.productContent .productImage .medium {
	width: 300px;
	height: 300px;
	display: block;
	margin-bottom: 4px;
	border: 1px solid #e4e4e4;
}

div.productContent .productImage .prev {
	width: 10px;
	height: 62px;
	display: block;
	float: left;
	margin-right: 5px;
	outline: none;
	blr: expression(this.hideFocus = true);
	border: 1px solid #e4e4e4;
	background: url(../assets/product.gif) -120px -510px no-repeat;
}

div.productContent .productImage .prev:hover {
	background-color: #f1f1f1;
}

div.productContent .productImage .next {
	width: 10px;
	height: 62px;
	display: block;
	float: right;
	margin-left: 4px;
	outline: none;
	blr: expression(this.hideFocus = true);
	border: 1px solid #e4e4e4;
	background: url(../assets/product.gif) -180px -510px no-repeat;
}

div.productContent .productImage .next:hover {
	background-color: #f1f1f1;
}

div.productContent .productImage .disabled {
	cursor: default;
	background-color: #f1f1f1;
}

div.productContent .productImage a[class="prev disabled"] {
	background: url(../assets/product.gif) -150px -510px no-repeat #f4f4f4;
}

div.productContent .productImage a[class="next disabled"] {
	background: url(../assets/product.gif) -210px -510px no-repeat #f4f4f4;
}

div.productContent .productImage .scrollable {
	width: 268px;
	height: 64px;
	float: left;
	position: relative;
    overflow: hidden;
}

div.productContent .productImage .scrollable .items {
	width: 20000em;
	position: absolute;
}

div.productContent .productImage .scrollable a {
	display: block;
	float: left;
	padding: 1px;
	margin-right: 4px;
	outline: none;
	blr: expression(this.hideFocus = true);
	border: 1px solid #e4e4e4;
}

div.productContent .productImage .scrollable a.current {
	padding: 0px;
	border: 2px solid #ff9900;
}

div.productContent .productImage .scrollable img {
	width: 60px;
	height: 60px;
	display: block;
}

div.productContent .productImage .zoomPad {
	float: left;
	position: relative;
	z-index: 99;
	cursor: crosshair;
}

div.productContent .productImage .zoomPreload {
	width: 90px;
	height: 43px;
	* width: 100px;
	* height: 49px;
	padding: 8px;
	text-align: center;
	color: #333333;
	-moz-opacity: 0.8;
	opacity: 0.8;
	filter: alpha(opacity = 80);
	position: absolute;
	top: 0px;
	left: 0px;
	z-index: 110;
	border: 1px solid #e4e4e4;
	background-color: white;
}

div.productContent .productImage .zoomPup {
	overflow: hidden;
	-moz-opacity: 0.6;
	opacity: 0.6;
	filter: alpha(opacity = 60);
	position: absolute;
	z-index: 120;
	cursor: crosshair;
	border: 1px solid #e4e4e4;
	background-color: #ffffff;
}

div.productContent .productImage .zoomOverlay {
	width: 100%;
	height: 100%;
	position: absolute;
	left: 0px;
	top: 0px;
	z-index: 101;
	display: none;
	background: #ffffff;
}

div.productContent .productImage .zoomWindow {
	height: auto;
	position: absolute;
	left: 110%;
	top: 40px;
	z-index: 110;
	background: #ffffff;
}

div.productContent .productImage .zoomWrapper {
	position: relative;
	z-index: 110;
	border: 1px solid #e4e4e4;
}

div.productContent .productImage .zoomWrapperTitle {
	width: 100%;
	height: 18px;
	line-height: 18px;
	color: #ffffff;
	text-align: center;
	font-size: 10px;
	overflow: hidden;
	position: absolute;
	top: 0px;
	left: 0px;
	z-index: 120;
	-moz-opacity: 0.6;
	opacity: 0.6;
	display: block;
	filter: alpha(opacity = 60);
	background: #999999;
}

div.productContent .productImage .zoomWrapperImage {
	display: block;
	position: relative;
	overflow: hidden;
	z-index: 110;
}

div.productContent .productImage .zoomWrapperImage img {
	display: block;
	position: absolute;
	z-index: 101;
	border: 0px;
}

div.productContent .productImage .zoomIframe {
	z-index: -1;
	filter: alpha(opacity=0);
	-moz-opacity: 0.80;
	opacity: 0.80;
	position: absolute;
	display: block;
}

div.productContent .name {
	width: 398px;
	line-height: 26px;
	float: right;
	clear: right;
	color: #414141;
	font-size: 14px;
	font-weight: bold;
}

div.productContent .sn {
	width: 398px;
	float: right;
	clear: right;
	color: #616161;
	border-bottom: 1px dotted #dddddd;
}

div.productContent .sn div {
	height: 24px;
	line-height: 24px;
	float: left;
	margin-right: 10px;
}

div.productContent .info {
	width: 398px;
	line-height: 24px;
	float: right;
	clear: right;
}

div.productContent .info dt {
	width: 54px;
	float: left;
	margin-right: 6px;
	color: #888888;
	white-space: nowrap;
}

div.productContent .info dd {
	width: 338px;
	float: left;
	color: #666666;
}

div.productContent .info strong {
	color: #ef0101;
	font-size: 16px;
	font-weight: bold;
	margin-right: 10px;
}

div.productContent .info del {
	color: #a5a5a5;
	text-decoration: line-through;
}

div.productContent .info span {
	color: #ff6600;
}

div.productContent .info a {
	padding: 1px 2px;
	color: #ffffff;
	background-color: #f07373;
}

div.productContent .action {
	width: 392px;
	line-height: 34px;
	float: right;
	clear: right;
	padding: 2px;
	color: #333333;
	border: 1px solid #e7dbb1;
	background-color: #fffee6;
}

div.productContent .action:hover {
	border-color: #df9a07;
}

div.productContent .specification .title {
	height: 24px;
	line-height: 24px;
	display: none;
	padding-left: 4px;
	color: #666666;
	background-color: #f5efdc;
}

div.productContent .specification dl {
	line-height: 24px;
	clear: both;
	padding: 4px 0px;
}

div.productContent .specification dt {
	width: 60px;
	float: left;
	margin-right: 10px;
	text-align: right;
	color: #888888;
	white-space: nowrap;
	overflow: hidden;
}

div.productContent .specification dd {
	float: left;
	margin-right: 4px;
	color: #666666;
	overflow: hidden;
	white-space: nowrap;
}

div.productContent .specification a {
	display: block;
	float: left;
	position: relative;
	outline: none;
	blr: expression(this.hideFocus = true);
}

div.productContent .specification a span {
	width: 13px;
	height: 13px;
	display: none;
	position: absolute;
	right: 0px;
	bottom: 0px;
	overflow: hidden;
	background: url(../assets/product.gif) 0px -540px no-repeat;
}

div.productContent .specification .text {
	height: 24px;
	line-height: 24px;
	padding: 0px 8px;
	border-top: 1px solid #eeeeee;
	border-right: 1px solid #bbbbbb;
	border-bottom: 1px solid #bbbbbb;
	border-left: 1px solid #eeeeee;
	background-color: #ffffff;
}

div.productContent .specification .text:hover {
	border-color: #ff9900;
}

div.productContent .specification .image {
	width: 26px;
	height: 26px;
	padding: 1px;
	border: 1px solid #cccccc;
	background-color: #ffffff;
}

div.productContent .specification .image:hover {
	border-color: #ff9900;
}

div.productContent .specification .image img {
	width: 26px;
	height: 26px;
	display: block;
}

div.productContent .specification .selected {
	border: 1px solid #f08b02;
}

div.productContent .specification .selected span {
	display: block;
}

div.productContent .specification .locked {
	color: #d6d6d6;
	cursor: not-allowed;
	border-color: #bbbbbb;
	border-style: dotted;
}

div.productContent .productNotify {
	height: 24px;
	line-height: 24px;
	padding: 10px 0px;
	display: none;
	border-bottom: 1px solid #faeac7;
}

div.productContent .productNotify dt {
	width: 60px;
	float: left;
	margin-right: 10px;
	color: #888888;
	text-align: right;
	white-space: nowrap;
}

div.productContent .productNotify dd {
	float: left;
	margin-right: 4px;
	color: #666666;
}

div.productContent .productNotify input {
	width: 122px;
	height: 24px;
	line-height: 24px;
	padding: 0px 2px;
	border: 1px solid #dbdbdb;
}

div.productContent .quantity {
	height: 18px;
	line-height: 18px;
	padding: 10px 0px;
	border-bottom: 1px solid #faeac7;
}

div.productContent .quantity dt {
	width: 60px;
	float: left;
	margin-right: 10px;
	color: #888888;
	text-align: right;
	white-space: nowrap;
}

div.productContent .quantity dd {
	float: left;
	margin-right: 4px;
	color: #666666;
}

div.productContent .quantity input {
	width: 22px;
	height: 18px;
	line-height: 18px;
	float: left;
	padding: 0px 2px;
	text-align: center;
	ime-mode: disabled;
	border: 1px solid #dbdbdb;
}

div.productContent .quantity div {
	height: 18px;
	float: left;
	padding-left: 2px;
}

div.productContent .quantity .increase {
	width: 18px;
	height: 7px;
	display: block;
	clear: both;
	margin-bottom: 2px;
	cursor: pointer;
	overflow: hidden;
	border: 1px solid #dbdbdb;
	background: url(../assets/product.gif) 0px -570px #f9f9f9 no-repeat;
}

div.productContent .quantity .decrease {
	width: 18px;
	height: 7px;
	display: block;
	clear: both;
	cursor: pointer;
	overflow: hidden;
	border: 1px solid #dbdbdb;
	background: url(../assets/product.gif) -30px -570px #f9f9f9 no-repeat;
}

div.productContent .buy {
	height: 36px;
	line-height: 36px;
	padding: 8px 10px 8px 70px;
	border-top: 2px solid #ffffff;
}

div.productContent .buy .addProductNotify {
	width: 127px;
	height: 36px;
	line-height: 34px;
	float: left;
	padding-left: 20px;
	color: #ffffff;
	font-size: 15px;
	font-weight: bold;
	font-family: "Microsoft YaHei";
	cursor: pointer;
	border: none;
	background: url(../assets/product.gif) 0px -600px no-repeat;
}



div.productContent .buy a {
	float: right;
	color: #666666;
}

div.productContent .bar {
	height: 36px;
	clear: both;
	margin-bottom: 10px;
}

div.productContent .bar ul {
	width: 708px;
	height: 32px;
	padding: 1px 0px;
	border: 1px solid #dddddd;
	background: url(../assets/product.gif) 0px -150px repeat-x;
}

div.productContent .bar li {
	height: 32px;
	line-height: 32px;
	float: left;
	padding: 0px 20px;
	border-right: 1px solid #dddddd;
	border-left: 1px solid #ffffff;
}

div.productContent .bar li.current {
	background: url(../assets/product.gif) 0px -210px repeat-x;
}

div.productContent .bar li.current a {
	color: #cc0000;
	font-weight: bold;
}

div.productContent .brief {
	width: 100%;
	border-collapse: separate;
	border-spacing: 1px;
	margin-bottom: 10px;
}

div.productContent .brief th {
	width: 100px;
	height: 30px;
	padding: 0px 6px;
	color: #888888;
	font-weight: normal;
	text-align: right;
	background-color: #eeeeee;
}

div.productContent .brief td {
	padding: 0px 6px;
	color: #999999;
	background-color: #f6f6f6;
}

div.productContent .introduction .title, div.productContent .parameter .title {
	height: 29px;
	line-height: 29px;
	margin-bottom: 10px;
	border-top: 1px solid #aaa8a9;
	background-color: #d3d3d3;
}

div.productContent .introduction .title strong, div.productContent .parameter .title strong {
	display: block;
	float: left;
	padding: 0px 20px;
	color: #ffffff;
	font-size: 14px;
	font-weight: bold;
	font-family: "Microsoft YaHei";
	background-color: #aaa8a9;
}

div.productContent .introduction {
	width: 710px;
	margin-bottom: 10px;
	overflow: hidden;
}

div.productContent .introduction strong {
	font-weight: bold;
}

div.productContent .introduction em {
	font-style: italic;
}

div.productContent .parameter {
	margin-bottom: 10px;
}

div.productContent .parameter table {
	width: 100%;
	line-height: 30px;
}

div.productContent .parameter th {
	width: 100px;
	padding: 0px 10px;
	font-weight: normal;
	text-align: right;
	border: 1px solid #e4e4e4;
}

div.productContent .parameter td {
	padding: 0px 10px;
	border: 1px solid #e4e4e4;
}

div.productContent .parameter .group {
	font-size: 14px;
	text-align: left;
	background-color: #f1f1f1;
}

div.productContent .review {
	padding: 1px;
	margin-bottom: 10px;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
	border: 1px solid #e4e4e4;
}

div.productContent .review .title {
	height: 30px;
	line-height: 30px;
	padding-left: 10px;
	font-size: 14px;
	font-weight: bold;
	font-family: "Microsoft YaHei";
	background-color: #f1f1f1;
}

div.productContent .review .content {
	padding: 0px 10px;
}

div.productContent .review .score {
	width: 120px;
	height: 60px;
	float: left;
	padding-top: 20px;
	margin: 10px 20px 10px 0px;
	color: #808080;
}

div.productContent .review .score strong {
	display: block;
	float: left;
	margin-right: 4px;
	color: #ff6600;
	font-size: 30px;
	font-weight: normal;
	font-family: "Microsoft YaHei";
}

div.productContent .review .score div {
	float: left;
}

div.productContent .review .score div div {
	height: 18px;
	line-height: 18px;
	clear: both;
	white-space: nowrap;
}

div.productContent .review .graph {
	height: 60px;
	width: 400px;
	float: left;
	padding: 10px 10px 10px 0px;
	margin: 10px 0px;
	border-right: 1px solid #e4e4e4;
}

div.productContent .review .graph span {
	height: 21px;
	display: block;
}

div.productContent .review .graph em {
	width: 28px;
	height: 21px;
	line-height: 16px;
	display: block;
	float: right;
	margin-right: 26px;
	color: #ffffff;
	text-align: center;
	font-style: normal;
	background: url(../assets/review.gif) 0px -30px no-repeat;
}

div.productContent .review .graph div {
	width: 400px;
	height: 14px;
	background: url(../assets/review.gif) 0px 0px no-repeat;
}

div.productContent .review .graph li {
	width: 80px;
	height: 26px;
	line-height: 26px;
	float: left;
	color: #808080;
	text-align: center;
}

div.productContent .review .handle {
	height: 40px;
	float: left;
	padding-top: 34px;
	padding-left: 20px;
	margin: 10px 0px;
}

div.productContent .review .handle a {
	padding: 4px 8px;
	color: #ffffff;
	font-weight: bold;
	white-space: nowrap;
	background-color: #2372cf;
}

div.productContent .review table {
	width: 100%;
	line-height: 24px;
	clear: both;
	border-top: 1px solid #e4e4e4;
}

div.productContent .review table th {
	padding: 6px 0px;
	color: #888888;
	font-weight: normal;
	text-align: left;
	border-bottom: 1px dotted #e4e4e4;
}

div.productContent .review table td {
	width: 160px;
	padding-left: 10px;
	border-bottom: 1px dotted #e4e4e4;
}

div.productContent .review span {
	color: #999999;
}

div.productContent .review p {
	padding: 10px 0px;
	color: #888888;
}

div.productContent .consultation {
	padding: 1px;
	margin-bottom: 10px;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
	border: 1px solid #e4e4e4;
}

div.productContent .consultation .title {
	height: 30px;
	line-height: 30px;
	padding-left: 10px;
	font-size: 14px;
	font-weight: bold;
	font-family: "Microsoft YaHei";
	background-color: #f1f1f1;
}

div.productContent .consultation .content {
	padding: 0px 10px;
}

div.productContent .consultation .content li {
	line-height: 24px;
	padding: 10px 0px;
	color: #888888;
	border-bottom: 1px dotted #e4e4e4;
}

div.productContent .consultation .content li.last {
	border-bottom: none;
}

div.productContent .consultation .content li .arrow {
	width: 0px;
	height: 0px;
	margin-left: 20px;
	overflow: hidden;
	border: 6px solid;
	border-color: #ffffff #ffffff #f1f1f1 #ffffff;
}

div.productContent .consultation .content li ul {
	padding: 6px;
	-webkit-border-radius: 5px;
	-moz-border-radius: 5px;
	border-radius: 5px;
	background-color: #f1f1f1;
}

div.productContent .consultation .content li ul li {
	padding: 0px;
	border-bottom: none;
}

div.productContent .consultation .content span {
	color: #999999;
	white-space: nowrap;
}

div.productContent .consultation .content p {
	padding: 10px 0px;
	color: #999999;
}

</style>
