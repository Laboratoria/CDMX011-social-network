//import { toViewSignUp } from '../components/signUp.js';
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

export const register = (singUpEmail, singUpPassword) => {
    auth.createUserWithEmailAndPassword(singUpEmail, singUpPassword)
        .then((userCredential) => {
            console.log(userCredential);
            //register.reset();
            //singUpform.querySelector(".error").innerHTML = "";
        })
        .catch((error) => {
            //singUpform.querySelector(".error").innerHTML = error.message;
            //let errorMessage = alert(error.message);
            //let errorCode = error.code;
            console.log(error.message);
        });
};
// export const register = document.querySelector("#submitForm");
// register.addEventListener('submit', (e) => {
//     const email = document.querySelector("#singUpEmail").value;
//     const password = document.querySelector("#singUpPassword").value;

//     e.preventDefault();
//     console.log('estoy evitando el reset');
//     console.log(email + password);
//     auth
//         .createUserWithEmailAndPassword(email, password)
//         .then(userCredential => {
//             register.reset();
//         });

// });