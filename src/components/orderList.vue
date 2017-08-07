<template>
  <div class="container cart">

  				<div class="span24">

  					<div class="step step1">
  						<ul>

  							<li class="current"></li>
  							<li>我的所有订单</li>
  						</ul>
  					</div>
  					<table>
  						<tbody>
  							<!-- <s:iterator var="order" value="pageBean.list"> -->
  								<th colspan="5">订单编号：#123123&nbsp;&nbsp;&nbsp;&nbsp;
  									订单状态：<a
                      href="#"><font
                      color="red">去付款</font></a>
  										<!-- <s:if test="#order.state==1">
  									</s:if> <s:if test="#order.state==2">已付款</s:if> <s:if
  										test="#order.state==3">
  										<a
  											href=" ${pageContext.request.contextPath}/order_updateState.action?order.oid=<s:property  value="#order.oid"/>"><font
  											color="red">确认收货</font></a>
  									</s:if> <s:if test="#order.state==4">交易完成</s:if> -->
  									&nbsp;&nbsp;&nbsp;&nbsp;订单总金额：1234元
  								</th>
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
  											src="./../assets/shop.jpg" />
  										</td>
  										<td><a target="_blank">超级大内内</a></td>
  										<td>1233</td>
  										<td class="quantity" width="60">12</td>
  										<td width="140"><span class="subtotal">￥1234</span></td>
  									</tr>
                    <th colspan="5">订单编号：#123123&nbsp;&nbsp;&nbsp;&nbsp;
    									订单状态：<a
                        href="#"><font
                        color="red">去付款</font></a>
    										<!-- <s:if test="#order.state==1">
    									</s:if> <s:if test="#order.state==2">已付款</s:if> <s:if
    										test="#order.state==3">
    										<a
    											href=" ${pageContext.request.contextPath}/order_updateState.action?order.oid=<s:property  value="#order.oid"/>"><font
    											color="red">确认收货</font></a>
    									</s:if> <s:if test="#order.state==4">交易完成</s:if> -->
    									&nbsp;&nbsp;&nbsp;&nbsp;订单总金额：1234元
    								</th>
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
    											src="./../assets/shop.jpg" />
    										</td>
    										<td><a target="_blank">超级大内内</a></td>
    										<td>1233</td>
    										<td class="quantity" width="60">12</td>
    										<td width="140"><span class="subtotal">￥1234</span></td>
    									</tr>
                  <!-- </s:iterator>
              							</s:iterator> -->
  						</tbody>
  					</table>

  					<div class="pagination">
  						<span>第1/1页
  						</span>
  						<!-- <s:if test="pageBean.pageNow!=1"> -->
  							<a class="firstPage"
  								href="#">&nbsp;</a>
  							<!-- <a class="previousPage"
  								href="+">&nbsp;</a>
  						</s:if> -->
  						<!-- <s:iterator var="i" begin="1" end="pageBean.pageCount">
  							<s:if test="pageBean.pageNow!=#i"> -->
  								<a
  									href="#">123</a>
  							<!-- </s:if>
  							<s:else> -->
  								<span class="currentPage"><s:property value="#i" /></span>
  							<!-- </s:else>
  						</s:iterator> -->
  						<!-- <s:if test="pageBean.pageNow!=pageBean.pageCount">
  							<a class="nextPage"
  								href="${pageContext.request.contextPath}/order_findByUid.action?pageNow=<s:property  value="pageBean.pageCount"/>">&nbsp;</a>
  							<a class="lastPage"
  								href="${pageContext.request.contextPath}/order_findByUid.action?pageNow=<s:property  value="pageBean.pageNow+1"/>">&nbsp;</a>
  						</s:if> -->
  					</div>
  				</div>
  			<!-- </s:if>
  			<s:else> -->
  				<!-- <div class="span24">
  					<div class="step step1">
  						<span><h1>
  								<center>
  									亲，您新来的吧？还没有购物呢！先去购物才能来看我哦！
  									<center />
  							</h1></span>
  					</div>
  				</div>
  			</s:else> -->
  		</div>
</template>

<script>
export default {
  name: 'myorder',
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
}</style>
