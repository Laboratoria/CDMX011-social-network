const firebaseConfig = {
  apiKey: 'AIzaSyB1pNKBmF7G0ZRIEtlByBlsS_Vrrd_5VAc',
  authDomain: 'red-social-5aebc.firebaseapp.com',
  projectId: 'red-social-5aebc',
  storageBucket: 'red-social-5aebc.appspot.com',
  messagingSenderId: '345107510223',
  appId: '1:345107510223:web:e9601e9b1171d8449c58ba',
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const signIn = (email, password) => firebase.auth()
  .signInWithEmailAndPassword(email, password);

export const createUser = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);

export const persistencia = () => firebase.auth()
  .setPersistence(firebase.auth.Auth.Persistence.SESSION);

export const googleRegister = () => firebase.auth()
  .signInWithPopup(new firebase.auth.GoogleAuthProvider());

export const signOut = () => firebase.auth().signOut();
export const getUser = () => firebase.auth().currentUser;
export const sendEmail = () => firebase.auth().currentUser.sendEmailVerification();
export const db = firebase.firestore();
