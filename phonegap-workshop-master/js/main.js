var app = {

    // moved the renderHomeView & findByName functions to HomeView class

    initialize: function() {
        // compile the templates for the home view and employee list
        /* this.homeTpl = Handlebars.compile($("#home-tpl").html());
        this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html()); */

        var self = this;
        this.store = new MemoryStore(function() {
            // Display the HomeView using the HomeView class
            $('body').html(new HomeView(self.store).render().el);
        // self.showAlert('Store Initialized', 'Info');
        // self.renderHomeView();

        });
        // $('.search-key').on('keyup', $.proxy(this.findByName, this));
    },

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    }

};

app.initialize();
