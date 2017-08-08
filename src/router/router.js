
import productList from './../components/productList'
import shopdetail from './../components/shopdetail'
import login from './../components/login'
import registers from './../components/register'
import cart from './../components/cart'
import index from './../components/index'
import order from './../components/order'
import play from './../components/play'
import myorder from './../components/orderList'
import shoppage from './../components/shoppage'

const routers = [
  {
    path: '/',
    component: index
  },{
    path: '/myorder',
    component: myorder
  },{
    path: '/play',
    component: play
  },{
    path: '/cart',
    component: cart
  },{
    path: '/order',
    component: order
  },{
    path: '/productList',
    name:"productList",
    component: productList,
    children: [
        {path : '/shoppage/:cid', name: 'shoppage', component:shoppage},
          {path : '/shoppage/:csid', name: 'shoppagecs', component:shoppage},
        {path : '/shoppage/1', name: 'shoppage', component:shoppage},
        {path : '/shoppage/2', name: 'shoppage', component:shoppage},
        {path : '/shoppage/3', name: 'shoppage', component:shoppage},
        {path : '/shoppage/4', name: 'shoppage', component:shoppage},
        {path : '/shoppage/5', name: 'shoppage', component:shoppage},
        {path : '/shoppage/6', name: 'shoppage', component:shoppage},
        {path : '/shoppage/7', name: 'shoppage', component:shoppage},
      ]
  },{
    path: '/shopdetail/:productid',
    name:'shopdetail',
    component: shopdetail
  },{
    path: '/login',
    component: login
  },{
    path: '/register',
    component: registers
  }
]
export default routers
