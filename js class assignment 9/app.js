document.write("<center><h1>Yasir Rasheed CCO-118488 یاسر رشید </h1></center>")
document.write("<center><h1> ASSIGNMENT 09 (ARRAYS)</h1></center>")
document.write(("<hr>"))
document.write(("<marquee><b>YASIR RASHEED QURESHI WEB AND AAP CCO - 118488 TEACHER SIR RIZWAN BHATTI. JAVA SCRIPT ASSIGNMENT 9 (ARRAYS)</b></marquee>"))
document.write(("<hr>"))
document.write(("<b>Q . 1 & 2 :- </b> Declare an Empty Array Using JS Literal Notation to Store Student Names in Future"))
   
            var  studentNames =[    ];
            document.write(("<br>")) 

            document.write(("<br><b>Q . 3 :- </b> Declare and Initialize a Strings Array."))
var  stringArray =[ "Yasir ", "Rizwan ","Usama"]
document.write(("<br>")) 

document.write(("<br><b>Q . 4 :- </b> Declare and Initialize a Numbers Array."))
         var numerArray =[1,2,3,4,5]
         document.write(("<br>")) 

         document.write(("<br><b>Q . 5 :- </b> Declare and Initialize a Boolean Array."))
var  booleanArray = [    true,false    ]
document.write(("<br>")) 

document.write(("<br><b>Q . 6 :- </b> Declare and Initialize a Mixed Array."))
           var mixedArray =["Yasir",1,2,3,true]
           document.write(("<br>")) 

           document.write(("<br><b>Q . 7 :- </b> Declare and Initialize an Array and Store Available <br> Education Qualifications in Pakistan (e.g. SSC, HSC, BCS, <br> BS, BCOM, MS, M. Phil., PhD). Show the Listed <br> Qualifications in Your Browser Like:"))
           document.write(("<br>"))
   var qualification =["<h1>Qualification: </h1><b> <br> 1) SSC   <br> 2) Hsc <br> 3) BCS <br> 4) BS <br> 5) BCOM <br> 6) MS <br> 7) M.PHIL <br> 8) PHD <br></b>" ]
   document.write ( qualification);
   document.write(("<br>"))

   document.write(("<br><b>Q . 8 :- </b> Write a Program to Store 3 Student Names in an Array.Take <br> Another Array to Store Score of these three Students. <br> Assume that Total Marks are 500 for Each Student, Display <br> the Scores & Percentages of Students Like:<br>"))
   document.write(("<br>"))
     
var studentNames=[ " Yasir   ","Rizwan","  Usama "    ]
var score =[ 320,230,480]
totalMarks =[500]
document.write( "Score of Yasir Rasheed is"  +score [0] +"   Percentage is " + score[0]/totalMarks*100+ "%" 
+ "  <br>Score of Rizwan Bhatti  is"  +score [1] +"    Percentage is " + score[1]/totalMarks*100+ "%" +
" <br>Score of Usama Attari is"  +score [2] +"    Percentage is " + score[2]/totalMarks*100+ "%"   )
document.write(("<br>"))

document.write(("<br><b>Q . 9 :- </b> Initialize an Array with Color Names. Display the Array Elements in your Browser. "))
document.write(("<br>"))
document.write(("<br>"))

document.write(("<b>a.)</b> Ask the user what color he/she wants to add to the <br> beginning & add that color to the beginning of the array. <br> Display the updated array in your browser."))

document.write(("<br>"))

            var array =[  " red ",  "  Black  ",  "  Blue" ]
            var userinp =prompt(" What Color You Wants to Add to the Beginning")
               array.unshift(  userinp   )
 document.write(  "<h3>  <br> This is Update Array " + " :  " +array + "</h3>" )

 document.write(("<br>"))
 document.write(("<br>"))
 document.write(("<b>b.)</b> Ask the User What Color he/she Wants to Add to the End <br> & add that Color to the End of the Array. Display the <br> Updated Array in your Browser."))
  document.write(("<br>"))
  var add =[  " Red "," Black  ","Blue" ]
  var userinp =prompt(" What Color you Wants to Add to the End")
     add.push(  userinp   )
document.write(  "<h3> <br> This is update array " + " :  " +add + "</h3>"  )

document.write(("<br>"))
 document.write(("<br>"))
 document.write(("<b>c.)</b> Add two More Color to the Beginning of the Array. <br> Display the Updated Array in Your Browser."))
  document.write(("<br>"))
  var array =[  " Red "," Black  " ]
  array.unshift( "white" ,"blue" );
