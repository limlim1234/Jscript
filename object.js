let p1 = { name: "Hong", age: 30 } //젤 간단한 방법

class Person {
    constructor//생성자
        (name, age) {
        //필드 두개 정의함
        this._name = name;
        this._age = age; //언더바붙이는 이유 private를 의미
    }
    //get 메소드
    get name() {
        return this._name;
    }
    //set 메소드
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age=age;
    }
}

let p2 = new Person("Park", 30);
p2.name = "Choi"
p2.age =25;
console.log(`name: ${p2.name} age: ${p2.age}`);

let p3 = new Person("Kim",22);
//생성자처럼 호출하는 방법
function Student(name, grade, age) {
    this.name = name;
    this.grade = grade;
    this.age = age;
}

let s1 = Studnt("Park",3,10);
let s2 = Studnt("Hong",4,11);
let s3 = Studnt("Hwang",5,12);