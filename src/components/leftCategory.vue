
<template>

<div class="span6">
  <div class="hotProductCategory">
  <dl v-for="cetegory in cetegorys">
        <dt>
        <router-link :to="{ name: 'shoppage', params: {cid:cetegory.cid} }">
          {{cetegory.firstname}}
           </router-link>
         </dt>
        <dd v-for="second in cetegory.scondname">
          <router-link :to="{ name: 'shoppagecs', params: {csid:second.csid}}">
           {{second.secon}}
           </router-link>
        </dd>
   </dl>
  </div>
</div>
</template>
<script>
export default {
  name: 'leftCategory',
  data () {
    return {
      cetegorys:[]
    }
  }, created (){

      this.$http.get('http://localhost:9090/categorysecond/list').then(
        function(response){
        this.cetegorys = response.body;
        },
        function(response){
          console.log("error")
        }
      )
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* ---------- HotProductCategory ---------- */

div.hotProductCategory {
	width: 216px;
	padding: 0px 6px;
	margin-bottom: 10px;
	overflow: hidden;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	border-radius: 3px;
	border: solid 1px #e4e4e4;
}

div.hotProductCategory dl {
	width: 216px;
	line-height: 30px;
	float: left;
	_float: none;
	border-bottom: solid 1px #f1f1f1;
}

div.hotProductCategory dl.last {
	border-bottom: none;
}

div.hotProductCategory dt a {
	font-family: "Microsoft YaHei";
	color: #2c64b1;
	font-size: 14px;
}

div.hotProductCategory dd {
	width: 100px;
	float: left;
	padding-right: 4px;
}
</style>
