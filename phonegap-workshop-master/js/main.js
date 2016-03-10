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
        var self = this;
        var hash = window.location.hash;
        if (!hash) {
            if (this.homePage) {
                this.slidePage(this.homePage);
            } else {
                this.homePage = new HomeView(this.store).render();
                this.slidePage(this.homePage);
            }
            return;
        }
        var match = hash.match(this.detailsURL);
        if (match) {
            this.store.findById(Number(match[1]), function(employee) {
                self.slidePage(new EmployeeView(employee).render());
            });
        }
    },

    slidePage: function(page) {

        var currentPageDest,
            self = this;

        // Check if app just started- If yes - no transition, just position new page in view port
        if (!this.currentPage) {
            $(page.el).attr('class', 'page stage-center');
            $('body').append(page.el);
            this.currentPage = page;
            return;
        }

        //Remove old pages no longer in the viewport
        $('.stage-right, .stage-left').not('.homePage').remove();

        if (page === app.homePage) {
            // Always apply a Back transition (slide from left) when we go back to the search page
            $(page.el).attr('class', 'page stage-left');
            currentPageDest = "stage-right";
        } else {
            // Forward transition (slide from right)
            $(page.el).attr('class', 'page stage-right');
            currentPageDest = "stage-left";
        }

        $('body').append(page.el);

        // Wait until the new page has been added to the DOM...
        setTimeout(function() {
            // Slide out the current page: If new page slides from the right -> slide current page to the left, and vice versa
            $(self.currentPage.el).attr('class', 'page transition ' + currentPageDest);
            // Slide in the new page
            $(page.el).attr('class', 'page stage-center transition');
            self.currentPage = page;
        });
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
