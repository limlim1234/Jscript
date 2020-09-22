var sum = 0;
function aryFunc() {  //펑션으로 묶기
    var numbers=[45, 28, 22,10,55];
 
    sum = 0; //이걸 안 하면 누르면 증가하니까 초기값을 지어준다


//var numbers=[45, 28, 22,10,55];                                    펑션하고 콜백펑션 호출



// numbers.forEach(function(val,idx,ary) { //실제값, 인덱스값, 
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
