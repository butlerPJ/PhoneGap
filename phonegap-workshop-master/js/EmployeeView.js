var EmployeeView = function(employee) {
    // Initialization
    this.initialize = function(){
        this.el = $('<div/>');
        this.el.on('click', '.add-location-btn', this.addLocation);
    };

    // Render the employee View
    this.render = function(){
        this.el.html(EmployeeView.template(employee));
        return this;
    };

    // addLocation event handler
    this.addLocation = function(e) {
        e.preventDefault();
        console.log('addLocation');
        navigator.geolocation.getCurrentPosition(
            function(position) {
                $('.location',
                  // display the coordinates to the user
                  this.el).html(position.coords.latitude + ',' + position.coords.longitude);
            },
            function() {
                alert('Error getting location');
            });
        return false;

    };

    this.initialize();
};

EmployeeView.template = Handlebars.compile($("#employee-tpl").html());
