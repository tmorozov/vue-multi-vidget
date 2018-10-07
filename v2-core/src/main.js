import Vue from 'vue'
import KitchenSink from './KitchenSink.vue'
import Core from './core'

Vue.config.productionTip = false

const { Components: CoreComponents, Services: CoreServices } = Core

// register components
Object.keys(CoreComponents).forEach(name => Vue.component(name, CoreComponents[name]))

// make CoreServices available ?plugin
Vue.use({
  install: function (Vue) {
    Vue.prototype.CoreServices = CoreServices
  }
})

new Vue({
  render: h => h(KitchenSink)
}).$mount('#app')
