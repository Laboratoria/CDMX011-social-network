/* eslint-disable import/no-unresolved */
import { userData, getData } from '../Firestoredb.js';
import { CardPost } from './CardPost.js';

firebase.firestore();

export const Feed = () => {
  const feedDiv = document.createElement('div');
  const greenTopSection = document.createElement('div');
  const logoTopSection = document.createElement('img');
  // const textFeedDiv = document.createElement('div');
  //  const subtitleFeed = document.createElement('h3');
  const postDiv = document.createElement('div');
  const avatarPost = document.createElement('img');
  const inputPost = document.createElement('textArea');
  const postButton = document.createElement('button');

  feedDiv.className = 'feedDiv';
  greenTopSection.className = 'greenTopSection';
  logoTopSection.className = 'logoTopSection';
  // textFeedDiv.className = 'textFeedDiv';
  // subtitleFeed.className = 'subtitleFeed';
  postDiv.className = 'postDiv';
  avatarPost.className = 'avatarPost';
  inputPost.className = 'inputPost';
  postButton.className = 'postButton';

  // subtitleFeed.textContent = '¡Comparte tus ideas!';
  postButton.textContent = 'Publicar';
  inputPost.placeholder = 'Publicar algo...';

  logoTopSection.src = './components/Logo DevSocial 2.0.png';
  avatarPost.src = './components/default-person.png';
  avatarPost.src = './components/avatar.png';

  feedDiv.appendChild(greenTopSection);
  greenTopSection.appendChild(logoTopSection);
  // feedDiv.appendChild(textFeedDiv);
  // textFeedDiv.appendChild(subtitleFeed);
  feedDiv.appendChild(postDiv);
  postDiv.appendChild(avatarPost);
  postDiv.appendChild(inputPost);
  postDiv.appendChild(postButton);

  postButton.addEventListener('click', async (e) => {
    e.preventDefault();
    await userData(inputPost.value);
    await getData();
  });

  getData()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, ' => ', doc.data());
        const post = CardPost(doc.data());
        feedDiv.appendChild(post);
      });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
  return feedDiv;
};
