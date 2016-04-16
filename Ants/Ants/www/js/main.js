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
        var buyAnt = document.getElementById("txtBuyAnts").value;
        var antFeedback = document.getElementById("antFeedback");
        var antPrice = document.getElementById("antPrice");
        var maxAnts = rooms.innerHTML * 5;
        var initAntCost = 50;
        var currentAntPrice = parseInt(antPrice.innerHTML);
        var antCost = currentAntPrice * buyAnt;
        var newPop = parseInt(ants.innerHTML) + parseInt(buyAnt);
        antFeedback.innerHTML = "";
        document.getElementById("txtBuyAnts").value = "";

        if (buyAnt === "") {
            antFeedback.innerHTML = "Enter Amount of ants to buy";

        } else {
            if (newPop > maxAnts) {
                antFeedback.innerHTML = "Maximum number reached...Buy more rooms";
            } else {
                if (antCost > coins.innerHTML) {
                    antFeedback.innerHTML = "Not Enough Coins!";
                } else {
                    ants.innerHTML = parseInt(ants.innerHTML) + parseInt(buyAnt);
                    coins.innerHTML -= antCost;
                    currentAntPrice = currentAntPrice + (buyAnt * 10);
                    antPrice.innerHTML = currentAntPrice + " COINS";
                    app.saveGame();
                }

            }
        }

    },

    buyRooms: function() {
        var buyRoom = document.getElementById("txtBuyRooms").value;
        var roomPrice = document.getElementById("roomPrice");
        var initRoomCost = 250;
        var currentRoomPrice = parseInt(roomPrice.innerHTML);
        var roomCost = currentRoomPrice * buyRoom;
        var newCount = parseInt(rooms.innerHTML) + parseInt(buyRoom);
        var roomFeedback = document.getElementById("roomFeedback");
        document.getElementById("txtBuyRooms").value = "";
        roomFeedback.innerHTML = "";

        if (buyRoom === "") {
            roomFeedback.innerHTML = "Enter Amount of rooms to buy";

        } else {
            if (roomCost > coins.innerHTML) {
                    roomFeedback.innerHTML = "Not Enough Coins!";
                } else {
                    rooms.innerHTML = parseInt(rooms.innerHTML) + parseInt(buyRoom);
                    coins.innerHTML -= roomCost;
                    currentRoomPrice = currentRoomPrice + (buyRoom * 10);
                    roomPrice.innerHTML = currentRoomPrice + " COINS";
                    app.saveGame();
                }
            }
    },

    addCoins: function() {
        income = parseInt(ants.innerHTML) * 1;
        coins.innerHTML = parseInt(coins.innerHTML) + income;
    },

    saveGame: function() {
        storedRooms = rooms.innerHTML;
        storedAnts = ants.innerHTML;
        storedcoins = coins.innerHTML;
        // Save the data to the local storage
        window.localStorage.setItem("rooms",storedRooms);
        window.localStorage.setItem("ants", storedAnts);
        window.localStorage.setItem("coins", storedCoins);

    },

    loadGame: function() {

        // Retrieve data
        window.localStorage.getItem("rooms");
        window.localStorage.getItem("ants");
        window.localStorage.getItem("coins");

        // display data
        document.getElementById("rooms").innerHTML = storedRooms;
        document.getElementById("population").innerHTML = storedAnts;
        document.getElementById("coins").innerHTML = storedCoins;
    }


};

var rooms = document.getElementById("rooms");
var ants = document.getElementById("population");
var coins = document.getElementById("coins");
var income = parseInt(ants.innerHTML) * 1;


var storedRooms = window.localStorage.getItem("rooms");
var storedAnts = window.localStorage.getItem("ants");
var storedCoins = window.localStorage.getItem("coins");
