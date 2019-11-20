import Vue from 'vue'
import App from 'App'

document.addEventListener('deviceready', onDeviceReady, false);

// deviceready Event Handler
function onDeviceReady() {
    setupVue();
    cordova.plugins.notification.local.schedule({
        title: 'My first notification',
        text: 'Thats pretty easy...',
        foreground: true
    });
}

function setupVue() {
    new Vue({
        el: '#app',
        components: { App },
        template: '<App/>'
    })
}
