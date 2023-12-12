document.write("<center><h1>Yasir Rasheed CCO-118488 یاسر رشید </h1></center>")
document.write("<center><h1> ASSIGNMENT 12 (MATH METHODS)</h1></center>")
document.write(("<hr>"))
document.write(("<marquee><b>YASIR RASHEED QURESHI WEB AND AAP CCO - 118488 TEACHER SIR RIZWAN BHATTI. JAVA SCRIPT ASSIGNMENT 12 (MATH METHODS)</b></marquee>"))
document.write(("<hr>"))
// Question Number 1
document.write(("<h1>Q . 1 :- </h1>Write a Program that Takes a <b>Positive Integer</b> from User & <br> Display the Following in your Browser.<br><br> a. Number <br> b. Round off Value of the Number <br> c. Floor Value of the Number <br> d. Ceil Value of the Number"))
document.write(("<br>"))

document.write(("<h1>Ans.1 :-</h1>"))
console.log(("Ans.1 :-"));
// a)
var num = 3.45214
console.log("a) Number: " + num);
document.write("<b>a) Number :</b>  "+"  "+ + num);
// b)
document.write("<br><b> b) Round off Value :</b>" + Math.round(num));
console.log("b) Round off Value :"+"  "+ + Math.round(num));
// c)
document.write("<br><b> c) Floor Value :</b>"+"  "+ + Math.floor(num));
console.log("c) Floor Value :"+"  "+ + Math.floor(num));
// d)
document.write("<br><b> c) Ceil Value :</b>" +"  "+ + Math.ceil(num));
console.log("c) Ceil Value :"+"  "+ + Math.ceil(num));

// Question Number 2
document.write(("<h1>Q . 2 :- </h1>Write a Program that Takes a <b>Negative Floating Point</b><br> Number From User & Display the Following in your Browser.<br><br> a. Number <br> b. Round off Value of the Number <br> c. Floor Value of the Number <br> d. Ceil Value of the Number"))
document.write(("<br>"))

document.write(("<h1>Ans.2 :-</h1>"))
console.log(("Ans.2 :-"));
// a)
var number = -2.673
console.log("a) Number: " + number);
document.write("<b>a) Number :</b>  "+"  " + number);
// b)
document.write("<br><b> b) Round off Value :</b>" + Math.round(number));
console.log("b) Round off Value :"+"  "+ + Math.round(number));
// c)
document.write("<br><b> c) Floor Value :</b>"+"  "+ + Math.floor(number));
console.log("c) Floor Value :"+"  "+ + Math.floor(number));
// d)
document.write("<br><b> c) Ceil Value :</b>" +"  "+ + Math.ceil(number));
console.log("c) Ceil Value :"+"  "+ + Math.ceil(number));

// Question Number 3
document.write(("<h1>Q . 3 :- </h1>Write a program that displays the absolute value of a <br> Number. <br> E.g. Absolute Value of -4 is 4 & Absolute Value of 5 is 5"))
document.write(("<br>"))


document.write(("<h1>Ans.3 :- </h1>"))
console.log(("Ans.3 :-"));

 var number = prompt(`(Absolute Negative To Positive & Positive To Negative) Put a Number.`);
if (number.slice(0, 1) == '-') {
    var newNum = number.slice(1);
    document.write("<h2>The absolute value of " +number+ " is "+ newNum+"<br><br></h2>");
    console.log("The absolute value of " +number+ " is "+ newNum);
} else {
    document.write("<h2>The absolute value of "+number+" is "+number+"<br><br></h2>");
    console.log("The absolute value of "+number+" is "+number);

}

// Question Number 4
document.write(("<h1>Q . 4 :- </h1>Write a program that simulates a dice using random() <br> method of JS Math class. Display the value of dice in your <br> browser.:"))
document.write(("<br>"))
document.write(("<h1>Ans.4 :- </h1>"))
console.log(("Ans.4 :-"));

var random = Math.random()*6
var ceil = Math.ceil(random)
document.write("<h2>Random Dice Value :" +" "+ ceil +"</h2>" )
console.log("Random Dice Value :" +" "+ ceil  );



