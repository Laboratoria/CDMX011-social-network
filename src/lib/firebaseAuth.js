/* eslint-disable no-alert */
import firebase from './secret.js';
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export function crateAccountWithEmail() {
  const formRegistro = document.querySelector('#formRegistro');
  formRegistro.addEventListener('submit', (e) => {
    e.preventDefault();
    const correo = document.querySelector('#c-electronico').value;
    console.log(correo);
    const contraseña = document.querySelector('.contraseña').value;
    console.log(contraseña);
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
      alert('error');
      // document.getElementById("demo").innerHTML = err.message;
      // ..
    });
}

const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth.signInWithPopup(provider);
};
// google authentification

export function crateAccountWithGoogle() {
  const googleBoton = document.querySelector('#googleBoton');
  googleBoton.addEventListener('submit', (e) => {
    e.preventDefault();
    loginGoogle();
    // eslint-disable-next-line no-undef
    then(() => {
      onNavigate('/muro');
    })
      .catch((error) => {
        console.log(error);
      });
  });
}
