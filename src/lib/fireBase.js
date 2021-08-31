// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* eslint-disable */

import { onNavigate } from '../routes.js';

const firebaseConfig = {
  apiKey: 'AIzaSyCaBVEyo0yKvVWGvxHpTufYnUwG7qMZ2FY',
  authDomain: 'pic-art-1c2c5.firebaseapp.com',
  projectId: 'pic-art-1c2c5',
  storageBucket: 'pic-art-1c2c5.appspot.com',
  messagingSenderId: '866895313531',
  appId: '1:866895313531:web:c14ccfb8c6766208a540de',
  measurementId: 'G-V85MSYGCCW',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
const auth = firebase.auth();
const user= firebase.auth().currentUser;
//console.log(getUser());
export const dataBase = firebase.firestore();

// Firebase register
export const register = (singUpEmail, singUpPassword) => {
  return Promise.resolve(auth.createUserWithEmailAndPassword(singUpEmail, singUpPassword));
};


// Firebase login
export const logIn = (logInEmail, logInPassword) => {
  return Promise.resolve(auth.signInWithEmailAndPassword(logInEmail, logInPassword));
  // .then((user) => {
  //   console.log(user);
  //   console.log('signIn');
  //   // register.reset();
  //   // singUpform.querySelector(".error").innerHTML = "";
  // })
  // .catch((error) => {
  //   const alertaError=error.message;
  //   document.querySelector('.error').innerHTML=`${alertaError}`;
  // });
};

// Google autentication
export const continueGoogle = () => {
  const credential = new firebase.auth.GoogleAuthProvider();
  auth.languageCode = 'en';
  return Promise.resolve( auth.signInWithPopup(credential));

};

// //Autentification
// export const sendVerification = () =>{
//   const user = auth.currentUser;
//  user.sendEmailVerification()
//   .then(() => {
//     console.log( "Email verification sent!");
//     // ...
//   });
// }


//creo que ya no lo necesitamos 
export const stateUser = () => {
  auth.onAuthStateChanged((user) => {
    const emailUser = user.email;
    console.log(emailUser);
  
    if (user) {
      
      console.log(user.uid);
      
      //const anUsuer = logIn(logInEmail, logInPassword);
      //onNavigate('/TimeLine');
    } else {
      // User is signed out
    }
  });
}

export const logOutUser = () => {
  console.log('out' + user);
  return Promise.resolve(firebase.auth().signOut())
}
