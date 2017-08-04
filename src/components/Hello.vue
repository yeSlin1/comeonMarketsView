<template>
  <div class="hello">

  		<div class="container productList">
    		<leftCategory></leftCategory>
  			<div class="span18 last">
  				<div id="result" class="result table clearfix">
  					<ul>
            <li>
              <router-link to="/shopdetail"> <img  src="./../assets/shop.jpg"
            									style="width: px;height:170px; display: inline-block;"/>
            										<span style='color:green'>商城价：
            											￥4545元
            									</span>
               </router-link>

           </li>
          	</ul>
  				</div>
  				<div class="pagination">
          <span>第1页
          					</span>
                      <span>{{msg}}   </span>
  				</div>

  			</div>
  		</div>
    </div>

      </div>
</template>

<script>
import leftCategory from './leftCategory'
import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueSource)
export default {
  name: 'hello',
  data () {
           return{
            msg: "this.message"
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
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
