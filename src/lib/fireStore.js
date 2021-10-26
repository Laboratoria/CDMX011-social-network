import firebase from './secret.js';

const db = firebase.firestore();
export const getData = () => db.collection('transmuta')
  .get();

export const post = (texto) => {
  db.collection('transmuta').doc().set({
    texto,
  });
};
