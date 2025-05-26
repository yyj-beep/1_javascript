//1)
const name = "ABCDEFGHYJ"
//상수네임 = 문자열

//상수를 활용하기위해서 변수를 만든다
let text = "" //비어진 값을 대입합니다
//
for (const x of name) {
    text += x + "<br>"; //변수개별에 줄바꿈 태그를 더해서
}

//document.write(text)
document.getElementById("one").innerHTML = text;

//2) 세트 : 고유한 값만 출력
const letter = new Set(["a","a","b","c"]);

let txt = "";
for (const q of letter){
    txt += q + "<br>";
}

document.getElementById("two").innerHTML = txt;

//3) 키 와 밸류 => map
const fruits = new Map([
    ["apples", 1000],//[key, value]
    ["banana", 500],
    ["orange", 200]
]);

let nums = fruits.get("orange");
document.getElementById("three").innerHTML = 
" 지금 창고에는 " + nums + " 개의 오렌지 가 있습니다";