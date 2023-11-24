document.write("<h1> Yasir Rasheed CCO-118488</h1>")
document.write("<h1> ASSIGNMENT 06 (MATH EXPRESSIONS)</h1>")
document.write(("<br>"))
document.write(("<hr>"))
var a = (10)
    var r = ("<h2>Work 1 Result:</h2>")
    document.write(r)
    document.write("<h2>The value of a is:" + a)
    document.write(("<hr></h2>"))
    document.write(("<br>"))
    document.write("The value of ++a is:" + ++a)
    document.write(("<br>"))
    document.write("Now the value of a is:" + a)
    document.write(("<br>"))
    document.write(("<br>"))
    document.write("The value of a++ is:" + a++)
    document.write(("<br>"))
    document.write("Now the value of a is:" + a)
    document.write(("<br>"))
    document.write(("<br>"))
    document.write(("<br>"))
    document.write("The value of --a is:" + --a)
    document.write(("<br>"))
    document.write("Now the value of a is:" + a)
    document.write(("<br>"))
    document.write(("<br>"))
    document.write("The value of a-- is:" + a--)
    document.write(("<br>"))
    document.write("Now the value of a is:" + a)

    document.write(("<br>"))
    document.write(("<br>"))
    document.write(("<hr>"))
    var r = ("<h2>Work 2 Result:</h2>")
    document.write(r)
    document.write(("<hr>"))
    var a = 2, b = 1;
    var result = --a - --b + ++b + b--;
    
    document.write("<b>a is </b>", a);        // Output: a: -2
    document.write(("<br>"))
    document.write("<b>b is </b>", b);        // Output: b: -1
    document.write(("<br>"))
    document.write("<b>result is </b>", result);  // Output: result: -1
    document.write(("<br>"))
    document.write(("<br>"))
    document.write(("<hr>"))
    var r = ("<h2>Work 3 Result is Greeting Alert </h2>")
    document.write(r)
    document.write(("<hr>"))
    // Prompt the user for their name
var userName = prompt("Please enter your name:");

// Check if the user provided a name
if (userName !== null && userName !== "") {
    // Greet the user
    alert("Hello, " + userName + "! Welcome!");
} else {
    // Handle the case where the user didn't enter a name
    alert("Hello, anonymous! Welcome!");
}
document.write(("<marquee><b>YASIR RASHEED QURESHI WEB AND AAP CCO - 118488 TEACHER SIR RIZWAN BHATTI. JAVA SCRIPT ASSIGNMENT 6 (MATH EXPRESSIONS)</b></marquee>"))
    document.write(("<br>"))
    document.write(("<hr>"))
    var r = ("<h2>Work 5 Result is Multiplication Table of 5 </h2>")
    document.write(r)
    document.write(("<hr>"))

// Prompt the user for a number
var number = prompt("Enter a number for the multiplication table:");

// If the user didn't enter a number, use 5 as the default
if (number === null || number === "") {
    number = 5;
}
// Display the multiplication table
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}
document.write(("<br>"))
    document.write(("<hr>"))
    var r = ("<h2>Work 6 Result is Subject Marks </h2>")
    document.write(r)
    document.write(("<hr>"))

// Step a) Take three subjects' names from the user
var subject1 = prompt("Enter the name of the first subject:");
var subject2 = prompt("Enter the name of the second subject:");
var subject3 = prompt("Enter the name of the third subject:");

// Step b) Total marks for each subject
var totalMarks = 100;

// Step c) Take obtained marks for the first subject from the user
var obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));

// Step d) Take obtained marks for the remaining 2 subjects from the user
var obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
var obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

// Step e) Calculate total marks and percentage
var totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
var percentage = (totalObtainedMarks / (totalMarks * 3)) * 100;

// Display the result in a table format

document.write("<table border='1'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + obtainedMarks1 + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + obtainedMarks2 + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + obtainedMarks3 + "%</td></tr>");
document.write("<tr><td>Total</td><td>" + (totalMarks * 3) + "</td><td>" + totalObtainedMarks + "</td></tr>");
document.write("<tr><td>Percentage</td><td colspan='3'>"+ percentage.toFixed(2) + "%</td></tr>");
document.write("</table>");
document.write(("<hr>"));





