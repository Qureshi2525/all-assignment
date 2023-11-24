document.write("<center><h1>Yasir Rasheed CCO-118488 یاسر رشید </h1></center>")
document.write("<center><h1> ASSIGNMENT 10 (ARRAYS AND LOOP)</h1></center>")
document.write(("<hr>"))
document.write(("<marquee><b>YASIR RASHEED QURESHI WEB AND AAP CCO - 118488 TEACHER SIR RIZWAN BHATTI. JAVA SCRIPT ASSIGNMENT 10 (ARRAYS AND LOOP)</b></marquee>"))
document.write(("<hr>"))

document.write(("<b>Q . 1 :- </b> Declare and Initialize an Empty Multidimensional Array. <br><b>(Array of Arrays) :</b><br>"))
document.write(("<b> & </b><br>"))
document.write(("<b>Q . 2 :- </b> Declare and Initialize a Multidimensional Array <br> Representing the Following Matrix :<br>"))

var arr1 = [[0,1,2,3], [1,0,1,2], [2,1,0,1]]
document.write (`<h3>${arr1[0]}<br>${arr1[1]}<br>${arr1[2]}</h3>`)

document.write(("<b>Q . 3 :- </b> Write a Program to Print Numeric Counting from 1 to 10:<br>"))

document.write (`<br>`)
for ( var a = 1; a <= 10; a++){
    document.write (`<h3>${a}<br></h3>`)
}

document.write(("<b>Q . 4 :- </b> Write a Program to Print Multiplication Table of any <br> Number Using for Loop. Table Number & Length Should be <br> Taken as an Input from User :<br>"))

var tableNumber = prompt (`Enter a Number to Show its Multiplication Table`)
var tableLength = prompt (`Enter Length of Multiplication Table`)
document.write (`<h3>Multiplication Table of ${tableNumber} Length ${tableLength}</h3><br>`)
for ( var a = 1; a <= tableLength; a++){
    document.write (`<b>${tableNumber} x ${a} = ${tableNumber*a}</b><br>`)
}

document.write(("<br><b>Q . 5 :- </b> Write a Program to Print Items of the Following Array <br> Using for Loop: <br> <b> Fruits = [“Apple”, “Banana”, “Mango”, “Orange”, <br> “Strawberry”]:</b><br>"))
document.write (`<br>`)
var fruits = ["apple", "banana", "mango", "orange", "strawberry"]
for ( var a = 0; a < fruits.length; a++){
    document.write (`<b>${fruits[a]}</b><br>`)
}
document.write (`<br>`)

for(var i = 0; i < fruits.length; i++){
    document.write("<b> Element index "+i+" is "+fruits[i]+"<br></b>")
}
document.write("<br>")

document.write(("<br><b>Q . 6 :- </b>Generate the following series in your browser. See <br><b> Example Output.</b><br> a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 <br> b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 <br> c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 <br> d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19 <br> e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k: <br>"))
 var counting = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
document.write("<br>")
document.write("<b>a) Counting : <br><br>"+counting)
counting.reverse()
document.write("<br><br>b) Reverse Counting :<br><br>"+counting)
// Even
     document.write("<br><br>c) Even Numbers <br><br>")
     var even = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19,20]
     for(var i = 0; i <= even.length; i++){
         if(i % 2 == 0){
             document.write(" "+i)
         }
    }
     document.write("<br><br>d) Odd Numbers <br><br>")
// Odd
     var odd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19,20]
         for(var i = 1; i <= odd.length; i++){
             if(i % 2 == 1){
                 document.write(" "+i)
             }
        }
         document.write("<br>")
// Series:
         document.write("<br><br>e) Series Numbers <br><br>")
         document.write("</b>")
        var series = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,15,16,17,18,19,20]
             for(var i = 1; i <= series.length; i++){
                 if(i % 2 == 0){
                      document.write("<b> "+i+"k </b>")
                     }
                 }
                 document.write("<br>")
