document.write("<center><h1>Yasir Rasheed CCO-118488 یاسر رشید </h1></center>")
document.write("<center><h1> ASSIGNMENT 11 (STRING METHODS)</h1></center>")
document.write(("<hr>"))
document.write(("<marquee><b>YASIR RASHEED QURESHI WEB AND AAP CCO - 118488 TEACHER SIR RIZWAN BHATTI. JAVA SCRIPT ASSIGNMENT 11 (STRING METHODS)</b></marquee>"))
document.write(("<hr>"))
document.write(("<h1>Q . 1 :- </h1> Write a program that takes two user inputs for first and <br> last name using prompt and merge them in a new variable <br> titled <b>FullName.</b> Greet the user using his full name.</b>"))
document.write(("<br>"))
document.write(("<h1>Ans . 1 :- </h1>"))
// ans 1 solve detail

var namef=prompt("Please Enter First Name")
var name1=prompt("Please Enter Last Name")
var fullName=namef+"  "+name1
document.write("<h2>"+fullName+"</h2>")

// document.write(("<br>"))

document.write(("<h1>Q . 2 :- </h1>Write a program to take a user input about his favorite <br> mobile phone model. Find and display the length of user <br> input in your browser"))
document.write(("<br>"))
document.write(("<h1>Ans . 2 :- </h1>"))
// ans 2 solve detail

var mobil=prompt("Please Enter Favorite Mobaile Phone Model")
m_length= mobil.length
document.write("<h2>My Favorite Phone Is : "+mobil+ " <br> Length of String : " +m_length+ "</h2>")

// document.write(("<br>"))

document.write(("<h1>Q . 3 :- </h1>Write a program to find the index of letter <b>“n”</b> in the word <br> <b>“Pakistani”</b> and display the result in your browser ."))
document.write(("<br>"))
document.write(("<h1>Ans . 3 :- </h1>"))
// ans 3 solve detail
var contry="Pakistani"
document.write("<h2>String : Pakistani</h2>")
document.write("<h2>Index of 'n' : "+ contry.indexOf("n")+"</h2>")

// document.write(("<br>"))

document.write(("<h1>Q . 4 :- </h1>Write a program to find the last index of letter <b>“l”</b> in the <br> word <b>“Hello World”</b> and display the result in your browser."))
document.write(("<br>"))
document.write(("<h1>Ans . 4 :- </h1>"))
// ans 4 solve detail

var word="Hello World"
document.write("<h2>String : Hello World</h2>")
document.write("<h2>Index of 'l' : "+ word.lastIndexOf("l")+"</h2>")

// document.write(("<br>"))

document.write(("<h1>Q . 5 :- </h1>Write a program to find the character at<b> 3rd index</b> in the <br> word <b>“Pakistani” </b>and display the result in your browser."))
document.write(("<br>"))
document.write(("<h1>Ans . 5 :- </h1>"))
// ans 5 solve detail

var character="Pakistani"
document.write("<h2>String : Pakistani</h2>")
document.write("<h2>Character at Index 3 : "+ character.slice(3,4)+"</h2>")

document.write(("<h1>Q . 6 :- </h1>Repeat <b>Q1</b> using <b>String Concat() </b>method."))
document.write(("<br>"))
document.write(("<h1>Ans . 6 :- </h1>"))
// ans 6 solve detail

var fullName=namef+"   "+ name1
document.write("<h2>"+ namef.concat(" "+name1)+"</h2>")

document.write(("<h1>Q . 7 :- </h1>Write a program to replace the <b>“Hyder”</b> to <b>“Islam”</b> in the <br> word <b>“Hyderabad”</b> and display the result in your browser.."))
document.write(("<br>"))
document.write(("<h1>Ans . 7 :- </h1>"))
// ans 7 solve detail

var islam="Hyderabad"
var find="Hyder"
document.write(("<h2>City : Hyderabad</h2>"))
document.write(("<h2>After Replacement :"+islam.replace(find,"Islam")+"</h2>"))
document.write(("<h2><u>Without Replacement Use “FORLOOP” :- </u></h2>"))
for(var i =0;i<islam.length;i++){
    if (islam.slice(i,i+find.length)===find){
        var a=islam.slice(0,i);
        var b="Islam"
        var c=islam.slice(i+find.length);

    }
}
document.write(("<h2>After Forloop :"+a+b+c+"</h2>"))

document.write(("<h1>Q . 8 :- </h1>Write a program to replace all occurrences of <b>“and”</b> in the <br> string with <b>“&”</b> and display the result in your browser. <br> var message = “Ali and Sami are best friends. They play cricket and <br> football together.”;"))
document.write(("<br>"))
document.write(("<h1>Ans . 8 :- </h1>"))
// ans 8 solve detail

