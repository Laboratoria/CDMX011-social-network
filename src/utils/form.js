// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCqlMHWFI_jhyjwfHtAnHIiCdxNvXyt1lQ',
  authDomain: 'transmuta-eac80.firebaseapp.com',
  projectId: 'transmuta-eac80',
  storageBucket: 'transmuta-eac80.appspot.com',
  messagingSenderId: '180061403550',
  appId: '1:180061403550:web:7572642a73b542cfa5be8f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app);
const auth = firebase.auth();

export function obtenerDatos() {
  const correoF = document.getElementById('c-electronico');
  const contraseñaF = document.getElementsByClassName('contraseña');

  const promisse = auth.createUserWithEmailAndPassword(correoF.value, contraseñaF.value);
  console.log(promisse);
}
