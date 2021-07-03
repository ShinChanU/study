'use strict';

// JavaScript is synchronous(동기적).
// Execute the code block in order after hoisting.(hoisting 된 이후 부터 코드가 동기적으로 실행)
// hoisting: var, function declaration (선언이 위에 올라가는 것)
console.log('1');
setTimeout(() => console.log('2'), 1000); // 1000ms = 1s, 후 출력
console.log('3');

// Synchronous callback
function printImmeiately(print) {
  print();
}
printImmeiately(() => console.log('hello'));

// Asynchronous callback (비동기적 콜백)
function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}
printWithDelay(() => console.log('async callback'), 2000);

// Callback Hell example
class UserStorage { // 사용자의 정보를 받아왔다는 가정(백엔드로 부터)
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'chan' && password === 'woo') || 
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
      if (user === 'chan') {
        onSuccess({ name: 'chan', role: 'admin' });
      } else {
        onError(new Error('no access'));
      }
    }, 1000);
  }
}

// login 하는 모습을 보여줌(콜백 지옥,, 가독성이 떨어짐)
const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id, 
  password, 
  (user) => {
    userStorage.getRoles(user, (userWithRole) => {
      alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role`);
    }, (error) => {
      console.log(error);
    })
  },
  (error) => {
    console.log(error);
  }
)