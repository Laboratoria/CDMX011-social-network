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
const user = firebase.auth().currentUser;
// Firebase register

export const register = (singUpEmail, singUpPassword) => {

    auth.createUserWithEmailAndPassword(singUpEmail, singUpPassword)
        .then((userCredential) => {
            console.log(userCredential);
            console.log(userCredential.user.user);
            console.log(userCredential.user== userCredential);
            //register.reset();
if(userCredential.user === true){
  onNavigate('/TimeLine')
}
        })
        .catch((error) => {
            //singUpform.querySelector(".error").innerHTML = error.message;
            const alertaError=error.message;
            document.querySelector('.error').innerHTML=`${alertaError}`;
            //let errorCode = error.code;
            console.log(error.message);
        });
};


// Firebase login

export const logIn = (logInEmail, logInPassword) => {
  auth.signInWithEmailAndPassword(logInEmail, logInPassword)
    .then((user) => {
      console.log(user);
      console.log('signIn');
      // register.reset();
      // singUpform.querySelector(".error").innerHTML = "";
    })
    .catch((error) => {
      const alertaError=error.message;
      document.querySelector('.error').innerHTML=`${alertaError}`;
      // let errorCode = error.code;
      console.log(`opss!!, ${error.message}`);
    });
};

// Google autentication

export const continueGoogle = () => {
  const credential = new firebase.auth.GoogleAuthProvider();
  auth.languageCode = 'en';

  auth.signInWithPopup(credential)
    .then((result) => {
      onNavigate('/TimeLine');
      console.log(result);
      console.log('google done');
    }).catch((error) => {
        console.log(error.message);
    });

};



export const stateUser =()=>{

  auth.onAuthStateChanged((user) => {
  if (user) {
   //const anUsuer = logIn(logInEmail, logInPassword);
   onNavigate('/TimeLine');
    // const email= user.email;
    // const emailVerified= user.emailVerified;
    // if(emailVerified === false){
    //   console.log('Email no verificado :C')
    // }
    //   console.log(user);
    //   console.log(user.email);
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
    //var uid = user.uid;
    // ...
  } else {
    
    // User is signed out
    // ...
  }
});
}

export const logOutUser=()=>{
  console.log('out'+ user);
  firebase.auth().signOut().then(()=>{
    
    onNavigate('/');
  })
}
