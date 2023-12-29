document.write("<center><h1>Yasir Rasheed CCO-118488 یاسر رشید </h1></center>")
document.write("<center><h1> ASSIGNMENT 13 (DATE METHODS)</h1></center>")
document.write(("<hr>"))
document.write(("<marquee><b>YASIR RASHEED QURESHI WEB AND AAP CCO - 118488 TEACHER SIR RIZWAN BHATTI. JAVA SCRIPT ASSIGNMENT 13 (DATE METHODS)</b></marquee>"))
document.write(("<hr>"))
// Question Number 1
document.write(("<h1>Question Number . 1 :- </h1>Write a program that displays current date and time in <br> your browser."))
document.write(("<br>"))
// ans 1 solve detail
document.write(("<h1>Ans.1 :-</h1>"))
console.log(("Ans.1 :-"));
// Step 1
document.write(("<h2><u>1st Example</u> </h2>"))
console.log(("1st Example "));
// program to display the date
// get local machine date time
const curentDate = new Date();
// get the date as a string
const n = curentDate.toDateString();
// get the time as a string
const time = curentDate.toLocaleTimeString();
// display date
console.log('Date: ' + n);
// display time
console.log('Time: ' + time);
document.write('<h2>  Current Date Is : ' + n + '  Time: ' + time+'</h2>' )
// Step 2
document.write(("<h2><u>2nd Example</u> </h2>"))
console.log(("2nd Example "));
var curentDatee=new Date()
        document.write('<h3> Current Date Is   '+ curentDatee +'</h3>')
        console.log(' Current Date Is   '+ curentDatee )

// Question Number 2
document.write(("<h1>Question Number . 2 :- </h1>Write a program that alerts the current month in words. <br> For example December."))
document.write(("<br>"))
// ans 2 solve detail
document.write(("<h1>Ans.2 :-</h1>"))
console.log(("Ans.2 :-"));
// Step 1
document.write(("<h2><u>1st Example</u> </h2>"))
console.log(("1st Example "));
var m_names = ['January', 'February', 'March', 
'April', 'May', 'June', 'July', 
'August', 'September', 'October', 'November', 'December'];
d = new Date();
var newDate = m_names[d.getMonth()]; 
document.write('<h2> Current Month Is  '+newDate+'</h2>')
console.log('Current Month Is  '+newDate)
alert('Current Month Is  '+newDate)
// Step 2
document.write(("<h2><u>2nd Example</u> </h2>"))
console.log(("2nd Example "));
var currentMonth= curentDate.getMonth()
//console.log(currentMonth)//1
var arryMonth=['January',' February',' March',' April',' May',' June',' July',' August',' September',' October',' November','December']
document.write('<h2> Current Month Is  '+arryMonth[currentMonth]+'</h2>');
console.log(' Current Month Is  '+arryMonth[currentMonth]);
// alert('Current Month Is  '+arryMonth[currentMonth]);

// Question Number 3
document.write(("<h1>Question Number . 3 :- </h1>Write a program that alerts the first 3 letters of the current <br> day, for example if today is Sunday then alert will show <br> Sun."))
document.write(("<br>"))
// ans 3 solve detail
document.write(("<h1>Ans.3 :-</h1>"))
console.log(("Ans.3 :-"));
// Step 1
document.write(("<h2><u>1st Example</u> </h2>"))
console.log(("1st Example "));
var currentDay = new Date();
currentDay.toString;
var b = currentDay.toString();
var c = b.slice(0,3);
document.write("<h2>Today is " + c+"</h2>");
console.log("Today is " + c);
alert("Today is " + c);
// Step 2
document.write(("<h2><u>2nd Example</u> </h2>"))
console.log(("2nd Example "));
var arryDay=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
        var a=curentDate.toString().slice(0,3)
        document.write("<h3>Today is :-  "+a+"</h3>")
        console.log("Today is :-  "+a)

        // Question Number 4
