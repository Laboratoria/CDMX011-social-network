// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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

// Firebase register

export const register = (singUpEmail, singUpPassword) => {
  auth.createUserWithEmailAndPassword(singUpEmail, singUpPassword)
    .then((userCredential) => {
      console.log(userCredential);
      // register.reset();
    })
    .catch((error) => {
      // singUpform.querySelector(".error").innerHTML = error.message;
      const errorMessage = alert(`opps! ${error.message}`);
      // let errorCode = error.code;
      console.log(error.message);
    });
};

// Firebase login

export const logIn = (logInEmail, logInPassword) => {
  auth.signInWithEmailAndPassword(logInEmail, logInPassword)
    .then((userCredential) => {
      console.log(userCredential);
      console.log('signIn');
      // register.reset();
      // singUpform.querySelector(".error").innerHTML = "";
    })
    .catch((error) => {
      const errorMessage = alert(`opps! ${error.message}`);

      // let errorCode = error.code;
      console.log(`opss!!, ${error.message}`);
    });
};

// Google autentication

export const continueGoogle = () => {
  const credential = new firebase.auth.GoogleAuthProvider();
  firebase.auth().languageCode = 'en';

  firebase.auth().signInWithPopup(credential)
    .then((result) => {
    
      console.log(result);
      console.log('google done');
    }).catch((error) => {
        console.log(error.message);
    });
};
