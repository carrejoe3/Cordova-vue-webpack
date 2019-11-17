// import App from 'App'

document.addEventListener('deviceready', onDeviceReady, false);

// deviceready Event Handler
function onDeviceReady() {
    cordova.plugins.notification.local.schedule({
        title: 'My first notification',
        text: 'Thats pretty easy...',
        foreground: true
    });
}

const vueApp = new Vue({
    el: '#vapp',
    data: {}
})