document.write(("<h1>Question Number . 4 :- </h1>Write a program that displays a message “It’s Fun day” if <br> its Saturday or Sunday today."))
document.write(("<br>"))
// ans 4 solve detail
document.write(("<h1>Ans.4 :-</h1>"))
console.log(("Ans.4 :-"));
// Step 1
document.write(("<h2><u>1st Example</u> </h2>"))
console.log(("1st Example "));
var currentDate = new Date();
currentDate.toString;
var b = currentDate.toString();
var c = b.slice(0,3);
if (c === "Sat"){
    document.write("<h2>It's Fun Day</h2>")
    console.log("It's Fun Day")
}else if(c === "Sun"){
    document.write("<h2>It's Fun Day</h2>")
    console.log("It's Fun Day")
}else if(c === "Mon"){
    document.write("<h2>Its working day</h2>")
    console.log("Its working day")
}else if(c === "Tue"){
    document.write("<h2>Its working day</h2>")
    console.log("Its working day")
}else if(c === "Wed"){
    document.write("<h2>Its working day</h2>")
    console.log("Its working day")
}else if(c === "Thr"){
    document.write("<h2>Its working day</h2>")
    console.log("Its working day")
}else if(c === "Fri"){
    document.write("<h2>Its working day</h2>")
    console.log("Its working day")
}
// Step 2
document.write(("<h2><u>2nd Example</u> </h2>"))
console.log(("2nd Example "));
if (new Date(). toString().slice(0,3)==="Sun"||new Date(). toString().slice(0,3)==="Sat") {
    document.write("<h2>Its Fun day</h2>")
    console.log("Its Fun day")

} else {
    document.write("<h2>Its working day</h2>")
    console.log("Its working day")
}

       // Question Number 5
       document.write(("<h1>Question Number . 5 :- </h1>Write a program that shows the message <b>“First fifteen <br> days of the month”</b> if the date is less than 16th of the month <br> else shows <b>“Last days of the month”</b>."))
       document.write(("<br>"))
       // ans 5 solve detail
       document.write(("<h1>Ans.5 :-</h1>"))
       console.log(("Ans.5 :-"));
       // Step 1
       document.write(("<h2><u>1st Example</u> </h2>"))
       console.log(("1st Example "));
if (new Date(). getDate() <16) {
    document.write("<h2>First Fifteen Days of the Month</h2>")
    console.log("First Fifteen Days of the Month")
} else {
    document.write("<h2>Last days of the Month</h2>")
    console.log("Last days of the Month")
}
// Step 2
document.write(("<h2><u> 2nd Example</u> </h2>"))
console.log(("2nd Example "));
var day = new Date()
        var das = day.getMonth()
        if (das <= 15) {
            document.write("<h2>“First Fifteen Days of the Month”</h2>")
            console.log("“First Fifteen Days of the Month”")
        } else {
            document.write("<h2> “Last Days of the Month”.</h2>")
            console.log("“Last Days of the Month”.")
        }

        // Question Number 6
       document.write(("<h1>Question Number . 6 :- </h1>Write a program that determines the minutes since <br> midnight, Jan. 1, 1970 and assigns it to a variable that <br> hasn't been declared beforehand. Use any variable you like <br> to represent the Date object."))
       document.write(("<br>"))
       // ans 6 solve detail
       document.write(("<h1>Ans.6 :-</h1>"))
       console.log(("Ans.6 :-"));
       // Step 1
       document.write(("<h2><u>1st Example</u> </h2>"))
       console.log(("1st Example "));
       var crntDate = new Date()
       document.write("<h2> Current Date: " + crntDate + "</h2>")
       console.log(" Current Date: " + crntDate )
       var miliscind = (crntDate / 1000)
       document.write("<h2> Elapsed Milliseconds Since " + miliscind + "</h2>")
       console.log(" Elapsed Milliseconds Since " + miliscind )
       var mints = (crntDate / 1000 * 60)
       document.write("<h2> Elapsed Mints Since " + mints + "</h2>")
       console.log(" Elapsed Mints Since " + mints)
// Step 2
document.write(("<h2><u> 2nd Example</u> </h2>"))
console.log(("2nd Example "));
       var todayDate = new Date();
