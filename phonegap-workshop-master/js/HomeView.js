var HomeView = function(store) {
        // Initialization
        this.initialize = function() {
        // Div wrapper for the view - used to attach events
        this.el = $('<div/>');
        // Event listener
        var that = this;this.el.on('keyup', '.search-key', function() {that.findByName();});
    };

    this.initialize();
    // Render the HomeView
    this.render = function() {
        this.el.html(HomeView.template());
        return this;
    };
    // Find and display names that contain the characters typed by the user
    this.findByName = function() {
         store.findByName($('.search-key').val(), function(employees) {
        $('.employee-list').html(HomeView.liTemplate(employees));
             // If an iScroll object already exists, use it
             if (self.iscroll) {
                 console.log('Refresh iScroll');
                 self.iscroll.refresh();
                 // If no iScroll object exists, create one
             } else {
                 console.log('New iScroll');
                 self.iscroll = new iScroll($('.scroll', self.el)[0], {hScrollbar: false, vScrollbar: false });
             }
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
