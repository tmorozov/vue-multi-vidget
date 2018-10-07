import Vue from 'vue'
import App from './App.vue'
import registerCore from './core-register'

Vue.config.productionTip = false
registerCore()

new Vue({
  render: h => h(App)
}).$mount('#app')
