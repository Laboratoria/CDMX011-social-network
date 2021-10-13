import firebase from './secret.js';

export const crateAccountWithEmail = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
      const user = userCredential.user;
      console.log(user);
    // ...
    })
    .catch((error) => {
      console.log(error);
    // ..
    });
};
