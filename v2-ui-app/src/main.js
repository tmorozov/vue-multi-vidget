import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import registerCore from './core-register'
import Widgets from './widgets/index'

Vue.config.productionTip = false

registerCore()

// register local widgets
Object.keys(Widgets).forEach(name => Vue.component(name, Widgets[name]))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
