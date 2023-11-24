document.write("<h1> Yasir Rasheed CCO-118488 یاسر رشید </h1>")
document.write("<h1> ASSIGNMENT 07 (USER INPUT & CONDITIONAL STATEMENT)</h1>")
document.write(("<hr>"))

document.write(("<marquee><b>YASIR RASHEED QURESHI WEB AND AAP CCO - 118488 TEACHER SIR RIZWAN BHATTI. JAVA SCRIPT ASSIGNMENT 7 (USER INPUT & CONDITIONAL STATEMENT)</b></marquee>"))

document.write("<h2>Work 1 “Welcome to city of lights” (Ans. Alert)</h2>")
var city = prompt('Please enter your city'); 
if (city.toUpperCase() == "KARACHI".toUpperCase()) { alert("Welcome to city of lights") } 
    else if (city.toUpperCase() == "karachi".toUpperCase()) { alert("Please correct Information KARACHI") }
    else {
        alert("Please correct Information KARACHI.");
    }
document.write(("<hr>"))

document.write("<h2>Work 2 “Good Morning Ma’am. or Sir” (Ans. Alert)</h2>")
    var gender = prompt("Enter your Gender please ?") 
    if (gender.toUpperCase() == "male".toUpperCase()) { alert("Good Morning Sir") } 
    else if (gender.toUpperCase() == "female".toUpperCase()) { alert("Good Morning Ma’am") }
    document.write(("<hr>"))

    document.write("<h2>Work 3 Road “Traffic Signal” (Ans. Alert)</h2>")
    var color = prompt("Enter any color of traffic signal Light Color")
     if (color.toUpperCase() == "red".toUpperCase()) {alert("MESSAGE IS :"+" Vehicles Must Stop.") } 
     else if (color.toUpperCase() == "yellow".toUpperCase()) { alert("MESSAGE IS :"+" Vehicles Should Get Ready To Move.") } 
     else if (color.toUpperCase() == "green".toUpperCase()) { alert("MESSAGE IS :"+" Vehicles Can Move Now.") } 
     document.write(("<hr>"))

     document.write("<h2>Work 4 “Please Refill The Fuel In Your Car” (Ans. Alert)</h2>")
     var patrol =prompt("write your remaining fuel (Less then 0.25)( greater than 0.25)")
     if (patrol <"0.25"){alert("“Please Refill The Fuel In Your Car”")}
     else if (patrol >"0.25"){alert("“ Fuel In Your Car Is Perfect”")}
     document.write(("<hr>"))

     document.write("<h2>Work 5 “Check Whether Alert Message” (Ans. Alert)</h2>")  
     var a = 4;
if (++a === 5){
alert("a :- given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("b :- given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("C :- condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("d :- The cost equals");
}

if (true){
    alert("e :- True");
    }
    if (false){
    alert("False");
    }

if("car" < "cat"){
    alert("f :- car is smaller than cat");
    }
document.write(("<hr>"))

var sub1 = parseFloat(prompt("Enter your sub1 marks:"));
        var sub2 = parseFloat(prompt("Enter your sub2 marks:"));
        var sub3 = parseFloat(prompt("Enter your sub3 marks:"));
        var totalMarks = parseFloat(prompt("Enter the total marks:"));

        var obtained = sub1 + sub2 + sub3;
        var percentage = (obtained / totalMarks) * 100;

        document.write("<h2>Work 6 Result is MARKS SHEET <Br>  کام 6 کا نتیجہ مارکس شیٹ ہے۔</h2>")
        // document.write("<br>");
        document.write("<b>Total Marks: " + totalMarks + "</b>");
        document.write("<br><b>Marks Obtained: " + obtained + "</b><br>");
        document.write("<b>Percentage: " + percentage + "%</b><br>");

        if (percentage >= 80) {
            document.write("<b>Grade: A-One Grade</b>");
            document.write("<br><b>Remarks : Excellent <br> بہت اچھا</b>");
        } else if (percentage >= 70) {
            document.write("<b>Grade: A Grade</b>");
            document.write("<br><b>Remarks : Good <br> اچھا لیکن آپ کو بہتر کرنے کی ضرورت ہے۔</b>");
        } else if (percentage >= 60) {
            document.write("<b>Grade: B Grade</b>");
            document.write("<br><b>Remarks : You need to improve <br>  آپ کو بہتر کرنے کی ضرورت ہے۔</b>");
        } else {
            document.write("<b>Grade: Fail</b>");
            document.write("<br><b>Remarks : Sorry <br>   معذرت آپ کو بہت بہتر کرنے کی ضرورت ہے</b>");
        }
document.write(("<hr>"))

document.write("<h2>Work 7 Guess Game: (Page Top) : </h2>")
        // Generate a Random Number
        let y = Math.floor(Math.random() * 10 + 1);
 
        // Counting the number of guesses
        // made for correct Guess
        let guess = 1;
 
        document.getElementById("submitguess").onclick = function () {
 
            // Number guessed by user    
            let x = document.getElementById("guessField").value;
 
            if (x == y) {
                alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
                    + guess + " GUESS ");
            }
 
            /* If guessed number is greater than actual number*/
            else if (x > y) {
                guess++;
                alert("OOPS SORRY!! TRY A SMALLER NUMBER");
            }
            else {
                guess++;
                alert("OOPS SORRY!! TRY A GREATER NUMBER")
            }
        }
document.write(("<hr>"))

document.write("<h2>Work 8 Check Whether: (Ans. Alert) : </h2>")
var num = +prompt(" Enter your number   ")
if (num % 3 == 0) {
      alert(" the number is divisible by 3  ")  
}
else {
      alert(" the number is  not divisible by 3  ")
      document.write(" the number is not  divisible by 3  ")
}
document.write(("<hr>"))

document.write("<h2>Work 9 Even Number or an Odd Number: (Ans. Alert) : </h2>")
var num = +prompt("   Enter the number ");
if (num % 2 === 0) {
      alert("Even  Number  ")
} else {
      alert("  Odd Number   ")
}

document.write(("<hr>"))

document.write("<h2>Work 10 Temperature (Ans. Alert) : </h2>")
var temparature = prompt("10 :- write the temprature in your city like (10,20,30,40)")
if (temparature  >40){
    alert("it is Too Hot Outside")
}
else if (temparature  >30){
    alert("The Weather Today is Normal")
}
else if (temparature  >20){
    alert("Today Weather is Cool")
}
else if (temparature  >10){
    alert("OMG! Today Weather is so Cool")
}
document.write(("<hr>"))

document.write("<h2>Work 11 calculator for +,-,*, / & %: (Ans. Alert) : </h2>")

// program for a simple calculator

// take the operator input
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
document.write(`${number1} ${operator} ${number2} = ${result}`);

