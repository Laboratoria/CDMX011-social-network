/* eslint-disable */
/**
 * @jest-environment jsdom
 */
// const fireStore=()=>{

// }
// const firebase ={
//     firestore:fireStore 
// }
global.firebase={
    initializeApp:()=> console.log('hi firebase'),
    auth:() =>({
        signInWithEmailAndPassword: ()=> console.log('signUp'),
    }),

};