var Todaymilli = todayDate.getTime();
var todayMin = todayDate.getMinutes();
var diff = Todaymilli - todayMin;
var diffMin = diff/(1000*60*60);
var accurateMin = Math.floor(diffMin);
document.write("<h2> Current Date: " + todayDate + "</h2>");
document.write("<h2> Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli + "</h2>");
document.write("<h2> Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin + "</h2>")
console.log(" Current Date: " + todayDate);
console.log(" Elapsed milliseconds since midnight, Jan 1, 1970: " + Todaymilli);
console.log(" Elapsed minutes since midnight, Jan 1, 1970: " + accurateMin)

// Question Number 7
document.write(("<h1>Question Number . 7 :- </h1>Write a program that tests whether it's before noon and <br> alert <b> “Its AM” </b> else <b>“its PM” </b>."))
document.write(("<br>"))
// ans 7 solve detail
document.write(("<h1>Ans.7 :-</h1>"))
console.log(("Ans.7 :-"));
// Step 1
document.write(("<h2><u>1st Example</u> </h2>"))
console.log(("1st Example "));
var a = new Date();
var b = a.toString();
var c = b.slice(16,19);
if (c === "12:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's PM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's PM "))
                alert(("" + a + " :- " + "  It's PM "))
}else if(c === "13:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's PM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's PM "))
                alert(("" + a + " :- " + "  It's PM "))
}else if(c === "14:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's PM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's PM "))
                alert(("" + a + " :- " + "  It's PM "))
}else if(c === "15:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's PM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's PM "))
                alert(("" + a + " :- " + "  It's PM "))
}else if(c === "16:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's PM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's PM "))
                alert(("" + a + " :- " + "  It's PM "))
}else if(c === "17:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's PM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's PM "))
                alert(("" + a + " :- " + "  It's PM "))
}else if(c === "18:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's PM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's PM "))
                alert(("" + a + " :- " + "  It's PM "))
}else if(c === "19:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's PM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's PM "))
                alert(("" + a + " :- " + "  It's PM "))
}else if(c === "20:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's PM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's PM "))
                alert(("" + a + " :- " + "  It's PM "))
}else if(c === "21:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's PM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's PM "))
                alert(("" + a + " :- " + "  It's PM "))
}else if(c === "22:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's PM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's PM "))
                alert(("" + a + " :- " + "  It's PM "))
}else if(c === "23:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's PM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's PM "))
                alert(("" + a + " :- " + "  It's PM "))
}else if(c === "24:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's AM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's AM "))
                alert(("" + a + " :- " + "  It's PM "))
}else if(c === "01:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's AM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's AM "))
                alert(("" + a + " :- " + "  It's PM "))
}else if(c === "02:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's AM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's AM "))
                alert(("" + a + " :- " + "  It's PM "))
}else if(c === "03:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's AM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's AM "))
                alert(("" + a + " :- " + "  It's AM "))
}else if(c === "04:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's AM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's AM "))
                alert(("" + a + " :- " + "  It's AM "))
}else if(c === "05:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's AM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's AM "))
                alert(("" + a + " :- " + "  It's AM "))
}else if(c === "06:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's AM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's AM "))
                alert(("" + a + " :- " + "  It's AM "))
}else if(c === "07:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's AM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's AM "))
                alert(("" + a + " :- " + "  It's AM "))
}else if(c === "08:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's AM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's AM "))
                alert(("" + a + " :- " + "  It's AM "))
}else if(c === "09:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's AM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's AM "))
                alert(("" + a + " :- " + "  It's AM "))
}else if(c === "10:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's AM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's AM "))
                alert(("" + a + " :- " + "  It's AM "))
}else if(c === "11:"){
    document.write("<h2>" + a + " :- " + "  " + "  It's AM </h2>")
        console.log(("" + a + " :- " + "  " + "  It's AM "))
                alert(("" + a + " :- " + "  It's AM "))
}
// Step 2
document.write(("<h2><u> 2nd Example</u> </h2>"))
console.log(("2nd Example "));
var Tim = new Date()
        if (Tim > 24) {
            document.write("<h2>" + Tim + " :- " + "  " + " It's PM </h2>")
            console.log("" + Tim + " :- " + "  " + " It's PM ")
        } else {
            document.write("<h2>" + Tim + " :- " + "  " + " It's AM </h2>")
            console.log("" + Tim + " :- " + "  " + " It's AM ")
        }
