var HomeView = function(store) {
        // Initialization
        this.initialize = function() {
        // Div wrapper for the view - used to attach events
        this.el = $('<div/>');
        var that = this;this.el.on('keyup', '.search-key', function() {that.findByName();});
    };
    this.initialize();

    this.render = function() {
        this.el.html(HomeView.template());
        return this;
    };

    this.findByName = function() {
         store.findByName($('.search-key').val(), function(employees) {
        $('.employee-list').html(HomeView.liTemplate(employees));
    });
        /* console.log('findByName');
        var self = this;
        this.store.findByName($('.search-key').val(), function(employees) {
        $('.employee-list').html(self.employeeLiTpl(employees));
         this.store.findByName($('.search-key').val(), function(employees) {
            var l = employees.length;
            var e;
            $('.employee-list').empty();
            for (var i=0; i<l; i++) {
                e = employees[i];
                $('.employee-list').append('<li><a href="#employees/' + e.id + '">' + e.firstName + ' ' + e.lastName + '</a></li>');
            } */

    };
};
// Add the templates as static members of the HomeView class
HomeView.template = Handlebars.compile($("#home-tpl").html());
HomeView.liTemplate = Handlebars.compile($("#employee-li-tpl").html());
