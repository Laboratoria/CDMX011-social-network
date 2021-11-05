/* eslint-disable no-undef */
import firebase from './secret.js';

const db = firebase.firestore();
export const getData = () => db.collection('post')
  .get();

export const post = (texto) => {
  db.collection('post').add({
    /* .onSnapshot{{ */
    texto,
  })
    .then(() => {
      // eslint-disable-next-line no-alert
      // eslint-disable-next-line no-console
      console.log('Se ha publicado');
    })
    .catch((error) => {
      /* const errorCode = error.code; */
      const errorMessage = error.message;
      // eslint-disable-next-line no-alert
      alert(errorMessage);
    });
};
export const actualizar = (callback) => {
  db.collection('post').onSnapshot(callback);
};
