var User = {};
User.name = 'Lucien Jospin';
User.user = 'ljospin';
User.status = 1;

var Login = function() {
    var login = {
        init: function() {
            $('#btn-login').on('click', this.onLogin);
        },
        onLogin = function(){

            // Ok no login
            var user = $('#user').value;
            var pass = $('#password').value;
            var user = new User;
            $('#menu').show();
            alert(user.name);
            return user
        }
    }
    login.init();
    return login;
}
