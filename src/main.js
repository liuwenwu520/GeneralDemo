// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from '@/vuex/index'
import router from './router/index'
import axios from 'axios'
import session from '@/utils/sessionStorageUtil'

// 设置为 false 以阻止 vue 在启动时生成生产提示
Vue.config.productionTip = false

Vue.use(ElementUI)

axios.defaults.baseURL = 'http://localhost:8080/'
axios.defaults.withCredentials = true
Vue.prototype.axios = axios
Vue.prototype.session = session

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
