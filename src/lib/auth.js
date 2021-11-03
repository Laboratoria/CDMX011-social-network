/* eslint-disable no-console */
/* eslint-disable no-alert */
import firebase from './firebase.js';
// Registro, inicio de sesión, cierre de sesión

// funcion registro con correo y contraseña
export const signUp = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      console.log('Usuario registrado exitosamente');
      const user = userCredential.user;
    })
    .catch((error) => {
      alert('Los datos ingresados pertenecen a una cuenta ya activa');
      console.logg('Los datos ingresados son erroneos')
      // const errorCode = error.code;
      const errorMessage = error.message;
    });
};
// funcion login con correo y contraseña
export const loginEmailPass = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      alert('Usuario no registrado');
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};
// funcion cierre de sesion
//  export const logOut = () => 
