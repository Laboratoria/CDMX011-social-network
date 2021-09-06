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

export const loginWithGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithRedirect(provider);
  firebase.auth()
    .getRedirectResult()
    .then((result) => {
      const credential = result.credential;
      console.log(' Bienvenida ', credential);
    })
    .catch((error) => {
      console.error(error);
    });
};
