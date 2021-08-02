// Write a Javascript program that accept two integer and compare them
function compare2num(){
    var num1 = parseInt(prompt("Enter your 1st number"));
    var num2 = parseInt(prompt("Enter your 2nd number"));
    if (num1 > num2) {
        var result = "Number1 is greater than Number2";
    }
    else if (num2 > num1) {
        var result = "Number2 is greater than Number1";
        }
    else {
        var result =" Both numbers are same";
    }
    var x = document.getElementsByClassName("ur_num");
    x[0].innerHTML = "Number1 is: " + "<b>" + num1 + "</b>"  + " and " + " Number2 is: " + "<b>" + num2 + "</b>"  + "<br>" ; 
    var y = document.getElementById("test1");
    y.innerHTML = " So " + result;
}

// Write a JavaScript conditional statement to find the sign of product of three numbers.

function sign(){
    var a = parseInt(prompt("Enter your 1st integer"));
    var b = parseInt(prompt("Enter your 2nd integer"));
    var c = parseInt(prompt("Enter your 3rd integer"));
    if (a > 0 && b > 0 && c > 0) {
       var sign = "The sign of product of three numbers is: + ";
    } 
    else if(a < 0 && b < 0 && c > 0) {
       var sign = "The sign of product of three numbers is: + ";
    }
    else if(a > 0 && b > 0 && c < 0) {
       var sign = "The sign of product of three numbers is: - ";
    }
    else if(a < 0 && b < 0 && c < 0) {
       var sign = "The sign of product of three numbers is: - ";
    }
    else if(a > 0 && b < 0 && c < 0) {
       var sign = "The sign of product of three numbers is: + ";
    }
    else if(a > 0 && b < 0 && c > 0) {
       var sign = "The sign of product of three numbers is: - ";
    }
    else if(a < 0 && b > 0 && c < 0) {
       var sign = "The sign of product of three numbers is: + ";
    }
    else{
       var sign = "The sign of product of three numbers is: - "
    }

    var elem = document.getElementsByClassName("product");
    elem[0].innerHTML = "your 1st number is " + a  + " , 2nd number is " + b + " and 3rd number is " + c;
    document.getElementById("test2").innerHTML = sign;
}

// Write a JavaScript conditional statement to sort five numbers.

function sortNum(){
    var sortNum1 = parseInt(prompt("Enter 1st number:"));
    var sortNum2 = parseInt(prompt("Enter 2nd number:"));
    var sortNum3 = parseInt(prompt("Enter 3rd number:"));
    var sortNum4 = parseInt(prompt("Enter 4th number:"));
    var sortNum5 = parseInt(prompt("Enter 5th number:"));
    var arry =[];
    arry[0] = sortNum1;
    arry[1] = sortNum2;
    arry[2] = sortNum3;
    arry[3] = sortNum4;
    arry[4] = sortNum5;
    var arr = document.getElementsByClassName('sort');
    arr[0].innerHTML = " your number list : " + arry;
    arry.sort(function (a,b){
       return a - b;
    });
    document.getElementById("ascending").innerHTML = "Ascending order : " + arry + "<br>";
    arry.reverse()
    document.getElementById("descending").innerHTML = "Descending order : " + arry;
    
}


