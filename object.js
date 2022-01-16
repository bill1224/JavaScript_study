'use strict';

// 1. Literals and properties 
function print(person) {
    console.log(person.name);
    console.log(person.age);
}

const jongin = {name:'jongin', age:4};
print(jongin);

jongin.hasJop = false;
console.log(jongin.hasJop);

delete jongin.hasJob;
console.log(jongin.hasJob);

console.log("===================");
// 2. Computed properties
console.log(jongin.name);
console.log(jongin['name']);
jongin['hasJob'] = false;
console.log(jongin.hasJob);

console.log("===================");
// 3. property value shorthand 
const person1 = { name:"jongin", age:5};
const person2 = { name:"leema", age:5};
const person3 = new Person("jaeho", 5);
console.log(person3.name);

//4. Constructor Function
function Person(name, age){
    //this = {}
    this.name = name;
    this.age = age;
    //return this;
}

console.log("===================");
//5.in operator
console.log('age' in jongin);
console.log('name' in jongin);
console.log('job' in jongin);


console.log("===================");
// 6. for... in  vs for ... of 
// console.clear() // 전에 log값들 지우기 

for (const key in jongin) {
    console.log(key);
}

console.log("===================");
const array = [1, 2, 3 ,4];

for (const value of array) {
    console.log(value);
}

console.log("===================");
//7. Fun cloning
const car = { color : "blue", price : 5000};
const car2 = car;
console.log(car2);

console.log("===================");
//old way
const car3 = {};
for (const key in car){
    car3[key] = car[key];
}
console.log(car3);

console.log("===================");``
//new way , Object assign
const car4 = Object.assign({}, car);
console.log(car4);


console.log("===================");
// another ex 
//Object.assign는 여러 Object가 파라미터로 들어오면 겹치는 Key값이 존재하면, 
//뒤에 위치하는 key값으로 덮어씌우고, 새로운 key값은 추가한다. 
const fruit1 = {color : "red"};
const fruit2 = { color: "red" , size: 'big' };
const mixed = Object.assign({}, fruit1, fruit2, car);
console.log(mixed);