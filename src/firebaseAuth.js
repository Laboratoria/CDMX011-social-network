export const authUser = (email, password) => firebase.auth()
  .createUserWithEmailAndPassword(email, password);
// ..
export const getUser = () => firebase.auth().currentUser;

export const stateCheck = () => firebase.auth()
  .onAuthStateChanged((user) => {
    let uid = null;
    if (user) {
      uid = user.uid;
      return uid;
    /* fs.collection('posts').get()
       .then((snapshot) => {
        console.log(snapshot.docs);
      }); */
    }
    return uid;
  });

// Continua el registro con google
export const gmailAuth = (onNavigate) => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
    .signInWithPopup(provider)
    .then((result) => {
      // const credential = result.credential;
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const token = credential.accessToken;
      // The signed-in user info.
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
  }).catch((error) => {
    console.log(error);
  });

// Persistencie
export const persistence = (startsesion) => firebase.auth()
  .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => startsesion);

// firestore
export const db = firebase.firestore();

export const postInFirestore = (post, user) => db.collection('posts').add({ post, user });

export const printPostFromFirestore = () => db.collection('posts').get();
export const updatePost = (callback) => db.collection('posts').onSnapshot(callback);

/* export const deletePost = () => db.collection("posts").doc("DC").delete().then(() => {
  console.log("Document deleted!");
}).catch((error) => {
  console.error("Error removing document: ", error);
}); */

/* export const persistance = (email, password) => firebase.auth().setPersistence
(firebase.auth.Auth.Persistence.LOCAL)
  .then(() => {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  }) */
