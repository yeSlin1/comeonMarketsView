
import Hello from './../components/Hello'
import shopdetail from './../components/shopdetail'
import login from './../components/login'
import registers from './../components/register'

const routers = [
  {
    path: '/',
    component: Hello
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
