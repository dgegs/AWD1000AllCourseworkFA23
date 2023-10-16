let age = parseInt(prompt("Please enter your age:", "Enter Age Here"));
//let msg = "You are not old enough to ";

if(age <=10){
    alert("You can eat off the kids menu");
    //alert("You are not old enough to drive");
    //alert("You are not old enough to rent a car")
}else if(age >= 16 && age <25){

}


var age = 30;

if (age <= 10) {
  console.log("You can eat from the kid's menu");
  console.log("You are not old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (age >= 16 && age < 25) {
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are not old enough to rent a car");
} else if (age >= 25) {
  console.log("You can not eat from the kid's menu");
  console.log("You are old enough to drive");
  console.log("You are old enough to rent a car");
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

       dring_coffee();

    } else {

       dring_soda();

    }
}


html> 
  
<head> 
    <link rel="stylesheet" href="style.css"> 
    <script type="text/javascript" src="app.js"> 
    </script> 
</head> 
  
<body> 
    <div class="container"> 
        <h1>TIP CALCULATOR</h1> 
        <div class="wrapper"> 
  
            <p>Bill Amount</p> 
            <input type="text" id="amount" placeholder="Amount to be paid"> ₹ 
            <p>How was the service ?</p> 
            <select id="services"> 
                <option selected disabled hidden> 
                    Select 
                </option> 
                <option value="0.25">25% - Top Notch</option> 
                <option value="0.20">20% - Excellent</option> 
                <option value="0.15">15% - Good</option> 
                <option value="0.10">10% - Bad</option> 
                <option value="0.05">5% - Worst</option> 
            </select> 
            <p>Total number of persons</p> 
            <input type="text" id="persons" placeholder="Number of people sharing the bill"> 
            <button id="calculate">Calculate</button> 
        </div> 
  
        <div class="tip"> 
            <p>Tip Amount</p> 
            <span id="total">0</span>₹ 
            <span id="each">each</span> 
        </div> 
    </div> 
</body> 
  
</html>

body { 
    background-color: #001f4f; 
    font-family: "Raleway", sans-serif; 
} 
  
.container { 
    width: 350px; 
    height: 500px; 
    background-color: #fff; 
    position: absolute; 
    left: 50%; 
    top: 50%; 
    transform: translateX(-50%) translateY(-50%); 
    border-radius: 20px; 
} 
  
h1 { 
    position: absolute; 
    left: 50%; 
    top: -60px; 
    width: 300px; 
    transform: translateX(-50%); 
    background-color: #ff851b; 
    color: #fff; 
    font-weight: 100; 
    border-top-left-radius: 20px; 
    border-top-right-radius: 20px; 
    font-size: 18px; 
    text-align: center; 
    padding: 10px; 
} 
  
.wrapper { 
    padding: 20px; 
} 
  
input, 
select { 
    width: 80%; 
    border: none; 
    border-bottom: 1px solid #0074d9; 
    padding: 10px; 
} 
  
input:focus, 
select:focus { 
    border: 1px solid #0074d9; 
    outline: none; 
} 
  
select { 
    width: 88% !important; 
} 
  
button { 
    margin: 20px auto; 
    width: 150px; 
    height: 50px; 
    background-color: #39cccc; 
    color: #fff; 
    font-size: 16px; 
    border: none; 
    border-radius: 5px; 
} 
  
.tip { 
    text-align: center; 
    font-size: 18px; 
    display: none; 
} 