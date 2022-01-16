// JavaScript 는 매우 유연한 언어
//반대로 위험할 수 있음 (개발자가 많은 실수를 할 수있음)
//선언되지 않은 변수에 값을 설정한다던지 
// use strict를 사용하게되면 여러 문제가 있는 코드가 실행이 안되도록 막아준다.
// 또 한 좀더 빠르고 효율적으로 실행이되도록 해줘서 성능 향상의 효과도 있다. 
'use strict';

// 2. Variable
// let (added in ES6)

// { } 밖에서 선언된 변수는 어디서든 사용가능하다 (글로벌변수)
let globalName = 'global name';
// { } 안에서 선언된 변수는 {} 밖에서는 사용 불가능 (지역번수)
{
    let name = 'ellie';
    console.log(name);
    name = 'hello';
    console.log(name);
    console.log(globalName);
}

console.log(globalName);
console.log(name);

// var (사용하면 안된다!!!!!!!!)
// var hoisting (선언 위치에 상관없이 맨위로 올려준다)
// 아래처럼 순서를 무시하고 변수 선언
// { } 안에 var로 변수를 선언해도 밖에서 접근이 가능함 
console.log(age);
age = 4;
var age;

// 3. Constants (변수의 값을 변경할 수 없음)
// 보안에 좋다 (security)
// 쓰레드에서는 동시에 변수에 접근할 수 있기 때문에  thread safety
// 사람들의 실수를 줄일 수 있음
const daysInWeek = 7;
const maxNumber = 5;

// 4.Variable types
// number , string, boolean, null, undefiedn, symbol
// object, box container
// function, first-class function (함수를 파라미터로 사용할 수 있고, 리턴에도 함수를 사용할 수 있다.)

const count = 17;
const size = 17.1;
console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

// infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// String
const char = 'c';
const brendan = 'brendan';
const greeting = 'hello ' + brendan;
console.log(`value : ${greeting}, type : ${typeof greeting}`);
const helloBob = `hi ${brendan}!`; //template literals (string)
console.log(`value : ${helloBob}, type : ${typeof helloBob}`);
console.log('value :' + helloBob + ', type :' + typeof helloBob);

//boolean
//false : 0, null, undefined, NaN, ''
//true: any other value
const canRead = true;
const test = 3 < 1; 
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test} , type : ${typeof test}`);

//null 
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);

//undefined


//symbol, create unique identifiers for objects
//고유한 식별자를 만들때 사용한다. 
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2);
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2);
console.log(`value : ${symbol1.description}, type: ${typeof symbol1}`);


// 5. 다이나믹 타이핑( Dynamic typing)
// 변수 선언시에 타입을 정해줄 필요가없다. 실행중에 자동으로 
let text = 'hello';
console.log(`value : ${text} , type : ${typeof text}`);
console.log(text.charAt(0));
text = 1;
console.log(`value : ${text} , type : ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text} , type : ${typeof text}`);
text = '8' / '2';
console.log(`value : ${text} , type : ${typeof text}`);
//console.log(text.charAt(0)); 에러가 난다. text의 타입이 number로 바꼈기 때문에 


// object, real-life object, data structure 
const ellie = {name: 'ellie', age: 20};
// ellie 오브젝트는 const로 변경하는 것이 불가능하지만, ellie안에있는 name과 age의 변수는 변경할 수 있다. 
ellie.age = 21;
console.log(`value : ${ellie}, type : ${typeof ellie}`);
console.log(`value : ${ellie.name}, type : ${typeof ellie.name}`);
console.log(`value : ${ellie.age}, type : ${typeof ellie.age}`);