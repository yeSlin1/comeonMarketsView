  <template>
    <b-carousel controls indicators :interval="30000" background="#ABABAB" height="100%">

	  <!-- Text slides -->
	  <b-carousel-slide height="300px" caption="First slide"  >
		<img src="http://placeskull.com/600/300/1C90F3/-1/0">
	 </b-carousel-slide>

	  <!-- Slides with custom text -->
	  <b-carousel-slide height="300px"  caption="First slide">
		<img src="http://placeskull.com/600/300/1C90F3/-1/0">
	  </b-carousel-slide>

	  <!-- Slides with image -->
	  <b-carousel-slide height="300px"  caption="First slide" >
		<img src="http://placeskull.com/600/300/f44336/-1/0">
	  </b-carousel-slide>

	</b-carousel>
  </template>

  <script>
  export default {
    name: 'index',
    data () {
      return {
      }
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
