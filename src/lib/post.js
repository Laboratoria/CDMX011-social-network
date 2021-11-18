/* eslint-disable no-unused-expressions */
import { db } from './firebase.js';

export const sharePost = (texto) => {
  console.log(texto);

  // const text = document.getElementsByClassName('postInput').value;
  db.collection('posts').add({
    texto,
    date: firebase.firestore.FieldValue.serverTimestamp(),
  })
    .then((docRef) => {
      document.getElementsByClassName('postInput').value = '';
      console.log('Document written with ID:', docRef.id);
    })
    .catch((error) => {
      console.log('Error adding document:', error);
    });
};

export const obtainPosts = () => db.collection('posts').orderBy('date', 'desc');

export const deletePost = (id) => {
  db.collection('posts').doc(id).delete().then(() => {
    console.log('Document successfully deleted!');
  })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};



// const updatePost = (id) => {
//   const post = doc.data().texto;
//   const texto = doc.id;
//   const updates = {
//     texto,
//   };
//   db.ref(`posts/${post}`).updatePost(updates);
//   console.log(updatePost);
// };
