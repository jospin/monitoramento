var Controller = function() {
    var controller = {
        self: null,
        action: null,
        content:null,
        init: function()
        {
            self = this;
            this.loadEvents();
            this.content = $("#tab-content");
            console.log(this.content);
            // self.renderSearchView();
        },

        loadEvents: function()
        {
            this.action = 'login';
            $('#menu .tab-button').on('click', this.onTabClick);
            this.content.load("./views/" +  self.action + ".html", function(data){
                console.log(data);
            })
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