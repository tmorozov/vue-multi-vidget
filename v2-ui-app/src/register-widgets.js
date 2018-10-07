import Widgets from './widgets'
import Vue from 'vue'

export default function registerWidgets () {
  Object.keys(Widgets).forEach(name => Vue.component(name, Widgets[name]))
}
