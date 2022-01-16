//1. String concatenation
console.log('my' + ' cat');
console.log('1' + 2);
console.log(`string literals : 1 + 2 = ${1 + 2}`);

//2. number poerators
console.log(1 + 1);
console.log(1 - 1);
console.log(1 / 1);
console.log(1 * 1);
console.log(1 % 1);
console.log(1 ** 1);

//3. Increment and decrement operators
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement : ${preIncrement}, counter : ${counter}`);
const postIncrement = counter++;
console.log(`postIncrement : ${postIncrement}, counter : ${counter}`);

const preDecrement = --counter;
console.log(`preDecrement : ${preIncrement}, counter : ${counter}`);
const postDecrement = counter--;
console.log(`postDecrement : ${postIncrement}, counter : ${counter}`);

//4. Assignment operators
let x = 3;
let y = 6;
x += y;
x -= y;
x *= y;
x /= y;


//5. Comparison operators
console.log(10 < 6);
console.log(10 <= 6);
console.log(10 > 6);
console.log(10 >= 6);
console.log(10 == 6);
console.log(10 != 6);


//6. Logical operators
const value1 = false;
const value2 =  4 < 2;

// ||(or)
console.log(`or : ${value1 || value2 || check()}`);

function check() {
    for (let i = 0; i < 3; i++) {
        console.log(i);
    }
    return true;
}

const value3 = true;
const value4 = 4 < 2;

// ||의 경우에는 하나라도 ture면 ture기 때문에 ture를 만나면 그 즉시 true를 반환하고 종료가된다.
// 그러면 뒤에있는 check()함수를 호출하지 않게 되므로 변수 i값이 log에 출력되지 않는 것이다. 
// 이렇듯 시행시간이 걸리는 함수를 호출하는 조건을 조건문에 사용할 경우에는 뒤에 위치시켜서 
// 최대한 실행시간을 빠르게 하는 것이 좋은 코드이다. 
console.log(`or : ${value3 || value4 || check()}`);

function check() {
    for (let i = 0; i < 3; i++) {
        console.log(i);
    }
    return true;
}


// &&(and)

// &&도 하나라도 false가 나오게되면 그 즉시 false를 반환하기 때문에
// 함수같은 조건은 가장 마지막에 배치하는 것이 좋다. 
console.log(`or : ${value1 && value2 && check()}`);

function check() {
    for (let i = 0; i < 3; i++) {
        console.log(i);
    }
    return true;
}


//7. Equality 
const stringFive = '5';
const numberFive = 5;

// == loose equality, with type conversion
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equality, no type conversion
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

console.log("==================");
// object equality by reference 
const ellie1 = { name : 'ellie' };
const ellie2 = { name: 'ellie' };
const ellie3 = ellie1

console.log(ellie1 == ellie2); // reference 값이 다르기 때문에 false
console.log(ellie1 === ellie2); // reference 값이 다르기 때문에 false
console.log(ellie1 === ellie3);


console.log("==================");
// equality - puzzler
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

console.log("==================");
//8. Conditional operators: if
const name = 'ellie';
if (name === 'ellie'){
    console.log('Welcome, Ellie!');
} else if (name === 'coder') {
    console.log('Welcome, coder');
} else {
    console.log('unkwnon');
}

console.log("==================");
//9. Ternry operator : ?
console.log(name === 'ellie' ? 'yes' : 'no');


console.log("==================");
// 10. Switch statement 
const browser = 'Chrome';

switch (browser){
    case 'IE' :
        console.log('go away!');
        break;

    case 'Chrome':
    case 'Firefox':
        console.log('go away!');
        break;
    
    default :
        console.log('same all!');
}


console.log("==================");
// 11. Loops 
let i = 3;
while (i > 0) {
    console.log(`while : ${i}`);
    i--;
}

// do while
do {
    console.log(`do while : ${i}`);
    i--;
} while (i > 0);

// for loop
for (i = 3; i > 0; i--) {
    console.log(`for : ${i}`);
}

for (let j = 3; j > 0; j -= 2) {
    console.log(`inline variable for : ${j}`);
}

// nested loops
for (i = 0; i < 2; i++) {
    for( j = 0; j < 2; j++) {
        console.log(`i : ${i}, j : ${j}`)
    }
}

console.log("===================");
let a = 4;
let b = 3;
console.log(`a ^ b = ${a ^ b}`);
console.log(`~a = ${ ~a }`);