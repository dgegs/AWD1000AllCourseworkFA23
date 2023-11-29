let age = parseInt(prompt("Please enter your age:", "Enter Age Here"));
//let msg = "You are not old enough to ";
/*
if(age <=10){
    alert("You can eat off the kids menu");
    //alert("You are not old enough to drive");
    //alert("You are not old enough to rent a car")
}else if(age >= 16 && age <25){

}
*/

if (age <= 10) {
  alert("You can eat from the kid's menu");
  alert("You are not old enough to drive");
  alert("You are not old enough to rent a car");
} else if (age >= 16 && age < 25) {
    alert("You can not eat from the kid's menu");
    alert("You are old enough to drive");
    alert("You are not old enough to rent a car");
} else if (age >= 25) {
    alert("You can not eat from the kid's menu");
    alert("You are old enough to drive");
    alert("You are old enough to rent a car");
}
// define boolean values
var is_hungry = true;
var is_morning = true;

// if we are hungry
if (is_hungry) {

    // yes hungry
    // if it is morning
    if (is_morning) {

       eat_breakfast();

   } else {

       eat_lunch();
   }

// not hungry
} else {

    if (is_morning) {

       drink_coffee();

    } else {

       drink_energy_drink();

    }
}

function eat_breakfast(){
    alert("We are eating a healthy breakfast!");
}

function eat_lunch(){
    alert("We are eating a satisfying lunch!");
}

function drink_coffee(){
    alert("Make mine a grande from Starbucks!");
}

function drink_energy_drink(){
    alert("Red Bull gives you wings!");
}