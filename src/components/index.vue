  <template>
    <div>
    <headers></headers>
    <div class="container index">
     	<div class="span24">
            <div id="newProduct" class="newProduct clearfix">
      				<div class="title" style="background-color: #825996">
      					<strong>热门商品</strong> <a target="_blank"></a>
      				</div>
      				<ul class="tab" style="background-color:#825996">
      					<li class="current" style="background-color: #825996"><a href="#"
      						target="_blank"></a></li>
      					<li><a target="_blank"></a></li>
      					<li><a target="_blank"></a></li>
      				</ul>
    				<ul class="tabContent" style="display: block;">
    						<li>  <router-link to="/shopdetail"><img
    								src="./../assets/shop.jpg"
    								style="display: block;"></router-link  ></li>
                    <li><router-link to="/shopdetail">
                       <img
                         src="./../assets/shop.jpg"
                         style="display: block;"></router-link  ></li>
    				</ul>
    			</div>
    		</div>
    		<div class="span24">
    			<div id="newProduct" class="newProduct clearfix">
    				<div class="title">
    					<strong>最新商品</strong> <a target="_blank"></a>
    				</div>
    				<ul class="tab">
    					<li class="current"><a href="#"
    						target="_blank"></a></li>
    					<li><a target="_blank"></a></li>
    					<li><a target="_blank"></a></li>
    				</ul>
    				<ul class="tabContent" style="display: block;">
              <li><router-link to="/shopdetail">
                 <img
                   src="./../assets/shop.jpg"
                   style="display: block;"></router-link  ></li>
               <li><router-link to="/shopdetail">
                      <img
                        src="./../assets/shop.jpg"
                        style="display: block;"></router-link  ></li>
                 </ul>
            </ul>
    				</ul>
    			</div>
    		</div>
    		<div class="span24">
    			<div class="friendLink">
    				<dl>
    					<dt>新手指南</dt>
    					<dd>
    						<a target="_blank">支付方式</a> |
    					</dd>
    					<dd>
    						<a target="_blank">配送方式</a> |
    					</dd>
    					<dd>
    						<a target="_blank">售后服务</a> |
    					</dd>
    					<dd>
    						<a target="_blank">购物帮助</a> |
    					</dd>
    					<dd>
    						<a target="_blank">蔬菜卡</a> |
    					</dd>
    					<dd>
    						<a target="_blank">礼品卡</a> |
    					</dd>
    					<dd>
    						<a target="_blank">银联卡</a> |
    					</dd>
    					<dd>
    						<a target="_blank">亿家卡</a> |
    					</dd>

    					<dd class="more">
    						<a>更多</a>
    					</dd>
    				</dl>
    			</div>
    		</div>
    	</div>
<footers></footers>
      </div>
  </template>

  <script>
  import footers from './../components/footer'

  import headers from './../components/header'
  export default {
    name: 'index',
    data () {
      return {
      }
    },components: {
       footers,headers
    }
  }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>


div.index .newProduct {
	margin-bottom: 10px;
}

div.index .newProduct .title {
	width: 260px;
	height: 40px;
	float: left;
	margin-bottom: 10px;
	/* background: url(../images/index.gif) 0px -270px no-repeat; */
	background-color: #AB7156;

}

div.index .newProduct .title strong {
	line-height: 38px;
	display: block;
	float: left;
	padding-left: 10px;
	color: #ffffff;
	font-size: 16px;
	font-family: "Microsoft YaHei";
}

div.index .newProduct .title a {
	width: 40px;
	height: 40px;
	display: block;
	float: right;
}

div.index .newProduct .tab {
	width: 690px;
	height: 40px;
	line-height: 40px;
	float: left;
	margin-bottom: 10px;
	overflow: hidden;
	/* background: url(../images/index.gif) 0px -330px repeat-x; */
	background-color: #AB7156;
}

div.index .newProduct .tab li {
	width: 120px;
	height: 36px;
	line-height: 36px;
	float: left;
	margin-top: 2px;
	font-size: 14px;
	text-align: center;
	overflow: hidden;

}

div.index .newProduct .tab li.current {
	font-weight: bold;
	background-color: #AB7156;
}

div.index .newProduct .newProductAd {
	width: 260px;
	height: 343px;
	float: left;
}

div.index .newProduct .tabContent {
	width: 950px;
	float: left;
	padding-left: 5px;
	_padding-left: 2px;
}

div.index .newProduct .tabContent li {
	float: left;
	margin-right: -1px;
	margin-bottom: 10px;
	_position: relative;
	border:1px solid #e4e4e4;
	margin-left: 14px;}

div.index .newProduct .tabContent li:hover {
	filter: alpha(opacity = 70);
	-moz-opacity: 0.7;
	opacity: 0.7;
}

div.index .newProduct .tabContent img {
	width: 170px;
	height: 170px;
	display: block;
}

div.index .friendLink {
	height: 30px;
	line-height: 30px;
	padding-left: 30px;
	margin-bottom: 10px;
	color: #ffffff;
	background-color: #c5c5c5;
}

div.index .friendLink dt {
	float: left;
	padding: 0px 30px;
	background-color: #6e6e6e;
}

div.index .friendLink dd {
	float: left;
}

div.index .friendLink a {
	margin: 0px 10px;
	color: #ffffff;
}

div.index .friendLink .more {
	float: right;
	background-color: #6e6e6e;
}


  </style>
