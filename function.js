console.log("여기여기");

sum(10, 20); //hoisting
//sum();괄호안에 펑션을 실행하세요

function sum(num1, num2) { //정의 구문
    console.log(num1 + "+" + num2 + "=" + (num1 + num2));
}

function minus(num1, num2) {
    var result = num1 - num2;
    return result; 
}

function concat(str1, str2) {
    return str1 + str2;
}

var numbers = [3,4,2,8,7]; //배열선언
function arySum() {
    var sum = 0;
    for(num of numbers) {
        sum +=num;
    }
    return sum;
}

var mySum = function() {
    var sum = 0;
    for(num of numbers) {
        sum += num;
    }
    return sum;
}

function setBackgroundColor(element) {
    element.style.background = "aqua";
    element.style.color="green";
}

function sumThis() {
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var result = document.getElementById("result");
    result.innerText = num1 + num2;
} 