var message="Yasir and Qureshi are Best Friends. They Play Crickrt and Football Together. "
document.write(("<h2>After Replacement & :"+message.replaceAll("and","&")+"</h2>"))

document.write(("<h1>Q . 9 :- </h1>Write a program that converts a string <b>“472”</b> to a number <br> <b>472.</b> Display the values & types in your browser. "))
document.write(("<br>"))
document.write(("<h1>Ans . 9 :- </h1>"))

// ans 9 solve detail

var value="472"
        var number=parseInt(value)
        var ty=typeof(value)
        var up1=ty[0].toUpperCase() + ty.slice(1)
        document.write("<h2> Value : "+ value+" <br> Type : "+up1+"</h2>")
        var str=typeof(number)
        var up=str[0].toUpperCase() + str.slice(1)
        document.write("<h2> Value : "+ number+"  <br>Type :  "+up+"</h2>")

        document.write(("<h1>Q . 10 :- </h1>Write a program that takes user input. Convert and <br> show the input in capital letters. "))
document.write(("<br>"))
document.write(("<h1>Ans . 10 :- </h1>"))
// ans 10 solve detail
var name23=prompt("Please Enter Any Name in LowerCase")
swapcase = function swapcase(str) {
        return str.replace(/([a-z]+)|([A-Z]+)/g, function(match, chr) {
                return chr ? match.toUpperCase() : match.toLowerCase();
            });
        }
        document.write("<h2>"+swapcase(name23)+"</h2>");
        
        document.write(("<h1>Q . 11 :- </h1>Write a program that takes user input. Convert and <br> show the input in title case.. "))
        document.write(("<br>"))
        document.write(("<h1>Ans . 11 :- </h1>"))
        // ans 11 solve detail
                 var name24=prompt("Please Enter Any Name in LowerCase")
                function sentenceCase (str) {
                    if ((str===null) || (str===''))
                         return false;
                    else
                     str = str.toString();
                  
                   return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                  }
                  document.write("<h2>"+sentenceCase(name24)+"</h2>");         
    
                  document.write(("<h1>Q . 12 :- </h1>Write a program that converts the variable <b>num</b> to <br> string. <br> var num = 35.36 ; <br> Remove the dot to display <b>“3536”</b> display in your browser."))
                  document.write(("<br>"))
                  document.write(("<h1>Ans . 12 :- </h1>"))
        // ans 12 solve detail
var num = 35.36;
var str=num.toString();
var withoutDots=str.replaceAll(".","")

document.write("<h2>"+withoutDots+"</h2>");         

document.write(("<h1>Q . 13 :- </h1>Write a program to take user input and store username <br> in a variable. If the username contains any special symbol <br><b> among [@ . , !],</b> prompt the user to enter a valid username. <br> For character codes of <b>[@ . <br>  <br> Note: <br> ASCII code of ! is 33 <br> ASCII code of , is 44 <br> ASCII code of . is 46 <br> ASCII code of @ is 64.</b>"))
                  document.write(("<br>"))
                  document.write(("<h1>Ans . 13 :- </h1>"))
        // ans 13 solve detail
        var userName=prompt("Enter your Input:User Name ");
        checkValidName(userName);
        function checkValidName(un)
        {
            var message;
            var split=[];
            var arr=[];
            for(var i=0;i<un.length;i++)
            {
                split[i]=un.split("&nbsp;");
                arr[i]=un.charCodeAt(i);
                if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
                {
                        message="Correct User Name";
                }
                while(arr[i]==33||arr[i]==44||arr[i]==46||arr[i]==64)
                {
                    alert("Please Enter a Valid User Name");                                                                                                                   
                    userName=prompt("Enter Your Input: User Name ");
                    split[i]=un.split("&nbsp;");
                    arr[i]=un.charCodeAt(i);
                    if(arr[i]!=33||arr[i]!=44||arr[i]!=46||arr[i]!=64)
                    {
                        message="  User Name Is Correct  ";
                        break;
                    }
                }
                    }
            alert(message);
            document.write("<h2>"+message+"</h2>");
                }
    
                document.write(("<h1>Q . 14 :- </h1> You have an array <br> <b>A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]</b> <br> Write a program to enable “search by user input” in an <br> array. After searching, prompt the user whether the given <br> item is found in the list or not. <br> Note: Perform case insensitive search. Whether the user <br> enters <b>cookie, Cookie, COOKIE or coOkIE,</b> program <br> should inform about its availability. <b>Example:</b>"))
                document.write(("<h1>Ans . 14 :- </h1>"))
      // ans 14 solve detail

      var bakery=prompt("enter a bakery item")
       

      var bk = ["cake", "apple pie", "cookie", "chips", "patties"]
      var f=false;

       for(var i=0;i<bk.length;i++){
          if(bakery.toLowerCase() == bk[i]){
           document.writeln("<h2>  "+bakery+" is Abailable "+"   "+bakery+" Iindex no "+i+"in our Bakery</h2>");
           var f=true;
          } 
          
       }
       if(f==false){
           document.writeln(" <h2>We  are Sorry."+ bakery  +"  is Not Abailable in our Bakery </h2>");
          
       }

       document.write(("<h1>Q . 15 :- </h1> Write a program to take password as an input from <br> user. The password must qualify these requirements: <br> a. It should contain alphabets and numbers <br> b. It should not start with a number <br> c. It must <b>at least 6 characters long</b> <br> If the password does not meet above requirements, <br> prompt the user to enter a valid password. <br> For character codes of<b> a-z, A-Z & 0-9, refer to ASCII</b> <br> table at the end of this document."))
       document.write(("<h1>Ans . 15 :- </h1>"))
