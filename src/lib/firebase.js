import firebase from './secret.js';

export const registerUser = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      console.log(userCredential.user);
      // ...
    })
    .catch((error) => {
      console.log('error', error.message);
      // ..
    });
};

console.log(firebase);
