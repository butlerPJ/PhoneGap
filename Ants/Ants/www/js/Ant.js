function Ant() {
    "use strict";

    // ---------- Property Variables
    var income = 1;

    // ---------- Get/Sets
    this.getIncome = function() {
        return income;
    };

    this.setIncome = function(value) {
        income = value;
    };

    // ----------- Public Methods

}


var doughnut = 0;
     window.setInterval(
     function () {
         doughnut = doughnut + 1;
         document.getElementById("doughnuts").innerHTML = "You have " + doughnut + " doughnuts!";

     }, 1000);