document.write(  "<h3> <br> This is Update Array " + " :  " +array + "</h3>"   )
document.write(("<br>"))
 document.write(("<br>"))
 document.write(("<b>d.)</b> Delete the First Color in the Array. Display the Updated <br> Array in Your Browser."))
  document.write(("<br>"))
  var array =[  " Red "," Black  ",  "white ","Blue"]
  array.shift( )
  document.write(  "<h3> <br> This is Update Array " + " :  " +array + "</h3>"  )
  document.write(("<br>"))
  document.write(("<br>"))
  document.write(("<b>e.)</b> Delete the Last Color in the Array. Display the Updated <br> Array in Your Browser."))
   document.write(("<br>"))
   var array =[  " Red "," Black  ",  "white ","Blue"]
      array.pop( )
            document.write(  "<h3><br> This is Update Array " + " :  " +array + "</h3>" )
            document.write(("<br>"))
            document.write(("<br>"))
            document.write(("<b>f.)</b> Ask the User at Which Index He / She Wants to Add a Color <br> & Color Name. Then Add the Color to Desired <br> Position / Index. . Display the Updated Array in Your <br> Browser."))
             document.write(("<br>"))
             var color=["red","white"," blue","black"]
             var  indexName=prompt(" Which Index you Want to Add")
            var  colorName=prompt(" Enter your Add Color      ")
            color.splice( indexName,0,colorName  );
         document.write   (   " <h3> <br>This is Updated Array :  " + color + "<br>  </h3>" );

         document.write(("<br>"))
            document.write(("<br>"))
            document.write(("<b>g.)</b> Ask the User at Which Index He / She Wants to Delete <br> Color(s) & how Many Colors He / She Wants to Delete. Then <br>  Remove the Same Number of Color(s) from User-Defined <br> Position / Index."))
             document.write(("<br>"))
             var color=["red","white"," red","black"]
             var indexdlt=prompt(" Which Index you Want to Delete ");
             var  colordlt=prompt("  How Many you Want to Delete")
                color.splice(indexdlt,colordlt);
document.write(  " <h3> <br>This is Updated Array :  " + color + "<br>  </h3>"  )

document.write(("<br>"))

document.write(("<br><b>Q . 10 :- </b> Write a Program to Store Student Scores in an Array & <br> Sort the Array in Ascending Order Using Array’s Sort <br> Method. "))
document.write(("<br>"))
var score =["320","230","480","120"  ]
document.write(   " <h3> <br> Score of Student :  " + score + "<br>  </h3>"         )
score.sort(     ) 
document.write(    " <h3> Ordered Score of Student :  " +score+ "<br>  </h3>" ) 
document.write(("<br>"))
document.write(("<br><b>Q . 11 :- </b> Write a Program to Initialize an Array with City Names. <br> <b> Copy 3 </b> Array Elements from <b>Cities</b> Array to <b>SelectedCities</b> <br> Array. "))
document.write(("<br>"))
var  cityNames =["karachi","Lahore","Islamabad","Quetta","Peshawar"  ]
document.write( " <h3> Cities List :  " +cityNames+ "<br>  </h3>" )
var selectedCities  =  cityNames.slice( 3,5  )        
document.write(  " <h3> Selected Cities List  :  " +selectedCities+ "<br>  </h3>"   )

document.write(("<br><b>Q . 12 :- </b> Write a Program to Create a Single String from the Below Mentioned Array:"))
document.write(("<br>"))

var array =  ["This","Is","My","Cat"];
var string =  ["This Is My Cat"];
var arr = array.join (   );
document.write(  " <h3> Array  : <br>  " +arr+ "<br>  </h3>"   )
document.write(  " <h3> String  : <br>  " +string+ "<br>  </h3>"   )

document.write(("<br><b>Q . 13 :- </b> Create a New Array. Store Values one by one in Such a way <br>  that you can Access the Values in the Order in Which They <br> Were Stored.<b> (FIFO-First In First Out):</b>"))
document.write(("<br>"))
var del = ["keyboard","mouse","printer","moniter"]
document.write("<h2>Devices :</h2><h3>",del + "</h3>")

dlt= del.shift()
document.write("<h3>out :<br>",dlt +"</h3>")
dlt= del.shift()
document.write("<h3>out :<br>",dlt +"</h3>")
dlt= del.shift()
document.write("<h3>out :<br>",dlt +"</h3>")
dlt= del.shift()
document.write("<h3>out :<br>",dlt +"</h3>")
document.write(("<br><b>Q . 14 :- </b> Create a New Array. Store Values one by one in Such a way <br>  that you can Access the Values in Reverse Order.<b>(Last In First Out):</b>"))
document.write(("<br>"))

var out = ["keyboard","mouse","printer","moniter"]
                document.write("<h2>Devices :</h2><h3>",out + "</h3>")
              
              
                de= out.pop()
                document.write("<h3>out :<br>",de + "</h3>")
                de= out.pop()
                document.write("<h3>out :<br>",de + "</h3>")
                de= out.pop()
                document.write("<h3>out :<br>",de + "</h3>")
                de= out.pop()
                document.write("<h3>out :<br>",de + "</h3>")

document.write(("<br><b>Q . 15 :- </b> Write a Program to Store Phone Manufacturers (Apple, <br> Samsung, Motorola, Nokia, Sony & Haier) in an Array. <br> Display the Following Dropdown/Select Menu in your <br> Browser Using Document.Write() Method:"))
document.write(("<br>"))
var  phoneItems =[  "<br>Apple", " <br>Samsung", "  <br>  Motorola", "<br>  Nokia", "  <br>  Sony & Haier " ]
  document.write(  "<h3> <br> Dropdown menu : <br> " +  phoneItems + "</h3>")
                

