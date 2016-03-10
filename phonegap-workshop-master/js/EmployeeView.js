var EmployeeView = function(employee) {
    // Initialization
    this.initialize = function(){
        this.el = $('<div/>');
        // Event listener for Add Location button
        this.el.on('click', '.btnLocation', this.addLocation);
        // Event Listener for Add Contact button
        this.el.on('click', '.btnContact', this.addToContacts);
        // Event Listener for change picture button
        this.el.on('click', '.btnPicChange', this.changePic);
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

    // Add to contacts event handler
    this.addToContacts = function(e) {
        e.preventDefault();
        console.log('addToContacts');
        if (!navigator.contacts) {
            app.showAlert("Contacts API not supported", "Error");
            return;
        }

        // Cretate a new contact
        var contact = navigator.contacts.create();
        contact.name = {givenName: employee.firstName, familyName: employee.lastName};
        // Array to hold phone numbers
        var phoneNumbers = [];
        // Add the phone numbers to the array
        phoneNumbers[0] = new ContactField('work', employee.officePhone, false);
        phoneNumbers[1] = new ContactField('mobile', employee.cellPhone, true);
        contact.phoneNumbers = phoneNumbers;
        // Save the contact
        contact.save();
        return false;
    };

    this.changePicture = function(e) {
        e.preventDefault();
    if (!navigator.camera) {
        app.showAlert("Camera API not supported", "Error");
        return;
    }
    var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        // 0:Photo Library, 1=Camera, 2=Saved Photo Album
        sourceType: 1,
        // 0=JPG 1=PNG
        encodingType: 0
        };

    navigator.camera.getPicture(
        function(imageData) {
            $('.employee-image', this.el).attr('src', "data:image/jpeg;base64," + imageData);
        },
        function() {
            app.showAlert('Error taking picture', 'Error');
        },
        options);

    return false;
    };

    // Event handler for changePic

    this.initialize();
};

EmployeeView.template = Handlebars.compile($("#employee-tpl").html());
