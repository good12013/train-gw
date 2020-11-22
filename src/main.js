import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css';
import {Button,Message,DatePicker} from 'element-ui'
Message.install = function (Vue, options) {
  Vue.prototype.$message = Message
}
Vue.component(Button.name, Button);
Vue.use(Message);
Vue.use(DatePicker);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
