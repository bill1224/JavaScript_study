class UserStorage {
    loginUser(id, password) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((id === 'jongin' && password === 'code')) {
                    resolve(id);
                } else {
                    reject(new Error('not found'));
                }
            }, 2000);
        });        
    }

    getRoles(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (id === 'jongin') {
                    resolve({name: id, role: 'admin'});
                } else {
                    reject(new Error('not access'));
                }
            }, 1000);
        });        
    }
}

let userStorage = new UserStorage();
let id = prompt('user id');
let password = prompt('password');
userStorage.loginUser(id, password)
            .then((id) => { return userStorage.getRoles(id) })
            .then((userInfo) => { alert(`name: ${userInfo.name}, role: ${userInfo.role}`) })
            .catch((error) => { alert(error) });            