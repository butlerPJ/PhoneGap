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
        app.registerEvents();
    },

    registerEvents: function() {
        var self = this;
        // Check browser for touch event support...
        if (document.documentElement.hasOwnProperty('ontouchstart')) {
            // If yes, register touch event listener to change the "selected" state of the list item (blue background)
            $('body').on('touchstart', 'a', function(e) {
                $(e.target).addClass('tappable-active');
            });
            $('body').on('touchend', 'a', function(e) {
                $(e.target).addClass('tappable-active');
            });
            console.log('Touch support!!');
        } else {
            // If no, register mouse events instead
            $('body').on('mousedown', 'a', function(e) {
                $(e.target).addClass('tappable-active');
            });
            $('body').on('mouseup', 'a', function(e) {
                $(e.target).addClass('tappable-active');
            });
            console.log('No Touch support!!');
        }
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
