var sum = 0;
function aryFunc() {  //펑션으로 묶기
    var numbers=[45, 28, 22,10,55];
 
    sum = 0; //이걸 안 하면 누르면 증가하니까 초기값을 지어준다


//var numbers=[45, 28, 22,10,55];                                    펑션하고 콜백펑션 호출



// numbers.forEach(function(val,idx,ary) { //실제값, 인덱스값, 배열 그 자체
//     console.log(val,idx,ary);
//     sum +=val;
// });

numbers.forEach(callBackFunc); //콜백값을 매개값으로 넣어주면 됨
//익명의 함수

console.log(sum);
document.getElementById("ary").innerHTML=sum;
}
function callBackFunc(v,i,a) {
    sum += v;
}
var num1 = 10;
var num1 = "hello";
console.log(num1);

// let num2 = 10;
// let num2 = "hello"
// console.log(num2);

const num3 = 10;

let p1= {
    name: "Hong",
    age: 20
}
let p2= {
    name: "Park",
    age: 25
}
let p3 = {
    name: "Choi",
    age: 30
}
//오브젝트
let persons = [p1,p2,p3];
persons.forEach(function(a,b,c) { //포이치는각각의 요소들을 실행하겠다 
//console.log(a,b,c);
console.log(a.name + ", " + a.age);
});


persons.sort(function(a,b) {
    return a.age - b.age; //오름차순정렬 b-a는 내림차순
});

//이름순 최홍박
persons.sort(function(a,b) {
    if(a.name<b.name) return -1;
    else return 1;
 
});

persons.forEach((a,b,c) => {
console.log(`value : ${a.name}, age: ${a.age},index: ${b}`);
});






numbers=[45, 38, 66, 92, 18, 100];
// numbers.sort(function() {
//     return a-b; //음수값은 오름차순 양수값은 내림차순  이런식으로하면 내림차순 오름차순
// }); //sort는 정렬 
// numbers.forEach(function(a) {
//     console.log(a);
   
// })
//최솟값 가져오기
numbers.sort(function(a,b) {
    return a-b;
});
console.log("--------------");
console.log(numbers[0]); //첫번째요소를 가져오면

//최댓값
// numbers.sort(function(a,b) {
//     return b-a;
// });
// console.log(numbers[0]);//첫번째요소를 가져오면
// console.log("--------------"); 
//새로운 배열 맵
let newNum = numbers.map(function(a,b,c) {
    console.log(`a: ${a}, b: ${b}, c: ${c}`); //$가 값을 가져오는거
    return a*b;
});

//맵은 결과값을 반환해줌
console.log(newNum);
console.log("--------------"); 
//필터
let theNew = newNum.filter(function(a,b,c){
    return a >0;
});

console.log(theNew);
console.log("--------------"); 
//38,90,198,368,500
//리듀스
let anotherNew = theNew.reduce((a,b,c) => { //reduce만 c가 인덱스이다
    console.log(`a: ${a}, b: ${b}, c: ${c}`);  //언디파인나오는 이유는 
    return (a + b) / 2; //평균구하는거
}, 0 ); //0이 나오는 이유는 초기값설정
console.log(anotherNew);

console.log("--------------"); 
let anotherNew1 = theNew.reduce((a,b,c) => {
    console.log(`a: ${a}, b: ${b}, c: ${c}`); 
    return (a > b)  ? a:b;
}, 0 );
console.log(anotherNew1);