// Question Number 8
document.write(("<h1>Question Number . 8 :- </h1>Write a program that creates a Date object for the last day <br> of the last month of 2020 and assigns it to variable named <br> <b>laterDate.</b>"))
document.write(("<br>"))
// ans 8 solve detail
document.write(("<h1>Ans.8 :-</h1>"))
console.log(("Ans.8 :-"));
// Step 1
document.write(("<h2><u>1st Example</u> </h2>"))
console.log(("1st Example "));
let laterDate = new Date("2020-12-31");
     document.write("<h2>Later Date : "+ laterDate +"</h2>")
     console.log("Later Date : "+ laterDate )
// Step 2
document.write(("<h2><u> 2nd Example</u> </h2>"))
console.log(("2nd Example "));
var month = 11; // January
var d = new Date(2020, month + 1, 0);
console.log("Later Date : " + d.toString()); // last day in December
document.write ("<h2> Later Date : "+d.toString() + "</h2>"); // last day in December

// Question Number 9
document.write(("<h1>Question Number . 9 :- </h1>Create a date object of the starting date of this Ramadan <br> and alert the number of days past since 1st Ramadan? <br> <b>Note: 1st Ramadan was on June 18, 2015</b>"))
document.write(("<br>"))
// ans 9 solve detail
document.write(("<h1>Ans.9 :-</h1>"))
console.log(("Ans. 9 :-"));
// Step 1
document.write(("<h2><u>1st Example</u> </h2>"))
console.log(("1st Example "));
let firstraman = new Date("2015-06-18");
        var a =new Date();
        var b=a-firstraman ;
        document.write("<h2>"+Math.floor(b /((1000*60*60*24)))+" days have  passsed since 1st Ramdan 2015 </h2>")
        console.log(Math.floor(b /((1000*60*60*24)))+" Days Have Passsed Since 1st Ramdan,2015 ")
 // Step 2
document.write(("<h2><u> 2nd Example</u> </h2>"))
console.log(("2nd Example "));
var ramadanStartDate = new Date((prompt("Enter 1st Ramdan Date","june 18 ,2015")));
var currentDate = new Date();
var timeDifference = currentDate.getTime() - ramadanStartDate.getTime();
var daysPassed = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
document.write("<h2>Days Passed Since 1st Ramadan : " + daysPassed + "</h2>");
alert(" Days Passed Since 1st Ramadan  : " + daysPassed);
console.log(" Days Passed Since 1st Ramadan  : " + daysPassed);

// Question Number 10
document.write(("<h1>Question Number . 10 :- </h1>Write a program that displays in your browser the <br> seconds that elapsed between the reference date and the <br> beginning of 2015."))
document.write(("<br>"))
// ans 10 solve detail
document.write(("<h1>Ans. 10 :-</h1>"))
console.log(("Ans. 10 :-"));
// Step 1
document.write(("<h2><u>1st Example</u> </h2>"))
console.log(("1st Example "));
let seconds = new Date("2015-12-5 22:50:16");
let seconds1 = seconds/(60*60*60*12);
document.write("<h2> On Reference Date "+seconds+"<br>"+ Math.floor(seconds1)+"  Seconds Had Passed Since Beginning of 2015 </h2>")
console.log(" On Reference Date "+seconds+"  "+ Math.floor(seconds1)+"  Seconds Had Passed Since Beginning of 2015 ")
// Step 2
document.write(("<h2><u> 2nd Example</u> </h2>"))
console.log(("2nd Example "));
let second = new Date();
let second1 = new Date()/(1000);
document.write("<h2>"+second+"<br>"+ Math.floor(second1)+"  Seconds Had Passed Since Beginning of 2015 </h2>")
console.log(second+"<br>"+ Math.floor(second1)+"  Seconds Had Passed Since Beginning of 2015 ")