// ans 15 solve detail
       
var pass=prompt("Valid Password Use (Cpital,lowercas,Number & Special Characters",)

           
function isValidPassword(password) {
// for checking if password length is between 8 and 15
if (!(password.length >= 8 && password.length <= 15)) {
return false;
}

// to check space
if (password.indexOf(" ") !== -1) {
return false;
}

// for digits from 0 to 9
let count = 0;
for (let i = 0; i <= 9; i++) {
if (password.indexOf(i) !== -1) {
count = 1;
}
}
if (count === 0) {
return false;
}

// for special characters
if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
return false;
}

// for capital letters
count = 0;
for (let i = 65; i <= 90; i++) {
if (password.indexOf(String.fromCharCode(i)) !== -1) {
count = 1;
}
}
if (count === 0) {
return false;
}

// for small letters
count = 0;
for (let i = 97; i <= 122; i++) {
if (password.indexOf(String.fromCharCode(i)) !== -1) {
count = 1;
}
}
if (count === 0) {
return false;
}

// if all conditions fail
return true;
}


if(isValidPassword(pass)){
document.write(`${pass} - Valid Password`);
} else {
document.write(`${pass} - Invalid Password!`);
}

document.write(("<h1>Q . 16 :- </h1> Write a program to convert the following string to an <br> array using string split method. <br><b>var university = “University of Karachi”;</b> <br> Display the elements of array in your browser."))
document.write(("<h1>Ans . 16 :- </h1>"))
// ans 16 solve detail
    
var university = "University of Karachi";
          
               
var unarry=[] = university.split("")

document.write(" <h2> Convert String to  Array  and Type  </h2><br> "+"<h2>"+ typeof unarry +" "+unarry+"</h2><br>" )
  
for (let index = 0; index < unarry.length; index++) {
  const element = unarry[index];

  document.write("<br> <b> "+element.toLocaleUpperCase()+"</b>")
  
}
document.write(("<h1>Q . 17 :- </h1> Write a program to display the last character of a user input."))
document.write(("<h1>Ans . 17 :- </h1>"))
// ans 17 solve detail

var input =prompt("Enter Contry Name..!","Any Contry Name");
        
var p= input.slice(-1)
document.write("<h2>"+input + " last character of a input...............!"+ p+"<h2>")

document.write(("<h1>Q . 18 :- </h1> You have a string <b>“The quick brown fox jumps over the <br> lazy dog”</b>. Write a program to count number of <br> occurrences of word “the” in given string.")) 
document.write(("<h1>Ans . 18 :- </h1>"))
// ans 18 solve detail

var text= "The quick brown fox jumps over the lazy dog"

            var regex = /[a-zA-Z0-9]/g; // only count letters and numbers
            document.write("<h2>Count Whithout_Space Characters..............! "+text.match(regex).length+"</h2>"); // prints 35 to the console

            

             var coun=0;

            for (var i = 0; i < text.length; i++) {

                coun++
             
                
            } document.write("<h2> Count Whit_Space Characters..............!"+coun+"</h2>")

            document.write(("<hr>"))
            document.write(("<marquee><b>YASIR RASHEED QURESHI WEB AND AAP CCO - 118488 TEACHER SIR RIZWAN BHATTI. JAVA SCRIPT ASSIGNMENT 11 (STRING METHODS)</b></marquee>"))
            document.write(("<hr>"))