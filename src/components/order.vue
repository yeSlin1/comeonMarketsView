<template>
  <div class="container cart">
  			<div class="span24">
  				<div class="step step1">
  					<ul>
   				<li class="current"></li>
  						<li>生成订单成功</li>
  					</ul>
  				</div>
  				<table>
  					<tbody>
  						<tr>
  							<th>图片</th>
  							<th>商品</th>
  							<th>价格</th>
  							<th>数量</th>
  							<th>小计</th>
  						</tr>

  							<tr>
  								<td width="60"><input type="hidden" name="id" value="22" />
  									<img
  									src="./../assets/shop.jpg"/>
  								</td>
  								<td><a target="_blank">超级大内内</a></td>
  								<td>123</td>
  								<td class="quantity" width="60">123</td>
  								<td width="140"><span class="subtotal">￥123</span></td>
  							</tr>

  					</tbody>
  				</table>
  				<dl id="giftItems" class="hidden" style="display: none;">
  				</dl>
  				<div class="total">
  					<em id="promotion"></em> 商品金额:123￥<s:property
  							value="order.orderTotal" /></strong>
  				</div>
  				<form id="orderForm"

  					method="post">
  					<input type="hidden" name="order.oid"
  						value="#123123123123" />
  					<div class="span24">
  						<p>
  							收货地址：<input name="order.addr" type="text"
  								value="广东广州市天河区元岗智汇园"
  								style="width:350px" /> <br /> 收货人&nbsp;&nbsp;&nbsp;：<input
  								name="order.name" type="text"
  								value="小丰丰"
  								style="width:150px" /> <br /> 联系方式：<input name="order.phone"
  								type="text" value="15488459965"
  								style="width:150px" />

  						</p>
  						<hr />
  						<p>
  							选择银行：<br /> <input type="radio" name="pd_FrpId"
  								value="ICBC-NET-B2C" checked="checked" />工商银行 <img
  								src="./../assets/bank_img/icbc.bmp"
  								align="middle" />&nbsp;&nbsp;&nbsp;&nbsp; <input type="radio"
  								name="pd_FrpId" value="BOC-NET-B2C" />中国银行 <img
  								src="./../assets/bank_img/bc.bmp"
  								align="middle" />&nbsp;&nbsp;&nbsp;&nbsp; <input type="radio"
  								name="pd_FrpId" value="ABC-NET-B2C" />农业银行 <img
  								src="./../assets/bank_img/abc.bmp"
  								align="middle" /> <br /> <input type="radio" name="pd_FrpId"
  								value="BOCO-NET-B2C" />交通银行 <img
  								src="./../assets/bank_img/bcc.bmp"
  								align="middle" />&nbsp;&nbsp;&nbsp;&nbsp; <input type="radio"
  								name="pd_FrpId" value="PINGANBANK-NET" />平安银行 <img
  								src="./../assets/bank_img/pingan.bmp"
  								align="middle" />&nbsp;&nbsp;&nbsp;&nbsp; <input type="radio"
  								name="pd_FrpId" value="CCB-NET-B2C" />建设银行 <img
  								src="./../assets/bank_img/ccb.bmp"
  								align="middle" /> <br /> <input type="radio" name="pd_FrpId"
  								value="CEB-NET-B2C" />光大银行 <img
  								src="./../assets/bank_img/guangda.bmp"
  								align="middle" />&nbsp;&nbsp;&nbsp;&nbsp; <input type="radio"
  								name="pd_FrpId" value="CMBCHINA-NET-B2C" />招商银行 <img
  								src="./../assets/bank_img/cmb.bmp"
  								align="middle" />
  						</p>
  						<hr />
  						<p style="text-align:right">
  						<router-link  to="/play"><a
  								href="#">
  								<img 	src="./../assets/finalbutton.gif"
  								width="204" height="51" border="0" />
  							</a>
                </router-link>
  						</p>
  					</div>
  				</form>
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
