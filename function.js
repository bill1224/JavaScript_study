// Function 


// 1.Function declaration
//function name(param1, param2) { body ... return; }
// function은 object이다 (변수로 선언가능하고, 리턴이나 파라미터로도 사용가능하다)

function printHello() {
    console.log('Hello');
}

printHello();

//JS는 타입을 선언하지 않기 때문에, 난해할 수 있다. 
//TypeScript같은걸 사용하게되면, 타입을 선언해야되때문에 큰 프로젝트를 할때에는 이런 것을 사용
function log(message) {
    console.log(message);
}

log('Hello@');
log(1234);

console.log("=====================");
// 2. Parameters
function changeName(obj) {
    obj.name = 'coder';
}

const ellie = { name : 'ellie' };
changeName(ellie);
console.log(ellie);

console.log("=====================");
// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown'){
    console.log(`${message} by ${from}`);
}

showMessage('Hi!');

console.log("=====================");
// 4. Rest parameters
// 파라미터를 배열로 받는다. 
function printAll(...args) {
    for (let i = 0; i < args.length; i++){
        console.log(args[i]);
    }

    // for (const arg of args){
    //     console.log(arg);
    // }

    // args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'ellie');

console.log("=====================");
// 5. Local scope
let globalMessage = 'global'; //global variable
function printMessage() {
    let message = 'hello';
    console.log(message);
    console.log(globalMessage);

    function printAnother() {
        console.log(message);
        let childMessage = 'child hello';
        console.log(childMessage);
    }
    // console.log(childMessage);
}

printMessage();


console.log("=====================");
//6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2);
console.log(`sum : ${result}`);


console.log("=====================");
//7. Early return , early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        //long upgrade logic ...
    }
}

//good
function upgradeUser(user) {
    if (user.point < 10) {
        return;
    }
    //long upgrade logic ...
}

console.log("=====================");
// First-class function 
// 함수는 변수로도, 파라미터 리턴 값으로 사용가능하다. 
// function 선언과 fucntion expression의 차이는 선언하는 방식은 선언전에 함수를 호출해도 실행이됨 

const print = function () { //anonymous function 
    console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));


console.log("=====================");
// 2. Callback function using function expression
// 조건에 맞춰서 콜백 함수를 호출하도록 하는 것
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you'){
        printYes();
    } else {
        printNo();
    }
}

const printYes = function() {
    console.log('Yes');
}

const printNo = function print() {
    console.log('no!');
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

console.log("=====================");
//Arrow function
//함수를 간결하게 해주는 것 
//항상 함수의 이름이 없는 어나니머스 함수다

const simplePrint = () => console.log('simplePrint!');
// const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
    //do something more

    // {]으로 처리한 경우에는 return이 필요함
    return a * b;
};

console.log("=====================");
// IIFE : immediately invoked function Expression
(function hello() {
    console.log('IIFE');
})();

console.log("=====================");
// Quiz 
//function calculate(command, a, b)
// command: add, substract, divide, multiply, remainder 

// const checkCommand = ['add', 'substract', 'divide', 'multiply'];

function calculate(command, a, b) {
    let result;
    console.log('계산기 작동');
    
    if (command == 'add'){
        result = add(a, b);        
    } else if(command == 'divide'){
        result = divide(a, b);
    } else if(command == 'substract'){
        result = substract(a, b);
    } else if(command == 'multiply'){
        result = simpleMultiply(a, b);
    } else {
        console.log("올바른 명령어를 입력해주세요. ex) 'add', 'substract', 'divide', 'multiply'");
        return;
    }

    return result;
}

function add (a, b) {
    return a + b;
}

function substract(a, b) {
    return a - b;
}

function divide(a, b) {
    return a / b;
}

function multiply(a, b) {
    return a * b;
}

console.log(calculate('add', 2, 3));