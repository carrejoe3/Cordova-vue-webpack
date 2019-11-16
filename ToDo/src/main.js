// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import VueCordova from 'vue-cordova'

Vue.use(VueCordova)
Vue.use(Datetime)

Vue.config.productionTip = false

/* eslint-disable no-new */
let vueApp = new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  methods: {
    sendNotification: function () {
      Vue.cordova.plugins.notification.local.schedule({
        title: 'My first notification',
        text: 'Thats pretty easy...',
        foreground: true
      })
      console.log('this is running')
    }
  },
  mounted () {
    this.sendNotification()
  }
})

document.addEventListener('deviceready', onDeviceReady, false)

function onDeviceReady () {
  vueApp.sendNotification()
}
