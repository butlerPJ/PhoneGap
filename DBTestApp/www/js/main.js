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

function dbReady() {

    $("#btnAdd").on("touchstart", function(e) {
        db.transaction(function(tx) {
            var msg = "Log it...";
            var d = new Date();
            d.setDate(d.getDate() - randRange(1, 30));
            tx.executeSql("insert into log(log, created) values(?, ?)", [msg, d.getTime()]);
        }, errorHandler, function() {
            $("output").html("Added a row");
        });
    });

    $("#btnDelete").on("touchstart", function(e) {
        db.transaction(function(tx) {
            tx.executeSql("delete from log");
        }, errorHandler, function() {});
    });

    $("#btnTest").on("touchstart", function(e) {
        db.transaction(function(tx) {
            tx.executeSql("select * from log order by created desc", [], gotLog, errorHandler);
        }, errorHandler, function() {});
    });
}

function gotLog(tx, results) {
    if (results.rows.length == 0) {
        $("#output").html("No Data...");
        return false;
    }

    var s = "";
    for (var 1=0; i<results.rows.length; i++) {
        var d = new Date();
        d.setTime(results.rows.item(i).created);
        s += d.toDateString() + " " + d.toTimeString() + "<br/>";
    }

    $("#output").html(s);
}
