var controller = null;
var login = null;

app = {
    init: function() {
        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
            document.addEventListener("deviceready", this.onDeviceReady, false);
        } else {
            this.onDeviceReady();
        }
    },
    onDeviceReady: function() {
        login = new Login();
        if (login.valida()) {
            controller = new Controller();
        }
    }
};

app.init();