document.write(("<br><b>Q . 7 :- </b>You Have an Array <br> A = [“Cake”, “Apple Pie”, “Cookie”, “Chips”, “Patties”] <br> Write a Program to Enable “Search by User Input” in an <br> Array. <br> After Searching, Prompt the User Whether the Given Item is <br> Found in the List or not. Example: <br>"))
var bakkeryItems = ["cake", "apple pie", "cookie", "chips", "patties"]
var useritem = prompt(`Welcome to A Bakery. What do you want to buy?`)
var flag = false
for ( var a = 0; a < bakkeryItems.length; a++){
    if (useritem==bakkeryItems[a]) {
        flag = true
        alert (`${useritem} is available at index ${bakkeryItems.indexOf(useritem)} in our bakery.`)
        document.write (`<br><b>${useritem} is available at index ${bakkeryItems.indexOf(useritem)} in our bakery.<b>`)
        break
    }
}
    if (flag==false) {
        alert (`We are sorry. ${useritem} is not availale in our bakery.`)
        document.write (`<br><b> We are sorry. ${useritem} is not availale in our bakery.</b><br>`)

    }
    document.write (`<br></b></b>`)

    document.write(("<br><b>Q . 8 :- </b> Write a Program to Identify the Largest Number in the <br> Given Array. <br> A = [24, 53, 78, 91, 12].<br>"))
    document.write (`<br>`)
    var numbers = [24, 53, 78, 91, 12]
    document.write (`<b>Array items: ${numbers}</b><br>`)
    if (numbers[0]>numbers[1] && numbers[0]>numbers[2] && numbers[0]>numbers[3] && numbers[0]>numbers[4]) {
        document.write (`<b>The Largest Number is: ${numbers[0]}</b>`)
    }
    else if (numbers[1]>numbers[0] && numbers[1]>numbers[2] && numbers[1]>numbers[3] && numbers[1]>numbers[4]) {
        document.write (`<b>The Largest Number is: ${numbers[1]}</b>`)
    }
    else if (numbers[2]>numbers[0] && numbers[2]>numbers[1] && numbers[2]>numbers[3] && numbers[2]>numbers[4]) {
        document.write (`<b>The Largest Number is: ${numbers[2]}</b>`)
    }
    else if (numbers[3]>numbers[0] && numbers[3]>numbers[2] && numbers[3]>numbers[1] && numbers[3]>numbers[4]) {
        document.write (`<b>The Largest Number is: ${numbers[3]}</b>`)
    }
    else if (numbers[4]>numbers[0] && numbers[4]>numbers[2] && numbers[4]>numbers[3] && numbers[4]>numbers[1]) {
        document.write (`<b>The Largest Number is: ${numbers[4]}</b>`)
    }

    document.write (`<br>`)

document.write(("<br><b>Q . 9 :- </b> Write a Program to Identify the Smallest Number in the <br> Given Array. <br> A = [24, 53, 78, 91, 12].<br>"))

document.write (`<br>`)
var numbers = [24, 53, 78, 91, 12]
document.write (`<b>Array items : ${numbers} </b><br>`)
if (numbers[0]<numbers[1] && numbers[0]<numbers[2] && numbers[0]<numbers[3] && numbers[0]<numbers[4]) {
    document.write (`<b>The Smallest Number is: ${numbers[0]}</b>`)
}
else if (numbers[1]<numbers[0] && numbers[1]<numbers[2] && numbers[1]<numbers[3] && numbers[1]<numbers[4]) {
    document.write (`<b>The Smallest Number is: ${numbers[1]}</b>`)
}
else if (numbers[2]<numbers[0] && numbers[2]<numbers[1] && numbers[2]<numbers[3] && numbers[2]<numbers[4]) {
    document.write (`<b>The Smallest Number is: ${numbers[2]}</b>`)
}
else if (numbers[3]<numbers[0] && numbers[3]<numbers[2] && numbers[3]<numbers[1] && numbers[3]<numbers[4]) {
    document.write (`<b>The Smallest Number is: ${numbers[3]}</b>`)
}
else if (numbers[4]<numbers[0] && numbers[4]<numbers[2] && numbers[4]<numbers[3] && numbers[4]<numbers[1]) {
    document.write (`<b>The Smallest Number is: ${numbers[4]}</b>`)
}
document.write (`<br>`)

document.write(("<br><b>Q . 10 :- </b> Write a program to print multiples of 5 ranging 1 to 100.<br>"))

document.write (`<br>`)
for(var i = 5 ; i <=100 ;i+=5){
 document.write("<b>" +i+ ",</b> ")
}
document.write(("<hr>"))
document.write(("<marquee><b>YASIR RASHEED QURESHI WEB AND AAP CCO - 118488 TEACHER SIR RIZWAN BHATTI. JAVA SCRIPT ASSIGNMENT 10 (ARRAYS AND LOOP)</b></marquee>"))
document.write(("<hr>"))
