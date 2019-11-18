// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Datetime from 'vue-datetime'
import 'vue-datetime/dist/vue-datetime.css'
import VueCordova from 'vue-cordova'

Vue.use(VueCordova, {
  optionTestKey: 'optionTestValue'
})

Vue.use(Datetime)

Vue.config.productionTip = false

// add cordova.js only if serving the app through file://
if (window.location.protocol === 'file:' || window.location.port === '3000') {
  var cordovaScript = document.createElement('script')
  cordovaScript.setAttribute('type', 'text/javascript')
  cordovaScript.setAttribute('src', 'cordova.js')
  document.body.appendChild(cordovaScript)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  data: function () {
    return {
      cordova: Vue.cordova
    }
  }
})