'use strict';

//JavaScript is synchronous.
// hoisting : var, function declaration 등의 선언이 자동적으로 맨위에 선언되는 것 
console.log('1');
//우리가 전달해준 함수를 나중에 불러줘 
setTimeout(() => console.log('2'), 1000);
console.log('3');

//synchronous callback
function printImmediately(print) {
    print();
}

// function printImmediately(print) {
//     print();
// }
printImmediately(() => console.log('hello'));

// Asynchronous callback
function printWithDelay(print, timeout) {
    setTimeout(print, timeout);
}

printWithDelay(()=> console.log('async callback'), 2000);

//Callback hell example
class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'jongin' && password === 'coding') ||
                (id === 'coder' && password === 'academy')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user = 'jongin') {
                onSuccess({ name: 'jongin', role: 'admin'});
            } else {
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id,
    password,  
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(
                    `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error);
    }
);