// Question Number 11
document.write(("<h1>Question Number . 11 :- </h1>Create a Date object for the current date and time. <br> Extract the hours, reset the date object an hour ahead and <br> finally display the date object in your browser."))
document.write(("<br>"))
// ans 11 solve detail
document.write(("<h1>Ans. 11 :-</h1>"))
console.log(("Ans. 11 :-"));
// Step 1
document.write(("<h2><u>1st Example</u> </h2>"))
console.log(("1st Example "));
var now = new Date();
document.write("<h2>Current Date:  "+ now+"</h2>");
console.log("Current Date:  "+ now);
now.setHours(now.getHours() + 1)
document.write("<h2>1 Hour Ago, It Was:  "+ now+"</h2>");
console.log("1 Hour Ago, It Was:  "+ now);
// Step 2
// document.write(("<h2><u> 2nd Example</u> </h2>"))
// console.log(("2nd Example "));

// Question Number 12
document.write(("<h1>Question Number . 12 :- </h1>Write a program that creates a date object and show the <br> date in an alert box that is reset to 100 years back?"))
document.write(("<br>"))
// ans 12 solve detail
document.write(("<h1>Ans. 12 :-</h1>"))
console.log(("Ans. 12 :-"));
// Step 1
document.write(("<h2><u>1st Example</u> </h2>"))
console.log(("1st Example "));
var now = new Date();
        document.write("<h2>Current Date:  "+ now+"</h2>");
        console.log("Current Date:  "+ now);
        now.setFullYear(now.getFullYear() - 100)
        document.write("<h2>100 Years Back, It Was:  "+ now+"</h2>");
        console.log("100 Years Back, It Was:  "+ now);

        // Question Number 13
document.write(("<h1>Question Number . 13 :- </h1>Write a program to ask the user about his age. Calculate <br> and show his birth year in your browser."))
document.write(("<br>"))
// ans 13 solve detail
document.write(("<h1>Ans. 13 :-</h1>"))
console.log(("Ans. 13 :-"));
// Step 1
document.write(("<h2><u>1st Example</u> </h2>"))
console.log(("1st Example "));
 // var now = new Date();
        // document.write(now + "<br>");

        // var date = now.getSeconds()
        // document.write(date)
        var named = prompt("Enter Your Name :",'Yasir Qureshi')
        document.write("<h2>Your Name :" + named + "</h2>")
        console.log(("Your Name :" + named ))


        // var birthDate = new Date('11 jan 1984')
        var birthDate = new Date(prompt('Enter Your Birth Date', '11 jan 1984'))

        var bdyear = birthDate;

        //document.write("BirthDay :" + birthDate.toDateString() + "<br>")
        document.write("<h2>Your BirthDay :" + bdyear.toDateString() + "</h2>")
        console.log(("Your BirthDay :" + bdyear.toDateString()))

        var today = new Date()
        document.write("<h2>Today's Date :" + today.toDateString() + "</h2>")
        console.log(("Today's Date :" + today.toDateString() ))

        var mstoday = today.getTime();
        var msBirthdate = birthDate.getTime()

        var msdiff = mstoday - msBirthdate;

        var ddiff = msdiff / (1000 * 60 * 60 * 24)
        document.write("<h2>Total life Days :" + " " + Math.floor(ddiff) + "</h2>")
        console.log(("Total life Days :" + " " + Math.floor(ddiff)))

        var mmsBdYear = bdyear.getFullYear();
        var mmsCurrent = today.getFullYear();


        var totalAge = mmsCurrent - mmsBdYear;

        document.write("<h2>Total Age :" + totalAge + "</h2>")
        console.log(("Total Age :" + totalAge))

        // document.write(msdate + "<br>" + mstoday + "<br>")
