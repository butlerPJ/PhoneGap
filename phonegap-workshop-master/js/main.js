var app = {

    findByName: function() {
        // console.log('findByName');
        var self = this;
        this.store.findByName($('.search-key').val(), function(employees) {
        $('.employee-list').html(self.employeeLiTpl(employees));
        /* this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            } */
        });
    },

    initialize: function() {
        // compile the templates for the home view and employee list
        this.homeTpl = Handlebars.compile($("#home-tpl").html());
        this.employeeLiTpl = Handlebars.compile($("#employee-li-tpl").html());

        var self = this;
        this.store = new MemoryStore(function() {
        // self.showAlert('Store Initialized', 'Info');
        self.renderHomeView();

        });
        $('.search-key').on('keyup', $.proxy(this.findByName, this));
    },

    showAlert: function (message, title) {
        if (navigator.notification) {
            navigator.notification.alert(message, null, title, 'OK');
        } else {
            alert(title ? (title + ": " + message) : message);
        }
    },

    renderHomeView: function() {
        /*var html = "<div class='header'><h1>Home</h1></div>" + "<div class='search-view'>" + "<input class='search-key'/>" +
        "<ul class='employee-list'></ul>" + "</div>";
        $('body').html(html); */
        // use the template to display the home view instead of inline html like above
        $('body').html(this.homeTpl());
        // display name hints on character typing
        $('.search-key').on('keyup', $.proxy(this.findByName, this));

    }

};

app.initialize();
