const db = firebase.firestore();

export const userData = (message) => {
  const users = {
    // deletePost: 'deleteText',
    avatarPlaceholder: './components/default-person.png',
    // name: 'Yenny Maldonado',
    messagePost: message,
    date: new Date(),
    likes: './components/thumbs-up.png',
    likesCounter: 0,
    // comentar: ' ',
  };

  db.collection('usersApp')
    .add(users)
    .then((docRef) => {
      console.log(users, docRef, 'línea 19');
      return users;
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

export const getData = () => db.collection('usersApp').get();
// const onGetData = (callback) => db.collection('usersApp').onSnapshot(callback);

/* window.addEventListener('DOMContentLoaded', async (e) => {
  console.log('evento recargar');
  onGetData((querySnapshot) => {
    // CardPost.innerHTML = '';
    querySnapshot.forEach((doc) => {
      CardPost(doc.data());
    });
  });
});
*/

/* const userPost = doc.data();
userPost.id = doc.id;
deletePost.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e.target.dataset);
  });
}); */

/* db.collection("usersApp").doc("id").delete().then(() => {
  console.log("Document successfully deleted!");
}).catch((error) => {
  console.error("Error removing document: ", error);
}); */