// Step 2
document.write(("<h2><u> 2nd Example</u> </h2>"))
console.log(("2nd Example "));
        var age=new Date(prompt("Enter Your Birth Date","jan 11 ,1984"))
        var aa=age.getFullYear()
        console.log(aa)
        var now = new Date();
        var diff=now-age
        document.write("<h2>Your Birth Year Is: "+ aa +"<br>" +"Your Age Is:"+ Math.floor(diff /((1000*3600*24)*365.25))+"</h2>")
        console.log("Your Birth Year Is: "+ aa)
        console.log("Your Age Is: "+ Math.floor(diff /((1000*3600*24)*365.25)));

        // Question Number 14
        document.write(("<h1>Question Number . 14 :- </h1>Write a program to generate your K-Electric bill in your <br> browser. All the amounts should be rounded off to 2 <br> decimal places. Display the following fields: <br> a. Customer Name <br> b. Current Month  <br> c. Number of units <br> d. Charges per unit <br> e. Net Amount Payable <b>(within Due Date)</b> <br> f. Late Payment Surcharge <br> g. Gross Amount Payable <b>(after Due Date)</b> <br> Where, <br> <br>Net Amount Payable (within Due Date) = Number of units * Charges per unit <br> & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge"))
        document.write(("<br>"))
        // ans 14 solve detail
        document.write(("<h1>Ans. 14 :-</h1>"))
        console.log(("Ans. 14 :-"));
        // Step 1
        document.write(("<h2><u>1st Example</u> </h2>"))
        console.log(("1st Example "));
        document.write(("<h2>K-Electric Bill </h2>"))
        console.log(("K-Electric Bill "));
        var keuser=(prompt("Enter Your Name","Yasir Qureshi"))
        var month=new Date().getMonth()
        var units=(prompt("Enter Unit","410"))
        var rs=(prompt("Enter Per Unit Charges","16"))
        document.write("<h2> Customer Name:"+keuser + "<br>Month: "+ arryMonth[month] + "<br>Number of units:"+units+"<br>Charges per unit:" +rs+"<br><br>Net Amount Payable(within Due Date): "+units*rs+"<br> Late payment Surcharge: "+ 350+"<br>Gross Amount payable (After Due Date):" +((units*rs)+350)+"</h2>")
        console.log(" Customer Name:"+keuser)
        console.log(" Month: "+ arryMonth[month] )
        console.log(" Number of units:"+units )
        console.log(" Net Amount Payable(within Due Date): "+units*rs)
        console.log(" Late payment Surcharge: "+ 350 )
        console.log(" Gross Amount Payable (After Due Date):" +((units*rs)+350))
// Step 2
document.write(("<h2><u> 2nd Example</u> </h2>"))
console.log(("2nd Example "));
document.write(("<h2>K-Electric Bill </h2>"))
        console.log(("K-Electric Bill "));

        var yourName = "Yasir Qureshi"
        document.write("<h2>Customer Name" + " : " + yourName+"</h2>")
        console.log("Customer Name" + " : " + yourName)
        var monthName = ['January', 'February', 'March', 'April', 'May', 'Jun', 'July', 'August', 'September', 'October', 'November', 'December']
        var mon = new Date()
        var mone = monthName[mon.getMonth()]
          document.write("<h2>Current Month" + " : " + mone+"</h2>")
        console.log("Current Month" + " : " + mone)
        var numunit = 410
        document.write("<h2>Number of units" + " : " + numunit+"</h2>")
        console.log("Number of units" + " : " + numunit)
        var num = numunit.pars
        var price = 16;
        document.write("<h2>Number of units" + " : " + price+"</h2>")
        console.log("Number of units" + " : " + price)
        var sum = numunit * price
        document.write("<h2>Net Amount Payable (within Due Date)" + " : " + sum+"</h2>")
        console.log("Net Amount Payable (within Due Date)" + " : " + sum)
        var late = 350;
        var sumlate = sum + late
        document.write("<h2>Late Payment Surcharge" + " : " + late+"</h2>")
        console.log("Late Payment Surcharge" + " : " + late)
        document.write("<h2>Gross Amount Payable (after Due Date)" + " : " + sumlate+"</h2>")
        console.log("Gross Amount Payable (after Due Date)" + " : " + sumlate)

    document.write (`<br>`)
    document.write(("<hr>"))
    document.write(("<marquee><b>YASIR RASHEED QURESHI WEB AND AAP CCO - 118488 TEACHER SIR RIZWAN BHATTI. JAVA SCRIPT ASSIGNMENT 13 (DATE METHODS)</b></marquee>"))
    document.write(("<hr>"))

 
