import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import 'semantic-ui-css/semantic.min.css'

Vue.use(Datetime)
Vue.config.productionTip = false
Vue.config.ignoredElements = [/^ion-/]

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
