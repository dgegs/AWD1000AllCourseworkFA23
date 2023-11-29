"use strict";

const $ = function (id){
    return document.getElementById(id);
};

const clearTextBoxes = function () {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
    $("error").innerHTML = "";
};

function toFahrenheit() {
    clearTextBoxes();
    $("degree_label_1").innerHTML = "Enter C Degrees";
    $("degree_label_2").innerHTML = "Degrees Fahrenheit";
    $("to_celsius").checked = false;
}

function toCelsius() {
    clearTextBoxes();
    $("degree_label_1").innerHTML = "Enter F Degrees";
    $("degree_label_2").innerHTML = "Degrees Celsisus";
    $("to_fahrenheit").checked = false; 
}

function convertTemp(){
    const degrees = parseFloat($("degrees_entered").value);

    if(degrees == "" || isNaN(degrees)){
        $("error").innerHTML = "You must enter a valid number for degrees."
    }
    else{
        if($("to_celsius").checked){
            let fahrenheit = $("degrees_entered").value;
            fahrenheit = (fahrenheit -32) * (5/9);
            $("degrees_computed").value = Math.round(fahrenheit);
            $("degrees_computed").focus();
            $("error").innerHTML = "";
        }
    else if($("to_fahrenheit").checked){
        let celsius = $("degrees_entered").value;
        celsius = (celsius * 9 / 5) + 32;
        $("degrees_computed").value = Math.round(celsius);
        $("degrees_computed").focus();
        $("error").innerHTML = "";
        }
    }
}

window.onload = function() {
    clearTextBoxes();
    $("to_celsius").checked = true;
    $("to_fahrenheit").checked = false;
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
    $("degrees_entered").focus();
};