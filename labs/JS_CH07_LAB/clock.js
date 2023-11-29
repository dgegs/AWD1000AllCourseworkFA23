"use strict";

const $ = function(id){
    return document.getElementById(id);
}

const displayCurrentTime = function () {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    let seconds = today.getSeconds();
    let ampm = "AM";
    let timeout = setInterval(function() {
        displayCurrentTime()}, 1000);
    
    if(hours > 12){
        hours = hours-12;
        ampm = "PM";
    }

    const padSingleDigit = function(num) {
        if(num < 10) {
            return "0" + num;
        }else{
            return num;
        }
    };

    $("hours").innerHTML = padSingleDigit(hours);
    $("minutes").innerHTML = padSingleDigit(minutes);
    $("seconds").innerHTML = padSingleDigit(seconds);
    $("ampm").innerHTML = ampm;
};

window.onload = function(){
    //set initial clock display and then set interval timer to display
    //new time every second. Don't store timer object because it won't be
    // needed - clock will just run.

    displayCurrentTime();
};