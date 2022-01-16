'use strict';

//1 . Declaration 
const arr1 = new Array();
const arr2 = [1, 2];

console.log("==================");
//2. Index position
const fruits = ['사과', '바나나'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length]);

console.log("==================");
// 3. looping
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("==================");
for (let fruit of fruits) {
    console.log(fruit);
}

console.log("==================");
//c. forEach
fruits.forEach(function (fruit, index, array) {
    console.log(fruit);
})

// => 함수를 이용해서 이름없는 function 을 아래와 같이 바꿔 줄 수 있다. 
fruits.forEach((fruit, index) =>  console.log(fruit, index));


console.log("==================");
// 4. addtion, deletion, copy
//push 배열 맨뒤에 원소 추가
fruits.push('딸기', '복숭아');
console.log(fruits);

//pop 배열 맨뒤의 원소부터 하나씩 제거 
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift 배열의 맨 앞에 원소 추가
fruits.unshift('딸기', '복숭아');
console.log(fruits);

//shift 배열의 맨 앞에 원소부터 제거 
fruits.shift();
fruits.shift();
console.log(fruits);

//push, pop, unshift, shift의 차이점 
//push와 pop 배열의 맨뒤에 넣고 빼는 것이기 때문에 처리과정이 빠르다 (다른 원소를 건드리지 않기 때문)
//shift와 unshift는 맨앞에 추가하거나 빼기 위해서는 다른 원소의 위치를 변화시켜야 하기 때문에 처리 과정이 느리다.

//splice 원하는 위치의 원소 제거
fruits.push('딸기', '복숭아', '레몬');
console.log(fruits);
fruits.splice(3, 2); // splice (지우고 싶은 인덱스 위치, 지울 원소 갯수)
console.log(fruits);
fruits.splice(1, 1, '수박', '체리'); // 새롭게 추가하고 싶은 원소도 넣을 수 있다. 
console.log(fruits);

// combin two arrays
const fruits2 = ['키위', '망고'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5.Searching
//indexOf 해당 원소의 위치를 알려준다.
console.clear();
console.log(fruits);
console.log(fruits.indexOf('사과'));
console.log(fruits.indexOf('코코넛'));

//includes 해당 원소의 존재 여부를 알려준다. 
console.log(fruits.includes('사과'));
console.log(fruits.includes('코코넛'));

// lastIndexOf 중복되는 원소가 있을경우 가장 뒤에있는 원소의 위치 
console.clear();
console.log(fruits);
fruits.push('사과');
console.log(fruits.indexOf('사과'));
console.log(fruits.lastIndexOf('사과'));
