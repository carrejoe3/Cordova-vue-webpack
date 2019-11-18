// var App = require('App.vue');

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
    // new Vue({
    //     el: '#vapp',
    //     components: {
    //         'App': App
    //     },
    //     template: '<App/>'
    // })
}
