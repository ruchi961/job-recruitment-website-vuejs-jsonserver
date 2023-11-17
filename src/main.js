import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";
import Terms from "./components/terms";
import ShowJobs from "./components/ShowJobs";
import Resume from "./components/Resume.vue";
import ForgotPassword from "./components/ForgotPassword";
import ShowProfile from "./components/ShowProfile";
import Welcome from "./components/Welcome.vue";
import Loggedin from './components/loggedin';
Vue.use(VueRouter)
const routes=[
  {path:"/login",component: Login},
  {path:"/forgotpassword",component: ForgotPassword},
  {path:"/register",component: Register},
  {path:"/profile",component: Profile},
  {path:"/Resume",component: Resume},
  {path:"/term",component: Terms},
  {path:"/welcome",component: Welcome},
  {path:"/showprofile",component: ShowProfile},
  {path:"/emploggedin",component: Loggedin},
  {path:"/showjobs",component: ShowJobs},
  
]
const router= new VueRouter({routes})
Vue.config.productionTip = false
new Vue({
  
  router:router,
  render: h => h(App),
}).$mount('#app')
