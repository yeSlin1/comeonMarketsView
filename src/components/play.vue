<template>
  <div class="container login">
  		<div class="span12">
  			<div class="ad">
  				<img src="./../assets/login.jpg"
  					width="500" height="330" alt="会员登录" title="会员登录">
  			</div>
  		</div>
  	<div class="span12 last">
  		<div class="wrap">
  			<div class="main">
  				<div class="title">
  					<strong>订单编号: #123123&nbsp;&nbsp;&nbsp;&nbsp;您需支付金额:￥1232元
  					</strong>
  				</div>
  				<!-- 回写登录失败信息 -->
  				<div>
  					<font color="red"> </font>
  				</div>
  				<form id="loginForm"
  					method="post" novalidate="novalidate"
  					onsubmit="return checkForm();">
  					<input type="hidden" name="order.oid"
  						value="#123123123" />
  					<table>
  						<tbody>
  							<tr>
  								<th>银行账户:</th>
  								<td><input type="text" id="username" name="user.username"
  									class="text" maxlength="20"></td>
  							</tr>
  							<tr>
  								<th>账户密码:</th>
  								<td><input type="password" id="password" name="user.password"
  									class="text" maxlength="20" autocomplete="off"></td>
  							</tr>
  							<tr>
  								<th>&nbsp;</th>
  								<td><input type="submit" class="submit" value="确认支付"></td>
  							</tr>
  						</tbody>
  					</table>
  				</form>
  			</div>
  		</div>
  	</div>
  	</div>
</template>

<script>
export default {
  name: 'play',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
