// eslint-disable-next-line import/no-cycle
import { onNavigate } from './main.js';

export const myAuth = () => {
  // instancia del objeto del proveedor de Google
  const provider = new firebase.auth.GoogleAuthProvider();
  const auth = firebase.auth();
  auth
    .signInWithPopup(provider)
    .then((result) => {
      // console.log(result);
      /* const credential = result.credential;
      const token = credential.accessToken;
      const user = result.user;
      console.log(credential, token, user); */
      onNavigate('/feed');
    })
    .catch((error) => {
      console.log(error.message);
    });
};

/* export const data = (message) => {
  const users = {
    avatarPlaceholder: './components/avatar.png',
    name: 'Yenny Maldonado',
    messagePost: message,
    date: new Date(),
    likes: './components/thumbs-up.png',
    likesCounter: 0,
  };

  db.collection('usersApp')
    .add(users)
    .then((docRef) => {
      console.log(users, docRef, 'línea 37');
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
}; */
