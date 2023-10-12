
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import request from 'common/requset.js'
Vue.prototype.$request = request 
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
import http from '@/common/requset.js'

export function createApp() {
  const app = createSSRApp(App)
  app.config.globalProperties.$http=http
  return {
    app
  }
}
// #endif