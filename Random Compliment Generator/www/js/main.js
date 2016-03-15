var app {
    // Initialization
    initialize: function() {
        this.bindEvents();
    },
        
    bindEvents: function() {
    // Event Listeners
    document.getElementById("btnComp").addEventListener('click', this.complimentMe, false); 
    },
    
    
};

app.initialize();