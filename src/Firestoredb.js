import { CardPost } from './components/CardPost.js';

const db = firebase.firestore();
export const userData = (message) => {
  console.log('entra userData');
  const users = {
    // avatarPlaceholder: './components/avatar.png',
    // name: 'Yenny Maldonado',
    messagePost: message,
    date: new Date(),
    // likes: './components/thumbs-up.png',
    // likesCounter: 0,
  };

  // const insertPost = document.querySelector('.newPostDiv');
  // const divFeed = document.querySelector('.feedDiv');

  db.collection('usersApp')
    .add(users)
    .then((docRef) => {
      console.log(users, docRef);
      return users;
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

export const getData = () => db.collection('usersApp').get();
window.addEventListener('DOMContentLoaded', async (e) => {
  console.log('evento recargar');
  const querySnapshot = await getData();
  querySnapshot.forEach((doc) => {
    console.log(CardPost(doc.data()));
  });
});
