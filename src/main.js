import Vue from 'vue'
import App from './App.vue'
import router from './router/'

import './style/common.less'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this //安装全局事件总线
  },
}).$mount('#app')
