//1) 거듭제곱 
let x = 10;
x **= 5; 
//2) 나눈 나머지는 
let q = 10;
q %= 5;

document.getElementById("one").innerHTML =
" 1)번 거듭제곱에 값 " + x + "<br/>" +
" 2)번 나눈 나머지에 값은 " + q + "<br/>"

let num1 = 1;
let num2 = "1";
let result = num1 == num2;
let result2 = num1 === num2;
let num3 = 10;
let num4 = 3;
let result3 = num4 > num3 

document.getElementById("two").innerHTML =
" 타입을 고려하지 않은 같음에 결과 값은 " + result + "<br/>" +
" 타입까지 고려하여 엄격하게 같음 " + result2 + "<br/>" +
" 변수에 수를 비교할때 " + result3 + "<br/>"

//3) 논리연산자
let w = 6;
let e = 3;

document.getElementById("three").innerHTML =
" &&는 and그리고 여서 두개의 조건이 일치해야 됩니다 " +
"(w < 10 && e > 1) 는 " + (w < 10 && e > 1) + " 입니다" + 
"(w < 10 && e < 1) 는 " + (w < 10 && e < 1) + " 입니다" +
"(w == 10 && e == 1) 는 " + (w == 10 && e == 1) + " 입니다"+
"(w == 6 && e == 1) 는 " + (w == 6 && e == 1) + " 입니다"+
"!(w === e) 는 " + !(w === e) + " 입니다"+
"!(w > e )는 " + !(w > e ) + "입니다";