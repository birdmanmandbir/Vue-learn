import Vue from 'vue'
import App from './App.vue'
import './thirdmgr/element'
import router from './thirdmgr/vue-router'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
