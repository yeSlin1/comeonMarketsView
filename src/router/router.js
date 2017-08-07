
import productList from './../components/productList'
import shopdetail from './../components/shopdetail'
import login from './../components/login'
import registers from './../components/register'
import cart from './../components/cart'
import index from './../components/index'
import order from './../components/order'
import play from './../components/play'
import myorder from './../components/orderList'

import index2 from './../components/index2'
const routers = [
  {
    path: '/',
    component: index2
  },{
    path: '/index',
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
    component: productList
  },{
    path: '/shopdetail',
    component: shopdetail
  },{
    path: '/login',
    component: login
  }
  ,{
    path: '/register',
    component: registers
  }
]
export default routers
