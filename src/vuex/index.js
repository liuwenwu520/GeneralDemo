import Vue from 'vue'
import Vuex from 'vuex'
import session from '@/utils/sessionStorageUtil'

Vue.use(Vuex)
let index = new Vuex.Store({
  state: {
    isLogin: session.get('isLogin') != null ? session.get('isLogin') : false,
    user: {
      username: session.get('username'),
      nickname: session.get('nickname'),
      role: session.get('nickname')
    }
  },
  mutations: {
    changeLoginStatus (state, status) {
      if (typeof (status) === 'boolean') {
        session.set('isLogin', status)
      }
    },
    updateUser (state, u) {
      if (u['nickname']) {
        session.set('nickname', u['nickname'])
      }
      if (u['username']) {
        session.set('username', u['username'])
      }
    }
  }
})
export default index
