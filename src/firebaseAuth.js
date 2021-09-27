/* eslint-disable no-return-assign */
const firebaseConfig = {
  apiKey: 'AIzaSyDaVL9xrLkXNtmtT3zogQtjb_kmOGJWmj0',
  authDomain: 'petfriends-fac02.firebaseapp.com',
  projectId: 'petfriends-fac02',
  storageBucket: 'petfriends-fac02.appspot.com',
  messagingSenderId: '185985738506',
  appId: '1:185985738506:web:9852348d59899bbec5fcf3',
};
firebase.initializeApp(firebaseConfig);

export const authUser = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

export const getUser = () => firebase.auth().currentUser;

export const stateCheck = () => firebase.auth();

// Continua el registro con google
export const gmailAuth = (onNavigate) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      const user = result.user.displayName;
      const userPhoto = result.user.photoURL;
      console.log(user, userPhoto);
      onNavigate('/home');
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;

      console.log(errorCode, errorMessage, email, credential);
    });
};
// Inicia sesión en firebase
export const signIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

export const logOut = (onNavigate) => firebase.auth().signOut()
  .then(() => {
    onNavigate('/');
    console.log('sesion cerrada');
  });

// firestore
export const db = firebase.firestore();

export const postInFirestore = (post, user) => db.collection('posts').add({ post, user });

export const printPostFromFirestore = () => db.collection('posts').get();

export const updatePost = (callback) => db.collection('posts').onSnapshot(callback);

export const deletePost = (id) => db.collection('posts').doc(id).delete();
