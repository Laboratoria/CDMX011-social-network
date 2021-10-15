/* eslint-disable no-unused-vars */
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
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode);
      alert(errorMessage);
      // document.getElementById("demo").innerHTML = err.message;
      // ..
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
// google authentification
/* const loginGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth.signInWithPopup(provider);
};
export function crateAccountWithGoogle() {
  const googleBoton = document.querySelector('#googleBoton');
  googleBoton.addEventListener('click', (e) => {
    e.preventDefault();
    loginGoogle();
    // eslint-disable-next-line no-undef
    then(() => {
      onNavigate('/muro');
    })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode);
        alert(errorMessage);
      });
  });
} */
