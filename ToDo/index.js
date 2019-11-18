var app = {
    initialize: function() {
        this.bindEvents();
        this.setupVue();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    receivedEvent: function(id) {
        console.log('Received Event: ' + id);
    },
    setupVue: function() {
        alert('this is running');
    }
};

app.initialize();