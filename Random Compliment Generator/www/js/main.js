var app = {
    
    // Initialization
    initialize: function() {
        this.bindEvents();
    },
        
    bindEvents: function() {
    // Event Listeners
    document.getElementById("btnComp").addEventListener('click', this.complimentMe, false);
    
    },
        
    saveCompliments: function() {
        
        
    },
    
    loadCompliments: function() {
        var string = window.localStorage.getArray("string");
        document.getElementById("output").innerHTML.append = string;
    },
    
    complimentMe: function() {
        // variables to hold the adjectives and noun
        var adj1;
        var adj2;
        var adj3;
        var noun;
        // Get the user's name
        var target = document.getElementById("target").value;
        // Array of adjectives
        var adjs = ["Awesome ", "Great ", "Super ", "Perfect ", "Intelligent ", "Amazing ", "Likable ", "Cool ", "Dapper "];
        // Array of nouns
        var nouns = ["Person!", "Human!", "Friend!"];
        var i = 0;
        
        // Check if txtbox is empty
        if (target !== "") {
            
            while (adj1 === adj2 || adj1 === adj3 || adj2 === adj3 || adj2 === adj1 || adj3 === adj1 || adj3 === adj2) {
            adj1 = adjs[Math.floor(Math.random()*adjs.length)];
            adj2 = adjs[Math.floor(Math.random()*adjs.length)];
            adj3 = adjs[Math.floor(Math.random()*adjs.length)];
            noun = nouns[Math.floor(Math.random()*nouns.length)];
               // console.log(target + " " + adj1 + adj2 +adj3 + noun);
            }
            var newString = target + " is a " + adj1 + adj2 + adj3 + noun;
            
            document.getElementById("output").innerHTML += newString + '<br/>';
            
             
            console.log(newString);
            window.localStorage.setItem("string", JSON.stringify(newString));
            
            
        } else {
            alert("Please enter a name...");
        }
        
    }
        
    
    
    

};

app.initialize();