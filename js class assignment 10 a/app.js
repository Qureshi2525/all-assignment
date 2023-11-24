document.write("<center><h1>Yasir Rasheed CCO-118488 یاسر رشید </h1></center>")
document.write("<center><h1> ASSIGNMENT 10 (PATTERNS)</h1></center>")
document.write(("<hr>"))
document.write(("<marquee><b>YASIR RASHEED QURESHI WEB AND AAP CCO - 118488 TEACHER SIR RIZWAN BHATTI. JAVA SCRIPT ASSIGNMENT 10A (PATTERNS)</b></marquee>"))
document.write(("<hr>"))
document.write(("<h1><b>Q . 1 :- </h1><b> Write a program  To Display Each of the Following Patterns.</b><br>"))
document.write(("<br>"))

// 1
document.write(`<u>(i)</u>`)
document.write(`<br>`)
document.write(`<br>`)
for ( var a = 5; a > 0; a--){
    for ( var b = a; b > 0; b--){
        document.write(`&nbsp;&nbsp;*&nbsp;&nbsp;`)
    }
    document.write(`<br>`)
    document.write(`<br>`)
}

// 2
document.write(`<u>(ii)</u>`)
document.write(`<br>`)
document.write(`<br>`)
for ( var a = 1; a <= 5; a++){
    for ( var b = 1; b<=a; b++){
        document.write (`&nbsp;&nbsp;${a}&nbsp;&nbsp;`)
    }
    document.write(`<br>`)
    document.write(`<br>`)
}

//3
document.write(`<u>(iii)</u>`)
document.write(`<br>`)
document.write(`<br>`)
for ( var a = 1; a <=5; a++){
    for ( var b = 1; b <= 5; b++){
        if (a==1 && b==5) {
            document.write (`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;`)
        }
        else if (a==1 && b<5) {
            document.write (`&nbsp;&nbsp; &nbsp;`)
        }
        else if (a==2 && b==5) {
            document.write (`&nbsp;&nbsp;2&nbsp;`)
        }
        else if (a==2 && b==4) {
            document.write (`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;`)
        }
        else if (a==2 && b<4) {
            document.write (`&nbsp;&nbsp; &nbsp;`)
        }
        else if (a==3 && b==5) {
            document.write (`&nbsp;&nbsp;3&nbsp;`)
        }
        else if (a==3 && b==4) {
            document.write (`&nbsp;&nbsp;2&nbsp;`)
        }
        else if (a==3 && b==3) {
            document.write (`&nbsp;&nbsp;&nbsp;&nbsp;1&nbsp;`)
        }
        else if (a==3 && b<3) {
            document.write (`&nbsp;&nbsp; &nbsp;`)
        }
        else if (a==4 && b==5) {
            document.write (`&nbsp;&nbsp;4&nbsp;`)
        }
        else if (a==4 && b==4) {
            document.write (`&nbsp;&nbsp;3&nbsp;`)
        }
        else if (a==4 && b==3) {
            document.write (`&nbsp;&nbsp;2&nbsp;`)
        }
        else if (a==4 && b==2) {
            document.write (`&nbsp;&nbsp;&nbsp;1&nbsp;`)
        }
        else if (a==4 && b<2) {
            document.write (`&nbsp;&nbsp; &nbsp;`)
        }
        else if (a==5 && b==5) {
            document.write (`&nbsp;&nbsp;5&nbsp;`)
        }
        else if (a==5 && b==4) {
            document.write (`&nbsp;&nbsp;4&nbsp;`)
        }
        else if (a==5 && b==3) {
            document.write (`&nbsp;&nbsp;3&nbsp;`)
        }
        else if (a==5 && b==2) {
            document.write (`&nbsp;&nbsp;2&nbsp;`)
        }
        else if (a==5 && b==1) {
            document.write (`&nbsp;&nbsp;1&nbsp;`)
        }
    }
    document.write (`<br>`)
    document.write (`<br>`)
}

