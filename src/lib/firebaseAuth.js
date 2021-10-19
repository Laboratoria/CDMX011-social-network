import firebase from './secret.js';

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
        console.log(user);
        // ...
      });
  })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert('hpoa');
      alert('no hay contraseña');
    });
}

export function crateAccountWithGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      onNavigate('/muro');
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode);
      alert(errorMessage);
    });
}
export function createAccountWithGithub() {
  const provider = new firebase.auth.GithubAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      onNavigate('/muro');
    }).catch((error) => {
      alert(errorCode);
      alert(errorMessage);
    });
}
