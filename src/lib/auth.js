/* eslint-disable no-console */
/* eslint-disable no-alert */
import { onNavigate } from '../main.js';
import firebase, { db } from './firebase.js';
// Registro, inicio de sesión, cierre de sesión

// funcion registro con correo y contraseña
export const signUp = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      alert('Los datos ingresados pertenecen a una cuenta ya activa');
      // const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

// funcion login con correo y contraseña
export const loginEmailPass = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      onNavigate('/Wall');
      console.log(user);
    })
    // .then((routes) => onNavigate {

    // })
    .catch((error) => {
      alert('Usuario no registrado');
      const errorMessage = error.message;
      console.log(errorMessage);
    });
};

// funcion cierre de sesion
//  export const logOut = () =>

// método “get” para recuperar toda la colección de datos cloud firestore
// db.collection('users').get().then((querySnapshot) => {
//   querySnapshot.forEach((doc) => {
//     console.log(`${doc.id} => ${doc.data()}`);
//   });
// });
