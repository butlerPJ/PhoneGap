var app = {

    // moved the renderHomeView & findByName functions to HomeView class

    initialize: function() {
        // compile the templates for the home view and employee list
        /* this.homeTpl = Handlebars.compile($("#home-tpl").html());
        this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html()); */

        var self = this;

        // RegEx to match the employee details url's
        this.detailsURL = /^#employees\/(\d{1,})/;

        this.registerEvents();

        this.store = new MemoryStore(function() {
            self.route();
            // Display the HomeView using the HomeView class
            // $('body').html(new HomeView(self.store).render().el);
        // self.showAlert('Store Initialized', 'Info');
        // self.renderHomeView();

        });



        // $('.search-key').on('keyup', $.proxy(this.findByName, this));

    },

    registerEvents: function() {
        // Event Listener for URL hash tag changes
        $(window).on('hashchange', $.proxy(this.route, this));
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

    route: function(){
        var hash = window.location.hash;
        if (!hash) {
            $('body').html(new HomeView(this.store).render().el);
            return;
        }
        var match = hash.match(app.detailsURL);
        if (match) {
            this.store.findById(Number(match[1]), function(employee) {
                $('body').html(new EmployeeView(employee).render().el);
            });
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