// Question Number 5
document.write(("<h1>Q . 5 :- </h1>Write a program that simulates a coin toss using random() <br> method of JS Math class. Display the value of coin in your <br> browser"))
document.write(("<br>"))
document.write(("<h1>Ans.5 :- </h1>"))
console.log(("Ans.5 :-"));

var randNum = Math.random()*1;
var randNumRounded = Math.round(randNum);
// console.log(randNum);
if (randNumRounded === 1) {
    document.write("<h2>Random Coin Value: 2 Heads</h2>");
    console.log("Random Coin Value: 2 Heads");
} else {
    document.write("<h2>Random Coin Value: 1 Tales</h2>");
    console.log("Random Coin Value: 1 Tales");
}

var randNum2 = Math.random()*2;
var randNum2Rounded = Math.round(randNum2);
// console.log(randNum);
if (randNum2Rounded === 1) {
    document.write("<h2>Random Coin Value: 2 Heads</h2>");
    console.log("Random Coin Value: 2 Heads");
} else {
    document.write("<h2>Random Coin Value: 1 Tales</h2>");
    console.log("Random Coin Value: 1 Tales");
}
document.write(("<h1>Q . 6 :- </h1> Write a Program That Shows a Random Number Between <b>1 <br> and 100</b> In Your Browser."))
document.write(("<h1>Ans.6 :- </h1>"))
console.log(("Ans.6 :-"));

var ranValue = Math.random()*100
var ceil2 = Math.ceil(ranValue)
document.write( "<h2>Random Number Between 1 And 100 : " + " "   + ceil2 +"</h2><br>")
console.log( "Random Number Between 1 And 100 : " + " "   + ceil2)

document.write(("<h1>Q . 7 :- </h1> Write a program that asks the user about his weight. Parse <br> the user input and display his weight in your browser. <br> Possible user inputs can be: <br> a. 50 <br> b. 50kgs <br> c. 50.2kgs <br> d. 50.2kilograms"))
document.write(("<h1>Ans.7 :- </h1>"))
console.log(("Ans.7 :-"));
var weight = prompt(`Enter your weight in kilograms`,`50kgs`);
var weightNum;
for (var i = 0; i < weight.length; i++) {
    if (weight.slice(i, i + 3) === 'kgs' || weight.slice(i, i + 3) === 'kil') {
        weightNum = weight.slice(0, i);
        document.write("<h2>The Weight Of User is " + weightNum + ' ' + 'Kilograms<br></h2>');
        console.log("The Weight Of User is " + weightNum + ' ' + 'Kilograms');
        break;
    }
}
if (weight > 0 && weight < 1000) {
    document.write("<h2>The Weight Of User is " + weight + ' ' + 'Kilograms<br></h2>');
    console.log("The Weight Of User is " + weight + ' ' + 'Kilograms');
}
document.write(("<h1>Q . 8 :- </h1> Write a program that stores a random secret number from <br> <b> 1 to 10</b> in a variable. Ask the user to input a number <br> between 1 and 10. If the user input equals the secret <br> number, congratulate the user."))
document.write(("<h1>Ans.8 :- </h1>"))
console.log(("Ans.8 :-"));

 var secNum = "3"
 var user = prompt("Enter Your Secret Number Plz 1 to 10")
 if (user == secNum){
     alert("  Congratulations You Win LAPTOP   ")
     console.log("  Congratulations You Win LAPTOP   ")
     document.write("<h2>  Congratulations You Win LAPTOP   </h2>")
 }else{
     alert("  Plz Sir Try Again Next Time   ")
     console.log("  Plz Sir Try Again Next Time   ")
     document.write("<h2>  Plz Sir Try Again Next Time   </h2>")
 } 



    document.write (`<br>`)
    document.write(("<hr>"))
    document.write(("<marquee><b>YASIR RASHEED QURESHI WEB AND AAP CCO - 118488 TEACHER SIR RIZWAN BHATTI. JAVA SCRIPT ASSIGNMENT 12 (MATH METHODS)</b></marquee>"))
    document.write(("<hr>"))

 
