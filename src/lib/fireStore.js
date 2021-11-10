/* eslint-disable no-undef */
// eslint-disable-next-line no-unused-vars
import { onNavigate } from '../main.js';
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
      console.log('Se ha publicado');
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

// eliminar
// aplicar delete de firebase
export const borrar = (id) => {
  db.collection('post')
    .doc(id)
    .delete();
};
