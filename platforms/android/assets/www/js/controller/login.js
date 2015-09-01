var Login = function() {
    var login = {
        content:null,
        self: null,
        init: function() {
            self = this;
            this.content = $("#tab-content");
            if (!login.status) {
                this.renderLoginView();
            }
        },
        valida: function() {
            if (login.status == true) {
                return true;
            }
        },
        onLogin: function(){
            login.status = true;
            $('#menu').show();
                controller = new Controller();
            return login.valida();
        },
        renderLoginView: function() {

            if (login.status == true) {
                return login;
            }
            $('#menu').hide();
                this.content.load("./views/login.html", function(data){
            })

            var $tab = $('#tab-content');
            $tab.empty();
            var $projectTemplate = null;
            $("#tab-content").load("./views/login.html", function(data) {
                $projectTemplate = $('.project').remove();
                $('#btn-login').on('click', login.onLogin);
            });

        }
    }
    login.init();
    return login;
}