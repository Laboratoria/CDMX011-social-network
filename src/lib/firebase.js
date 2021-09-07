export const registerUser = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      window.location.assign('/login');
      console.log(userCredential.user);
      // ...
    })
    .catch((error) => {
      console.log('error', error.message);
      // ..
    });
};

export const LoginUser = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      window.location.assign('/wall');
      console.log(userCredential.user);
      // ...
    })
    .catch((error) => {
      console.log('error', error.message);
      // ..
    });
};
