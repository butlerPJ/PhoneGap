var app = {

    // Initialization
    initialize: function() {
        this.bindEvents();

    },

    bindEvents: function() {
        // Event Listeners
        document.getElementById("btnAnts").addEventListener('click', this.buyAnts, false);
        document.getElementById("btnRooms").addEventListener('click', this.buyRooms, false);
        document.getElementById("btnReset").addEventListener('click', this.resetGame, false);

    },

    buyAnts: function() {
        var buyAnt = document.getElementById("txtBuyAnts").value;
        var antFeedback = document.getElementById("antFeedback");
        var antPrice = document.getElementById("antPrice");
        var maxAnts = rooms.innerHTML * 10;
        var currentAntPrice = parseInt(antPrice.innerHTML);
        var antCost = currentAntPrice * buyAnt;
        var newPop = parseInt(ants.innerHTML) + parseInt(buyAnt);
        antFeedback.innerHTML = "";
        document.getElementById("txtBuyAnts").value = "";
        if (buyAnt.match(numbers)) {
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
        } else {
            antFeedback.innerHTML = "Please enter a number...";
    }

    },

    buyRooms: function() {
        var buyRoom = document.getElementById("txtBuyRooms").value;
        var currentRoomPrice = parseInt(roomPrice.innerHTML);
        var roomCost = currentRoomPrice * buyRoom;
        var newCount;
        var roomFeedback = document.getElementById("roomFeedback");
        document.getElementById("txtBuyRooms").value = "";
        roomFeedback.innerHTML = "";
        if (buyRoom.match(numbers)) {
            if (buyRoom === "") {
                roomFeedback.innerHTML = "Enter Amount of rooms to buy";

            } else {

                // TODO *** Add a loop to increase room price, do the same for the ant price ***
                    if (roomCost > coins.innerHTML) {
                            roomFeedback.innerHTML = "Not Enough Coins!";
                        } else {
                            rooms.innerHTML = parseInt(rooms.innerHTML) + parseInt(buyRoom);
                            coins.innerHTML -= roomCost;
                            newCount = currentRoomPrice + (buyRoom * 100);
                            roomPrice.innerHTML = newCount + " COINS";
                            app.saveGame();
                        }
                }
        } else {
            roomFeedback.innerHTML = "Please enter a number...";
        }
    },

    addCoins: function() {
        income = parseInt(ants.innerHTML) * 1;
        coins.innerHTML = parseInt(coins.innerHTML) + income;
    },

    saveGame: function() {
        storedRooms = rooms.innerHTML;
        storedAnts = ants.innerHTML;
        storedCoins = coins.innerHTML;
        storedRoomPrice = roomPrice.innerHTML;
        storedAntPrice = antPrice.innerHTML;
        // Save the data to the local storage
        window.localStorage.setItem("rooms",storedRooms);
        window.localStorage.setItem("ants", storedAnts);
        window.localStorage.setItem("coins", storedCoins);
        window.localStorage.setItem("roomPrice", storedRoomPrice);
        window.localStorage.setItem("antPrice", storedAntPrice);
        console.log(storedCoins);
    },

    loadGame: function() {

        // Retrieve data
        window.localStorage.getItem("rooms");
        window.localStorage.getItem("ants");
        window.localStorage.getItem("coins");
        window.localStorage.getItem("roomPrice");
        window.localStorage.getItem("antPrice");

        // display data
        document.getElementById("rooms").innerHTML = storedRooms;
        document.getElementById("population").innerHTML = storedAnts;
        document.getElementById("coins").innerHTML = storedCoins;
        document.getElementById("roomPrice").innerHTML = storedRoomPrice;
        document.getElementById("antPrice").innerHTML = storedAntPrice;
    },

    resetGame: function() {
        document.getElementById("rooms").innerHTML = 1;
        document.getElementById("population").innerHTML = 0;
        document.getElementById("coins").innerHTML = 100;
        document.getElementById("roomPrice").innerHTML = 500 + " COINS";
        document.getElementById("antPrice").innerHTML = 50 + " COINS";
        window.localStorage.clear();
        app.saveGame();
    }


};

var rooms = document.getElementById("rooms");
var ants = document.getElementById("population");
var coins = document.getElementById("coins");
var initAntCost = document.getElementById("antPrice");
var roomPrice = document.getElementById("roomPrice");
var income = parseInt(ants.innerHTML) * 1;
var numbers = "^[1-9][0-9]*$";

var storedRooms = window.localStorage.getItem("rooms");
var storedAnts = window.localStorage.getItem("ants");
var storedCoins = window.localStorage.getItem("coins");
var storedRoomPrice = window.localStorage.getItem("roomPrice");
var storedAntPrice = window.localStorage.getItem("antPrice");
