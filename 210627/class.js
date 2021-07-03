// 클래스는 컨테이너, 클래스에는 속성, 메소드처럼 연관있는 것들이 묶여있음
// class { fields, methods... }
// 캡슐화(encapsulation), 다형성, 상속성
// class (template, declare once, no data in), 붕어빵 틀
// object (instance of a class, created many times, data in), 메모리를 차지, 슈크림 붕어빵, 팥 붕어빵

'use strict';

//  1. Class declaration(클래스 선언)
class Person {
  // constructor
  constructor(name, age) { // 생성자
    // fields
    this.name = name; // 만들 object의 name틀(this.name)에 파라미터(name)을 삽입
    this.age = age;
  }

  // methods
  speak() {
    console.log(`${this.name}: hello!`); 
  }
}

const chan = new Person('chan', 25); // object 생성
console.log(chan.name); 
console.log(chan.age);
chan.speak();

// 2. Getter and Setter
class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName; //field
    this.lastName = lastName;
    this.age = age;
  }

  get age() { // get으로 값을 리턴
    return this._age; // this.age로 설정시 생성자에서 get age()를 호출함
  }

  set age(value) { // set으로 값을 설정(value를 설정해야함)
    this._age = value < 0 ? 0 : value;
  }

}

const user1 = new User('Steve', 'job','-1'); // 사용자가 나이 설정을 잘 못할 경우
console.log(user1.age);

// 3. Fields (public, private)
// Too soon !(나온지 얼마 되지 않아 사용 힘듦)
class Experiment { 
  publicField = 2;  // class 외부에서도 사용가능(public)
  #privateField = 0; // class 내부에서만 사용가능(private)
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon !
class Article {
  static publisher = "Chan Coding"; // class 자체에 할당이 됨(object가 아니고)
  constructor(articleNumber) {
    this.articleNumber = articleNumber;
  }

  static printPublisher() {
    console.log(Article.publisher);
  }
}

const article1 = new Article(1);
const article2 = new Article(2);
console.log(Article.publisher); // static이 아니라면, article1.publisher 사용해야함
Article.printPublisher(); // class의 이름으로 함수와 메소드를 호출 해야함

// 5. Inheritance 상속, 다양성
class Shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  } //field

  draw() {
    console.log(`draw ${this.color} color!`);
  } //method

  getArea() {
    return this.width * this.height;
  } //method
}

class Rectangle extends Shape {} // 상속, extends 키워드 사용
const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

class Triangle extends Shape { // 필요한 함수를 설정 가능, 오버라이딩
  draw() {
  super.draw(); // 부모의 draw 호출
  console.log('🍕'); // 본인의 draw
  }
  getArea() {
    return (this.width * this.height) / 2;
  } 
  toString() { // 재정의
    return `Triangle:  color: ${this.color}`;
  }
}
const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

// 6. Class checking: instanceOf (boolean 값 리턴, 클래스의 인스턴스가 맞는지 확인)
console.log(rectangle instanceof Rectangle);  // true
console.log(triangle instanceof Rectangle);   // false
console.log(triangle instanceof Triangle);    // true
console.log(triangle instanceof Shape);       // true
console.log(triangle instanceof Object);      // true(모든 object, class는 Object에서 상속됨)
console.log(triangle.toString()); // 기본 object에 있는 메소드지만 재정의 가능