var MT4 = {};

var controller = null;

MT4.app = {

    init: function() {
        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
            document.addEventListener("deviceready", this.onDeviceReady, false);
        } else {
            this.onDeviceReady();
        }
    },
    onDeviceReady: function() {
        controller = new Controller();
    }
};

MT4.app.init();
