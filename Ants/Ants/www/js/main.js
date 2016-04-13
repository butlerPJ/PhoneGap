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
        var buyAttempt = document.getElementById("txtBuyAnts");
        var cost = 30 * buyAttempt;
        if () {
            if (!ants.value + buyAttempt.value >= rooms.value * 5) {
                console.log("Ants bought!");
            } else {
                console.log("Maximum number reached...Buy more rooms");
            }
        }
    },

    buyRooms: function() {

    }

};
