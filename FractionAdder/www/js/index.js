
/* globals Fraction */

/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        // document.addEventListener('deviceready', this.onDeviceReady, false);
        document.getElementById("btnCalculate").addEventListener('click', this.onCalculate, true);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');


        console.log('Received Event: ' + id);
    },

    onCalculate: function(e) {
    // Get references to the DOM elements
    var firstNum  =  document.getElementById("num1").value;
    var origNum1 = document.getElementById("num1").value;
    var firstDenom = document.getElementById("denom1").value;
    var origDenom1 = document.getElementById("denom1").value;
    var secondNum = document.getElementById("num2").value;
    var origNum2 = document.getElementById("num2").value;
    var secondDenom = document.getElementById("denom2").value;
    var origDenom2 = document.getElementById("denom2").value;


    // Math to determine numerator and denominator of the sum
    var sumNum = (firstNum * secondDenom) + (secondNum * firstDenom);
    var sumDenom = (firstDenom * secondDenom);

    var frac = new Fraction(sumNum, sumDenom);

    frac.simplify();
    sumNum = frac.getNumerator();
    sumDenom = frac.getDenominator();

    document.getElementById("num1").value = "";
    document.getElementById("denom1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("denom2").value = "";

    document.getElementById("txtOutput").innerHTML =  origNum1 + "/" + origDenom1 + " + " + origNum2 + "/" + origDenom2 + " = " + sumNum + "/" + sumDenom;


    }


};

