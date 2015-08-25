var User = {};
User.name = 'Lucien Jospin';
User.user = 'ljospin';
User.status = 1;

var Login = function() {
    var login = {
        init: function() {
            $('#btn-login').on('click', this.onLogin);
        }
    },
    onLogin = function(){
        var user = $('#user').value;
        var pass = $('#password').value;
        var user = new User
        return user
    }
    login.init();
    return login;
}
