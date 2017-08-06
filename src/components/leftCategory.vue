
<template>

<div class="span6">
  <div class="hotProductCategory">
  <dl>
      <dt>
       <a href="#">女装男装</a>
        </dt>
        <dd>
           <a href="#">潮流女装</a>
      </dd>
      <dd>
          <a href="#">初冬羽绒</a>
     </dd>
      <dd>
          <a href="#">冬季外套</a>
      </dd>
      <dd>
          <a href="#">精选男装</a>
      </dd>
      <dd>
          <a href="#">温暖毛衣</a>
      </dd>
      <dd>
          <a href="#">冬季外套</a>
      </dd>
   </dl>
   <dl>
       <dt>
        <a href="#">运动户外</a>
         </dt>
         <dd>
            <a href="#">运动鞋</a>
       </dd>
       <dd>
           <a href="#">运动服</a>
      </dd>
       <dd>
           <a href="#">户外运动</a>
       </dd>
       <dd>
           <a href="#">健身装备</a>
       </dd>
       <dd>
           <a href="#">骑行装备</a>
       </dd>
    </dl>
    <dl>
        <dt>
         <a href="#">珠宝配饰</a>
          </dt>
          <dd>
             <a href="#">服装配饰</a>
        </dd>
        <dd>
            <a href="#">珠宝首饰</a>
       </dd>
        <dd>
            <a href="#">品质手表</a>
        </dd>
        <dd>
            <a href="#">时尚饰品</a>
        </dd>
        <dd>
            <a href="#">眼睛装饰</a>
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
    }
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
