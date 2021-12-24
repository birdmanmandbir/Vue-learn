import Vue from 'vue'
import App from './App.vue'
import './thirdmgr/element'
import './thirdmgr/vue-router'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
