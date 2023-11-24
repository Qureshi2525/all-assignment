document.write("<h1> Yasir Rasheed CCO-118488</h1>")
document.write("<h1> ASSIGNMENT 05 (MATH EXPRESSIONS)</h1>")

{document.write(" <h2><a href=./work1.html>ASSIGNMENT 5 STEP 1 & 2</a></h2>")}

document.write("<br><h2> STEP 3</h2>")
document.write("<h1>Java Variables</h1>")
document.write("Variables are containers for storing data values. <br><br> In Java, there are different types of variables, for example:")
document.write("<h2> a. Declaring Variables</h2>")
document.write("<ul><li><b>String</b> - stores text, such as <b>Hello.</b> String values are surrounded by double quotes</li></ul>")
document.write("<ul><li><b>int</b> - stores integers (whole numbers), without decimals, such as 123 or -123</li></ul>")
document.write("<ul><li><b>float</b> - stores floating point numbers, with decimals, such as 19.99 or -19.99</li></ul>")
document.write("<ul><li><b>char</b> - stores single characters, such as 'a' or 'B'. Char values are surrounded by single quotes</li></ul>")
document.write("<ul><li><b>boolean</b> - stores values with two states: true or false</li></ul>")
document.write("<h2> b. c. d. e. f. g. h. i. j. k. l. Answer</h2>")
var undefine 
var value = 5;
++value
var add = value + 7
--add
var divide = add % 3;

{document.write("<td><p>Value after variable declaration is undefined </p>")}

{document.write("<p>Initial value: " + --value +"</p>")} //5

{document.write("Value after increment is: " + ++value +"</p>")} //6

{document.write("<p>Value after addition is: " + ++add +"</p>" )} //13

{document.write("<p>Value after decerment is: " + --add +"</p>" )} //12

{document.write("<p>The remainder is: " + divide + "</p></td>")} //0

document.write("<br><h2> STEP 4</h2>")
var oneTicketCost = 600;
var bying5Tickets = oneTicketCost * 5;

{document.write("<td>Total cost to buy 5 tickets to a movie is " + bying5Tickets + "PKR</td> </tr> </table>")}

{document.write(" <h2><a href=./work2.html>ASSIGNMENT 5 STEP 5</a></h2>")}

document.write("<br><h2> STEP 6</h2>")

{document.write("<h2>The Temperature Converter:</h2>")}


        var celsiusTemperature = 25;

        var convert$C_Temp_to_F_Temp = (celsiusTemperature * 9 / 5 ) + 32 

        {document.write("<p>" + celsiusTemperature + "<sup>0</sup>C is " + convert$C_Temp_to_F_Temp + "<sup>0</sup>F</p>")}
        
        var fahrenheitTemperature = 70;

        var convert$F_Temp_to_C_Temp = (fahrenheitTemperature - 32) * 5 / 9

        {document.write("<p>" + fahrenheitTemperature + "<sup>0</sup>F is " + convert$F_Temp_to_C_Temp + "<sup>0</sup>C</p>")}

        document.write("<br><h2> STEP 7</h2>")
        var price_Item_1 = 650;

        var price_Item_2 = 100;

        var qty_Item_1 = 3;

        var qty_Item_2 = 7;

        var shipgCharges = 100;

        (document.write("<h1>Shopping Cart</h1><br>"))
        
        {document.write("<p>Price of item 1 is " + price_Item_1 + "<br>")}

        {document.write("Quantity of item 1 is " + qty_Item_1 + "<br>")}

        {document.write("Price of item 2 is " + price_Item_2 + "<br>")}

        {document.write("Quantity of item 2 is " + qty_Item_2 + "<br>")}

        {document.write("Shipping Charges " + shipgCharges + "</p>")}

        {document.write("Total cost of your order is " + (price_Item_1 * qty_Item_1 + price_Item_2 * qty_Item_2 + shipgCharges))}

        {document.write(" <h2><a href=./work3.html>ASSIGNMENT 5 STEP 8</a></h2>")}

        document.write("<br><h2> STEP 9</h2>")

        var us$ = 10;
        var saudiRiyals = 25;

        var onePkr = 104.80;
        var onepkr = 28;
       
        {document.write("<h1>Currency in PKR</h1>")}

        {document.write("<b>US Dollars = " + us$ + " $</b><br>")}

        {document.write("<b>Saudi Riyals = " + saudiRiyals + " Riyals</b><br>")}

        {document.write("<b>Total Currency in PKR: " + (us$ * onePkr + saudiRiyals * onepkr) + " Rs</b><br>")}

        document.write("<br><h2> STEP 10</h2>")
        var Number = 550;
        var show = "Real Number is 550, <br> \nthen following steps are appyly to it:<br> \na. Add 5 <br> \nb. Multiply by 10 <br> \nc. Divide the result by 2 <br> \nThen Answer is:"

        var answer = Number + 5 ;
        var answer = answer * 10 ;
        var answer = answer / 2 ;

        document.write(show);
        
        document.write(answer);

        document.write("<br><h2> STEP 11</h2>")

        var currentYear  = 2023;
        var birthYear = 2000;
        var birthYear_2 = 2002;

        {document.write("<h1>Age Calculator</h1>")}

        {document.write("<b>Current Year: " + currentYear + "</b><br>")}

        {document.write("<b>Birth Year: " + birthYear + " Or " + birthYear_2 + "</b><br>")}

        {document.write("<b>You are either " + (currentYear - birthYear) + " or " + (currentYear - birthYear_2) +"  years old</b><br>")}

        document.write("<br><h2> STEP 12</h2>")

        {document.write("<h1>The Geometrizer</h1>")}

        var radius = 20;
        var circum =  2 * 3.142 * 20
        var area = 3.142 * (20*20)

        {document.write("<b>Radius of a circle: " + radius + "</b><br>")}

        {document.write("<b>The circumference is: " + circum + "</b><br>")}

        {document.write("<b>The area is: " + area + "</b><br>")}

        document.write("<br><h2> STEP 13</h2>")

        {document.write("<h1>The Lifetime Supply Calculator:</h1>")}

        var fav_snack = "<b>Chocolate Chip</b>"
        var currentAge = 15;
        var maxAge = 65;
        var estimateAmount = 3;
        var total_for_eat = ((maxAge - currentAge) * 65 ) * estimateAmount

        {document.write("<b>Favourite Snack: " + fav_snack + "</b><br>")}
        {document.write("<b>Current Age: " + currentAge + "</b><br>")}
        {document.write("<b>Estimated Maximum Age: " + maxAge + "</b><br>")}
        {document.write("<b>Amount of snacks per day: " + estimateAmount + "</b><br>")}
        {document.write("<b>You will need " + total_for_eat + " " +  fav_snack +" to last you until the ripe old age of " + maxAge + "</b><br> <br>")}
