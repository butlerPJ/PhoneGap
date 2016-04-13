var app = {

    // Initialization
    initialize: function() {
        this.bindEvents();

    },

    bindEvents: function() {
    // Event Listeners
    document.getElementById("btnAnts").addEventListener('click', this.buyAnts, false);
    document.getElementById("btnRooms").addEventListener('click', this.buyRooms, false);

    },

    buyAnts: function() {
        var rooms = document.getElementById("rooms");
        var ants = document.getElementById("population");
        var buyAttempt = document.getElementById("txtBuyAnts").value;
        var feedback = document.getElementById("feedback");

        var cost = 30 * buyAttempt;
        if (buyAttempt.value != "") {

                if (ants + buyAttempt.value >= rooms * 5) {
                    feedback.innerHTML = "Maximum number reached...Buy more rooms";
                } else {
                    console.log("Ants bought!");
                    // console.log(newPop);
                    console.log(cost);
                    console.log("buyAttempt" + buyAttempt);
                    ants.innerHTML = parseInt(ants.innerHTML) + parseInt(buyAttempt);
                }

        } else {
            feedback.innerHTML = "Enter Amount of ants to buy";
        }
    },

    buyRooms: function() {

    }

};
