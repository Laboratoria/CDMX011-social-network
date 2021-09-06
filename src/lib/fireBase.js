// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
/* eslint-disable */

// import { onNavigate } from '../routes.js';

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
//firebase.analytics();


export const getUser = () => firebase.auth().currentUser;
//console.log(getUser());
export const dataBase = () => firebase.firestore();

// Firebase register
export const register = (singUpEmail, singUpPassword) => {
  return firebase.auth().createUserWithEmailAndPassword(singUpEmail, singUpPassword);
};


// Firebase login
export const logIn = (logInEmail, logInPassword) => {
  return firebase.auth().signInWithEmailAndPassword(logInEmail, logInPassword);
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
  firebase.auth().languageCode = 'en';
  return firebase.auth().signInWithPopup(credential);

};

export const continueGitHub = () => {
  const provider = new firebase.auth.GithubAuthProvider();
  firebase.auth().languageCode = 'en';
  return firebase.auth().signInWithPopup(provider);
};


export const stateUser = () => {
  firebase.auth().onAuthStateChanged((getUser) => {
      if (getUser) {
      
      console.log(getUser.uid);
      
      //const anUsuer = logIn(logInEmail, logInPassword);
      //onNavigate('/TimeLine');
    } else {
      // User is signed out
    }
  });
}

export const logOutUser = () => {
 
  return firebase.auth().signOut()
}

export const deletePost = id => {firebase.firestore().collection('posts').doc('id').delete()};
      // .then(() => {
      //   console.log("Document successfully deleted!");
      // }).catch((error) => {
      //   console.error("Error removing document: ", error);
      // });
    
