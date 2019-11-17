document.addEventListener('deviceready', onDeviceReady, false);

// deviceready Event Handler
function onDeviceReady () {
    cordova.plugins.notification.local.schedule({
        title: 'My first notification',
        text: 'Thats pretty easy...',
        foreground: true
    });
}
