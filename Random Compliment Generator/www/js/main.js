var app = {
    
    
    // Initialization
    initialize: function() {
        this.bindEvents();
        
    },
        
    bindEvents: function() {
    // Event Listeners
    document.getElementById("btnComp").addEventListener('click', this.complimentMe, false);
    
    },
    
    complimentMe: function() {
        // variables to hold the adjectives and noun
        var adj1;
        var adj2;
        var adj3;
        var noun;
        // Get the user's name
        var target = document.getElementById("target");
        // Array of adjectives
        var adjs = ["Awesome ", "Great ", "Super ", "Perfect ", "Intelligent ", "Amazing ", "Likable ", "Cool ", "Dapper "];
        // Array of nouns
        var nouns = ["Person!", "Human!", "Friend!"];
        var i = 0;
        
        // Check if txtbox is empty
        if (target.value !== "") {
            
            while (adj1 === adj2 || adj1 === adj3 || adj2 === adj3 || adj2 === adj1 || adj3 === adj1 || adj3 === adj2) {
            adj1 = adjs[Math.floor(Math.random()*adjs.length)];
            adj2 = adjs[Math.floor(Math.random()*adjs.length)];
            adj3 = adjs[Math.floor(Math.random()*adjs.length)];
            noun = nouns[Math.floor(Math.random()*nouns.length)];
               // console.log(target.value + " " + adj1 + adj2 +adj3 + noun);
            }
            var newString = target.value + " is a " + adj1 + adj2 + adj3 + noun + '<br>';
            
            compliments += document.getElementById("output").innerHTML += newString;
            target.value = "";
            target.focus();
             
            console.log(newString);
            window.localStorage.setItem("string", newString);
            
            
        } else {
            alert("Please enter a name...");
        }
        app.loadUs();
        app.archiveUs();
        
    },
    
    archiveUs: function() {
        
        // Save the compliments to the local storage
        window.localStorage.setItem("compliments", compliments);
        // console.log(localStorage.getItem("compliments") + "Hello");
    },
    
    loadUs: function() {
       // Retrieve past compliments
        window.localStorage.getItem("compliments");
        
        // display compliments
        document.getElementById("compliments").innerHTML = compliments;
    }
};

var compliments = window.localStorage.getItem("compliments");


