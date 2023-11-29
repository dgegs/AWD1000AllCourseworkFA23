"use strict";

const $ = selector => document.querySelector(selector);

const calculateFV = (investmentInput, rateInput, yearInput) => {

    let futureValue = investmentInput;

    for(let i = 1; i<= yearInput; i++){
        futureValue += (futureValue * rateInput) /100;
    }

    return futureValue;
}

const processEntries = () => {

    const investmentInput = parseFloat($("#investment").value);
    const rateInput = parseFloat($("#rate").value);
    const yearInput = parseInt($("#years").value);
    const fvOutput = $("#future_value");

    let error = "";

    //error messages
    if(!investmentInput || investmentInput <=0 || investmentInput > 100000){
        error = "Investment must be a number greater than zero and less than or equal to 100000";
        $("#investment").focus();
    }
    else if(!rateInput || rateInput <=0 || rateInput > 15){
        error = "Rate must be a number greater than zero and less than or equal to 15";
        $("#rate").focus();
    }
    else if(!yearInput || yearInput <=0 || yearInput > 50){
        error = "Year must be a number greater than zero and less than or equal to 50";
        $("#years").focus();
    }

    if(!error){
        fvOutput.value = calculateFV(investmentInput, rateInput, yearInput).toFixed(2);
    }
    else{
        alert(error);
    }
  
}

document.addEventListener("DOMContentLoaded", function () {
    let calcButton = $("#calculate");
    if(calcButton){
        calcButton.addEventListener("click", processEntries);
    }
})