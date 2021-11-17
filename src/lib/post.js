/* eslint-disable no-unused-expressions */
import { db } from './firebase.js';

export const sharePost = (texto) => {
  console.log(texto);

  const text = document.getElementsByClassName('postInput').value;
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

export const obtainPosts = () => db.collection('posts').get();

// export const deletePost = () => {
//   db.collection('posts').doc('docRef').delete().then(() => {
//     console.log('Document successfully deleted!');
//   })
//     .catch((error) => {
//       console.error('Error removing document: ', error);
//     });
// };
