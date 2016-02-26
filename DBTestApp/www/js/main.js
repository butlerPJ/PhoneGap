function init() {
    document.addEventListener("deviceready", deviceReady, true);
}

var db;

function deviceReady() {
    db = window.openDatabase("test", "1.0", "test", 1000000);
    db.transaction(setup, errorHandler, dbReady);
}

function setup(tx) {
    tx.executeSql('create table if not exists log(id INTEGER PRIMARY KEY AUTOINCREMENT, log TEXT, created DATE)');
}

function errorHandler(e) {
    alert(e.message);
}
