<template>
<div class="container cart">
  <div class="span24">
  				<div class="step step1">购物车信息</div>
  				<table>
  					<tbody>
  						<tr>
  							<th>图片</th>
  							<th>商品</th>
  							<th>价格</th>
  							<th>数量</th>
  							<th>小计</th>
  							<th>操作</th>
  						</tr>

  							<tr>
  								<td width="60">  <img
      								src="./../assets/shop.jpg" > </td>
  								<td><a target="_blank">121</a></td>
  								<td>￥121
  								</td>
  								<td class="quantity" width="60">11</td>
  								<td width="140"><span class="subtotal">￥123213</span></td>
  								<td><a
  									href="#"
  									class="delete">删除</a></td>
  							</tr>

  					</tbody>
  				</table>
  				<dl id="giftItems" class="hidden" style="display: none;">
  				</dl>
  				<div class="total">
  					<em id="promotion"></em> <em> 登录后确认是否享有优惠 </em> 赠送积分: <em
  						id="effectivePoint"> 123</em> 商品金额: <strong
  						id="effectivePrice">￥ 123123元
  					</strong>
  				</div>
  				<div class="bottom">
  					<a href="#"
  						id="clear" class="clear">清空购物车</a><router-link  to="/order"> <a
  						href="#"
  						id="submit" class="submit">提交订单</a></router-link>
  				</div>
  			</div>
        <!-- <div class="span24">
				<div class="step step1">
					<span><h1><center>亲，购物车空空如也！！赶快去填满我吧！<center/></h1></span>
				</div>
			</div> -->
      </div>
</template>

<script>
export default {
  name: 'catt',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div.cart .step {
	height: 38px;
	margin-bottom: 10px;
}

div.cart .step li {
	width: 150px;
	height: 38px;
	line-height: 38px;
	float: left;
	padding-left: 50px;
	font-size: 14px;
	font-family: "Microsoft YaHei";
}

div.cart .step .current {
	color: #ffffff;
}

div.cart .step1 {
	background: url(../assets/cart.gif) 0px 0px no-repeat;
}

div.cart .step2 {
	background: url(../assets/cart.gif) 0px -38px no-repeat;
}

div.cart .step3 {
	background: url(../assets/cart.gif) 0px -76px no-repeat;
}

div.cart table {
	width: 100%;
	margin-bottom: 10px;
}

div.cart table th {
	line-height: 36px;
	padding: 0px 6px;
	color: #999999;
	font-weight: normal;
	text-align: left;
	border: solid 1px #e6e4e3;
	background-color: #fafafa;
}

div.cart table td {
	line-height: 20px;
	padding: 4px;
	border: solid 1px #f1f1f1;
}

div.cart table img {
	width: 60px;
	height: 60px;
}

div.cart dl {
	height: 20px;
	line-height: 20px;
	padding: 4px 10px;
	margin-bottom: 10px;
	border: solid 1px #f1f1f1;
}

div.cart dt {
	float: left;
	margin-right: 10px;
	font-weight: bold;
}

div.cart dd {
	float: left;
	margin-right: 10px;
}

div.cart .quantity input {
	width: 30px;
	height: 18px;
	line-height: 18px;
	float: left;
	padding: 0px 2px;
	text-align: center;
	ime-mode: disabled;
	border: 1px solid #dbdbdb;
}

div.cart .quantity div {
	height: 18px;
	float: left;
	padding-left: 2px;
}

div.cart .quantity .increase {
	width: 18px;
	height: 7px;
	display: block;
	clear: both;
	margin-bottom: 2px;
	cursor: pointer;
	overflow: hidden;
	border: 1px solid #dbdbdb;
	background: url(../assets/cart.gif) 0px -120px #f9f9f9 no-repeat;
}

div.cart .quantity .decrease {
	width: 18px;
	height: 7px;
	display: block;
	clear: both;
	cursor: pointer;
	overflow: hidden;
	border: 1px solid #dbdbdb;
	background: url(../assets/cart.gif) -30px -120px #f9f9f9 no-repeat;
}

div.cart .total {
	padding: 10px 0px;
	margin-bottom: 10px;
	text-align: right;
}

div.cart .total em {
	margin-right: 14px;
	color: #ff6600;
	font-style: normal;
}

div.cart .total strong {
	color: #ef0101;
	font-size: 14px;
}

div.cart .bottom {
	height: 30px;
	line-height: 30px;
	margin-bottom: 10px;
	text-align: right;
	overflow: hidden;
	border: 1px dotted #e4e4e4;
	background-color: #fdfdfd;
}

div.cart .clear {
	margin-right: 10px;
}

div.cart .submit {
	padding: 14px;
	color: #ffffff;
	background-color: #b31d04;
}

div.cart p {
	line-height: 60px;
	margin-bottom: 10px;
	border-top: 1px solid #e4e4e4;
	border-bottom: 1px solid #e4e4e4;
}
</style>
