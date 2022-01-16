class UserStorage {
    loginUser(id, password, onSuccess, onError) {
        setTimeout(() => {
            if (
                (id === 'jongin' && password === 'code')
            ) {
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        }, 2000);
    }

    getRoles(user, onSuccess, onError) {
        setTimeout(() => {
            if (user === 'jongin') {
                onSuccess({ name: 'jongin', role: 'admin'});
            } else {
                onError(new Error('not access'));
            }
        }, 1000);        
    }
}

let userStorage = new UserStorage();
let id = prompt('user id');
let password = prompt('password');
userStorage.loginUser(id, password, (id) => {
    userStorage.getRoles(id, (userInfo) => {
        alert(`name: ${userInfo.name}, role: ${userInfo.role}`);
    }, (error) => {
        alert(error);
    })
}, (error) => {
    alert(error);
})