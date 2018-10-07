import Vue from 'vue'
import Core from '@tymur/v2-core'

export default function registerCore () {
  const { Components: CoreComponents, Services: CoreServices } = Core

  // register components
  Object.keys(CoreComponents).forEach(name => Vue.component(name, CoreComponents[name]))

  // make CoreServices available via plugin
  Vue.use({
    install: function (Vue) {
      Vue.prototype.CoreServices = CoreServices
    }
  })
}
