'use strict';
//객체지향 프로그래밍 
// 클래스 : 템플릿
// 객체 : 클레스로부터 인스턴스화 한 것

// 1. Class declarations
class Person {
    //constructor
    constructor(name, age) {
        //fields
        this.name = name;
        this.age = age;
    }

    //method
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const jongin = new Person('jongin', 20);
console.log(jongin.name);
console.log(jongin.age);
jongin.speak();


console.log("===========================");
//2. Getter and Setter 
class User {    
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    //get 과 set을 사용할 때에는 변수명에 "_"같이 다른 변수명으로 해주는 것이 좋다. 
    //그렇지 않으면 계속 자기자신을 불러오기 때문에 call stack size 오류가 난다. 
    get age() {
        return this._age;
    }
    
    set age(value) {
        // if(value < 0) {
        //     throw Error('age con not be negative');
        // }

        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('choi', 'jongin', 20);
console.log(user1.firstName);
console.log(user1.lastName);
console.log(user1.age);

console.log("===========================");
//3. Fields (public, private)
// 아직 지원하지 않는 브러우저가 많음 
class Experiment {
    publicField = 2;
    #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);


console.log("===========================");
// static properties and methods
class Article { 
    static publisher = 'fun Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const a1 = new Article(1);
console.log(a1.publisher);
console.log(Article.publisher);
Article.printPublisher();


console.log("===========================");
//5.Inheritance
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color!`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    getArea(){
        return (this.width * this.height)/2;
    }
}

const rectangle = new Rectangle(20, 20, 'blue');
console.log(rectangle.width);
rectangle.draw();
console.log(rectangle.getArea());
const triangle = new Triangle(20, 20, 'red');
console.log(triangle.width);
triangle.draw();
console.log(triangle.getArea());


console.log("===========================");
//6. Class checking :instanceOf
// 자바스크립트의 모든 오브젝트는 Object에 속한다. 
console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(rectangle instanceof Triangle);
console.log(triangle instanceof Triangle);
console.log(rectangle instanceof Shape);
console.log(rectangle instanceof Object);