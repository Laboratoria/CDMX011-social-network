// Registra usuario en firebase
export const authUser = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);
  // ..
// Continua el registro con google
export const gmailAuth = (onNavigate) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
      const credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      onNavigate('/home');
      console.log(credential, token, user);
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
