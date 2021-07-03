// Producer
class UserStorage { // 사용자의 정보를 받아왔다는 가정(백엔드로 부터)
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          (id === 'chan' && password === 'woo') || 
          (id === 'coder' && password === 'academy')
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    })
  }
  getRoles(user) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'chan') {
          resolve({ name: 'chan', role: 'admin' });
        } else {
          reject(new Error('no access'));
        }
      }, 1000);
    })
  }
}

// Consumers
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage
.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role} role`))
.catch(console.log);