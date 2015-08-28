var Controller = function() {
    var controller = {
        self: null,
        action: null,
        content:null,
        init: function()
        {
            self = this;
            this.content = $("#tab-content");
            this.loadEvents();
            // self.renderSearchView();
        },

        loadEvents: function()
        {
            this.action = 'login';
            var object = this.action.toLowerCase().replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
            $.getScript( "js/controller/"+this.action+".js", function( data, textStatus, jqxhr ) {

                if (jqxhr.status == 200) {
                    var action = window[object]();
                    return action;
                } else {
                    throw new Error("controller.js não foi carregado");
                }
            });
            $('#menu .tab-button').on('click', this.onTabClick);
        },

        onTabClick: function()
        {
            if ($(this).hasClass('active')) {
                return;
            }
            self.action = $(this).data('tab').replace('#', '');
            console.log(self.action);
            this.content.load("./views/" +  self.action + ".html", function(data){
                console.log(data);
            })
        }


    }
    controller.init();
    return controller;
}