//4
document.write(`<u>(iv)</u>`)
document.write(`<br>`)
document.write(`<br>`)
for ( var a = 1; a <=5; a++){
    for ( var b = 1; b <= a; b++){
        if (b==1) {
            document.write (`&nbsp;&nbsp;A&nbsp;`)
        }
        else if (b==2) {
            document.write (`&nbsp;&nbsp;B&nbsp;`)
        }
        else if (b==3) {
            document.write (`&nbsp;&nbsp;C&nbsp;`)
        }
        else if (b==4) {
            document.write (`&nbsp;&nbsp;D&nbsp;`)
        }
        else document.write (`&nbsp;&nbsp;E&nbsp;`)
    }
    document.write (`<br>`)
    document.write (`<br>`)
}

document.write (`<center>`)
//5
document.write(`<u>(v)</u>`)
document.write (`<br>`)
document.write (`<br>`)
for ( var a = 1; a <= 9; a+=2){
    if (a==1) {
            for ( var b = 1; b <= a; b++){
                document.write (`*&nbsp;&nbsp;`)
            }
    }
    else if (a==3) {
        for ( var b = 1; b <= a; b++){
            document.write (`*&nbsp;&nbsp;`)
        }
    }
    else if (a==5) {
        for ( var b = 1; b <= a; b++){
            document.write (`*&nbsp;&nbsp;`)
        }
    }
    else if (a==7) {
        for ( var b = 1; b <= a; b++){
            document.write (`*&nbsp;&nbsp;`)
        }
    }
    else if (a==9) {
        for ( var b = 1; b <= a; b++){
            document.write (`*&nbsp;&nbsp;`)
        }
    }
    document.write (`<br>`)
    document.write (`<br>`)
}

//6
document.write(`<u>(vi)</u>`)
document.write (`<br>`)
document.write (`<br>`)
for ( var a = 9; a >= 1; a-=2){
    if (a==9) {
            for ( var b = 1; b <= 9; b++){
                document.write (`*&nbsp;&nbsp;`)
            }
    }
    else if (a==7) {
        for ( var b = 1; b <= a; b++){
            document.write (`*&nbsp;&nbsp;`)
        }
    }
    else if (a==5) {
        for ( var b = 1; b <= a; b++){
            document.write (`*&nbsp;&nbsp;`)
        }
    }
    else if (a==3) {
        for ( var b = 1; b <= a; b++){
            document.write (`*&nbsp;&nbsp;`)
        }
    }
    else if (a==1) {
        for ( var b = 1; b <= a; b++){
            document.write (`*&nbsp;&nbsp;`)
        }
    }
    document.write (`<br>`)
    document.write (`<br>`)
}

//7
document.write(`<u>(vii)</u>`)
document.write (`<br>`)
document.write (`<br>`)
for ( var a = 1; a <= 9; a+=2){
    if (a==1) {
            for ( var b = 1; b <= a; b++){
                document.write (`${b}&nbsp;&nbsp;`)
            }
    }
    else if (a==3) {
        for ( var b = 1; b <= a; b++){
            if (a==3 && b==3) {
                document.write (`${b-2}&nbsp;&nbsp;`)
            }
            else document.write (`${b}&nbsp;&nbsp;`)
        }
    }
    else if (a==5) {
        for ( var b = 1; b <= a; b++){
            if (a==5 && b==4) {
                document.write (`${b-2}&nbsp;&nbsp;`)
            }
            else if (a==5 && b==5) {
                document.write (`${b-4}&nbsp;&nbsp;`)
            }
            else document.write (`${b}&nbsp;&nbsp;`)
        }
    }
    else if (a==7) {
        for ( var b = 1; b <= a; b++){
            if (a==7 && b==5) {
                document.write (`${b-2}&nbsp;&nbsp;`)
            }
            else if (a==7 && b==6) {
                document.write (`${b-4}&nbsp;&nbsp;`)
            }
            else if (a==7 && b==7) {
                document.write (`${b-6}&nbsp;&nbsp;`)
            }
            else document.write (`${b}&nbsp;&nbsp;`)
        }
    }
    else if (a==9) {
        for ( var b = 1; b <= a; b++){
            if (a==9 && b==6) {
                document.write (`${b-2}&nbsp;&nbsp;`)
            }
            else if (a==9 && b==7) {
                document.write (`${b-4}&nbsp;&nbsp;`)
            }
            else if (a==9 && b==8) {
                document.write (`${b-6}&nbsp;&nbsp;`)
            }
            else if (a==9 && b==9) {
                document.write (`${b-8}&nbsp;&nbsp;`)
            }
            else document.write (`${b}&nbsp;&nbsp;`)
        }
    }
    document.write (`<br>`)
    document.write (`<br>`)
}

