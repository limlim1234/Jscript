var students = []; //값이 없는 배열

//외우기
students.push("김현동"); //뒤에 추가
students.push("김현동"); //뒤에 추가 인덱스값으로 변경가능 그럼 김도은이 없어지고 김현동이 삽입
students[1] = "김도은"; //주소값으로 추가
students.unshift("김다희"); //unshift는 맨 앞에 추가해줌
// students.pop(); 
// students.shift(); 
//순서:김다희 김현동 김도은

//students.splice(1, 0, "이광호"); //잘라내는거 또는 추가 인덱스값1번째를 요놈으로 하겠다
//students.splice(1, 2, "이광호");
//students.splice(1, 2, ""); //삭제됨
students.splice(1, 0, "이광호", "동광희"); //중간에 0이면 추가 3이면 삭제 splice는 값을 추가하거나 삭제한다
for (student of students) {
    console.log(student);
}
console.log("----------")
var newStud = students.slice(1, 3); //새로운 배열을 만들어줌 첫번index값 두번인텍스값 잘라서 새로운 배열 만든다  
//slice는 값을 뽑아오는거랑 비슷
//1은 포함 뒤에 값은 포함아님
for (student of newStud) {
    console.log(student);
}
console.log("----------")
students.sort(); //오름차순
for (student of students) {
    console.log(student);
}
console.log("----------")
var numbers =[4,6,2,9,1,10,100]; //콜백펑션
numbers.sort(function(a,b) {
    console.log(a,b);
return a- b;// 마이너스값=>오름차순 b-a 내림차순정렬
});
for(num of numbers) {
   console.log(num);
}







// console.log(students[0]);                              
// console.log(students[1]); 