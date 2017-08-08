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
						<strong>会员登录</strong>USER LOGIN
					</div>
					<!-- 回写登录失败信息 -->
					<div>
						<font color="red"> </font>
					</div>
					<form id="loginForm" onkeypress="" method="post" novalidate="novalidate"
						onsubmit="return checkForm();">
						<table>
							<tbody>
								<tr>
									<th>用户名:</th>
									<td><input type="text" id="username" name="user.username"
										class="text" maxlength="20" ></td>
								</tr>
								<tr>
									<th>密&nbsp;&nbsp;码:</th>
									<td><input type="password" id="password"
										name="user.password" class="text" maxlength="20"
										autocomplete="off"></td>
								</tr>
								<tr>
									<th>&nbsp;</th>
									<td><label> <input type="checkbox"
											id="isRememberUsername" name="isRememberUsername"
											value="true">记住用户名 </label> <label> &nbsp;&nbsp;<a>找回密码</a>
									</label></td>
								</tr>
								<tr>
									<th>&nbsp;</th>
									<td><input type="submit" class="submit" value="登 录"></td>

								</tr>
								<tr class="register">
									<th>&nbsp;</th>
									<td>
										<dl>
											<dt>还没有注册账号？</dt>
											<dd>
												立即注册即可体验在线购物！ <a
													href="#">立即注册</a>
											</dd>
										</dl>
									</td>
								</tr>
							</tbody>
						</table>
					</form>
				</div>
			</div>
		</div>
    <td><button @click="login">登陆</button></td>
	</div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
    }
  },
  methods:{
    login(){
      this.$store.commit("login","dddd")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

div.login .wrap {
	margin-bottom: 10px;
	border: 2px solid #f2f2f2;
}

div.login .main {
	border: 1px solid #d7d7d7;
}

div.login .title {
	height: 40px;
	line-height: 40px;
	color: #d8d8d8;
	font-family: "Microsoft YaHei";
	border-bottom: 1px dotted #ededed;
}

div.login .title strong {
	padding: 0px 10px;
	color: #3164af;
	font-size: 18px;
	font-weight: normal;
}

div.login table {
	width: 100%;
	margin-top: 10px;
}

div.login th {
	width: 90px;
	padding: 12px;
	font-weight: normal;
	text-align: right;
}

div.login .captcha {
	width: 130px;
	text-transform: uppercase;
	ime-mode: disabled;
}

div.login .captchaImage {
	margin-left: 10px;
	vertical-align: middle;
	cursor: pointer;
}

div.login .submit {
	width: 100px;
	height: 35px;
	line-height: 35px;
	margin-bottom: 10px;
	color: #ffffff;
	cursor: pointer;
	outline: none;
	blr: expression(this.hideFocus = true);
	border: none;
	background: url(../assets//login.gif) 0px 0px no-repeat;
}

div.login .register {
	background-color: #f3f3f3;
}

div.login .register dt {
	line-height: 40px;
	color: #cc062d;
	font-size: 18px;
	font-family: "Microsoft YaHei";
}

div.login .register dd {
	line-height: 30px;
	color: #565656
}

div.login .register dd a {
	color: #3164af
}
</style>