//8
document.write(`<u>(viii)</u>`)
document.write (`<br>`)
document.write (`<br>`)
for ( var a = 1; a <= 6; a++){
    for ( var b = 6; b >= a; b--){
        if (b==1) {
            document.write (`F&nbsp;&nbsp;`)
        }
        else if (b==2) {
            document.write (`E&nbsp;&nbsp;`)
        }
        else if (b==3) {
            document.write (`D&nbsp;&nbsp;`)
        }
        else if (b==4) {
            document.write (`C&nbsp;&nbsp;`)
        }
        else if (b==5) {
            document.write (`B&nbsp;&nbsp;`)
        }
        else document.write (`A&nbsp;&nbsp;`)
    }
    document.write (`<br>`)
    document.write (`<br>`)
}
document.write (`</center>`)

//9
document.write(`<u>(ix)</u>`)
document.write (`<br>`)
document.write (`<br>`)
for ( var a = 1; a <= 5; a++){
    for ( var b = 1; b <= 5; b++){
            if (a==1 && b==1) {
                document.write (`&nbsp;&nbsp;${b}&nbsp;&nbsp;`)
            }
            else if (a==1 && b>1) {
                document.write (`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`)
            }
            else if (a==2 && b==1 || b==2 || b==3 ) {
                document.write (`&nbsp;&nbsp;${b}&nbsp;&nbsp;`)
            }
            else if (a==2 && b>3) {
                document.write (`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`)
            }
            else if (a==3) {
                document.write (`&nbsp;&nbsp;${b}&nbsp;&nbsp;`)
            }
            else if (a==4 && b==1 || b==2 || b==3 ) {
                document.write (`&nbsp;&nbsp;${b}&nbsp;&nbsp;`)
            }
            else if (a==4 && b>3) {
                document.write (`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`)
            }
            else if (a==5 && b==1) {
                document.write (`&nbsp;&nbsp;${b}&nbsp;&nbsp;`)
            }
            else if (a==5 && b>1) {
                document.write (`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`)
            }
        }
        document.write (`<br>`)
        document.write (`<br>`)
    }
    
    //10
    document.write(`<u>(x)</u>`)
    document.write (`<br>`)
    document.write (`<br>`)
    for (var a = 1; a <= 4; a++){
        for ( var b = 1; b <= 7; b++){
            if (a==2 && b==4) {
                document.write (`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`)
            }
            else if (a==3 && (b==3 || b==4 || b==5)) {
                document.write (`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`)
            }
            else if (a==4 && (b==2 || b==3 || b==4 || b==5 || b==6)) {
                document.write (`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`)
            }
            else document.write (`&nbsp;&nbsp;&nbsp;*`)
        }
        document.write (`<br>`)
        document.write (`<br>`)
    }
    
    //11
    document.write(`<u>(xi)</u>`)
    document.write (`<br>`)
    document.write (`<br>`)
    for ( var a = 1; a <= 6; a++){
        for ( var b = 1; b <= 6; b++){
            if (a==2 && b!=5 || a==3 && b!=4 || a==4 && b!=3 || a==5 && b!=2) {
                document.write (`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`)
            }
            else document.write (`&nbsp;&nbsp;&nbsp;*`)
        }
        document.write (`<br>`)
        document.write (`<br>`)
    }
    
    //12
    document.write(`<u>(xii)</u>`)
    document.write (`<br>`)
    document.write (`<br>`)
    for ( var a = 1; a <= 5; a++){
        for ( var b = 1; b <= 5; b++){
            if ((a==2 || a==3 || a==4) && (b!=1 && b!=5)) {
                document.write (`&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;`)
            }
            else document.write (`&nbsp;&nbsp;&nbsp;*`)
        }
        document.write (`<br>`)
        document.write (`<br>`)
    }
    document.write (`<br>`)
    document.write(("<hr>"))
    document.write(("<marquee><b>YASIR RASHEED QURESHI WEB AND AAP CCO - 118488 TEACHER SIR RIZWAN BHATTI. JAVA SCRIPT ASSIGNMENT 10A (PATTERNS)</b></marquee>"))
    document.write(("<hr>"))

 
