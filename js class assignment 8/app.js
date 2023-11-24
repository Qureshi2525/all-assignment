document.write("<center><h1>Yasir Rasheed CCO-118488 یاسر رشید </h1></center>")
document.write("<center><h1> ASSIGNMENT 08 (IF...ELSE & ELSE IF STATEMENT TESTING SET OF CONDITIONS)</h1></center>")
document.write(("<hr>"))
document.write(("<marquee><b>YASIR RASHEED QURESHI WEB AND AAP CCO - 118488 TEACHER SIR RIZWAN BHATTI. JAVA SCRIPT ASSIGNMENT 8 (IF...ELSE & ELSE IF STATEMENT TESTING SET OF CONDITIONS)</b></marquee>"))
document.write(("<hr>"))
document.write("<h2>Work 1 “character (Number or String)(Hint: ASCII codes:- A=65, Z=90, a=97, z=122).” (Ans. Alert)</h2>")

// program to find the ASCII value of a character

// take input from the user
const string = prompt('Enter a character: ');

// convert into ASCII value
const result = string.charCodeAt(0);
alert(`1 :- The ASCII value is: ${result}`);
document.write(`1 :- The ASCII value is: ${result}`);

document.write(("<hr>"))
document.write("<h2>Work 2 “Accept two Integers” (Ans. Alert)</h2>")
var num1 = +prompt("Enter first Integar");
var num2 = +prompt("Enter second Integar");
if (num1> num2) {
    alert("2 :-" + num1 + " is larger than" + num2)
    document.write("2 :-" + num1 + " is larger than" + num2)
}
else if (num1 < num2 ) {
    alert("2 :-" + num2 + " is larger than" + num1)
    document.write("2 :-" + num2 + " is larger than" + num1)

}
else if (num1 = num2 ) {
    alert("2 :-" + num1 + " and " + num2 + " are equal")
     document.write("2 :-" + num1 + " and " + num2 + " are equal")
}
 document.write(("<hr>"))
 document.write("<h2>Work 3 “Number is Positive, Negative or Zero.” (Ans. Alert)</h2>")
 var num = prompt ("   Enter your number!  ")
 if (num >   0  ){
    alert(" 3 :- Positive Number   ")     
       document.write(" 3 :- Positive Number   ")     
 }
 else if ( num <   0   ){
    alert(" 3 :- Negtive Number   ")    
    document.write(" 3 :- Negtive Number   ")    
 }
 else if ( num ==   0   ){
    alert(" 3 :- Zero   ")     
    document.write(" 3 :- Zero   ")    
 }
 document.write(("<hr>"))
 document.write("<h2>Work 4 “(i.e. String of Length 1) True Or False.” (Ans. Alert)</h2>")
 var  character = prompt ("  Enter the vowel  ")
 if (  character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u'  ){
   alert ("4 :- TRUE")
   document.write("4 :- TRUE  ")
 }
 else {
   alert ("4 :- FALSE")
   document.write("4 :- FALSE  ")
 }
 document.write(("<hr>"))
 document.write("<h2>Work 5 “Please enter your password”Correct! The password you entered matches the original password.” (Ans. Alert)</h2>")
 
 var strongPassword = "123"
 var password = prompt ( " “Please enter your password” " )
if ( password  ===  null  ||  password === " "  ){
 alert (" plz Enter your  password   ")
} else if ( password === strongPassword  ){
 alert ("5 :- “Correct! The Password You Entered Matches The Original Password”")
 document.write ("5 :- “Correct! The Password You Entered Matches The Original Password”")
}
else {
alert('5 :- “Incorrect Password”')
document.write('5 :- “Incorrect Password”')
}
document.write(("<hr>"))
 document.write("<h2>Work 6 “This if/else Statement” (Ans. Alert)</h2>")
 var hour = 13;
 var greeting = prompt ("  Enter your number   ")
 if (greeting <  hour  ) {
 alert ( "6 :-  Good Morning")
 document.write("6 :-  Good Morning   ")
      }
 else {     
  alert (  "6 :- Good Evining ")
  document.write("6 :-  Good Evening    ")
 }
 document.write(("<hr>"))
 document.write("<h2>Work 7 “if, else & else if Statements” (Ans. Alert)</h2>")

 var time = +prompt("What time is it?");
 if(time >= 0000 && time <1200){
     alert("7 :- Good Morning");
     document.write("7 :- Good Morning");

 }
 else if (time >= 1200 && time <1700){
     alert("7 :- Good Afternoon");
     document.write("7 :- Good Afternoon");

 }
 else if(time >= 1700 && time <2100){
     alert("7 :- Good Evining");
     document.write("7 :- Good Evining");
 }
 else if(time >= 2100 && time <2359){
     alert("7 :- Good Night");
     document.write("7 :- Good Night");

 }
 document.write(("<hr>"))
