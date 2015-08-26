var controller;
var Login = function() {
    var login = {
        init: function() {
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
            return valida;
        },
        renderLoginView: function() {
            if (login.status == true) {
                return login;
            }
            $('#menu').hide();

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