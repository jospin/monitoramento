var controller = null;
app = {
    init: function() {
        if (navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry)/)) {
            document.addEventListener("deviceready", this.onDeviceReady, false);
        } else {
            this.onDeviceReady();
        }
    },
    onDeviceReady: function() {
        $.getScript( "js/controller.js", function( data, textStatus, jqxhr ) {
            if (jqxhr.status == 200) {
                controller = new Controller();
            } else {
                throw new Error("controller.js não foi carregado");
            }
        });
    }
};
app.init();