import firebase from './secret.js';

// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export function crateAccountWithEmail() {
  const formRegistro = document.querySelector('#formRegistro');
  formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    const correo = document.querySelector('#c-electronico').value;
    const contraseña = document.querySelector('.contraseña').value;
    firebase.auth()
      .createUserWithEmailAndPassword(correo, contraseña)
      .then((userCredential) => {
        onNavigate('/muro');
        const user = userCredential.user;
        formRegistro.reset();
        // eslint-disable-next-line no-console
        console.log(user);
        // ...
      })
      .catch((error) => {
        /* const errorMessage = error.message; */
      });
  });
}

export function crateAccountWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then(() => {
      onNavigate('/muro');
    }).catch(() => {
      alert('errorMessage');
    });
}
export function createAccountWithGithub() {
  const provider = new firebase.auth.GithubAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    // eslint-disable-next-line no-unused-vars
    .then(() => {
      onNavigate('/muro');
    // eslint-disable-next-line no-unused-vars
    }).catch(() => {
      alert('errorMessage');
    });
}

export function signOut() {
  firebase.auth()
    .signOut()
    .then(() => {
      onNavigate('/');
    }).catch((error) => {
      // An error happened.
    });
}
