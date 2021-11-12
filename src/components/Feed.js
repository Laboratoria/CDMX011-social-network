/* eslint-disable import/no-unresolved */
import { userData, getData } from '../Firestoredb.js';

firebase.firestore();

export const Feed = () => {
  const feedDiv = document.createElement('div');
  // const userPostDiv = document.createElement('div');
  const greenTopSection = document.createElement('div');
  const logoTopSection = document.createElement('img');
  const postDiv = document.createElement('div');
  const avatarPost = document.createElement('img');
  const inputPost = document.createElement('textArea');
  const postButton = document.createElement('button');
  const reloadFeedButton = document.createElement('div');
  const backgroundButton = document.createElement('div');
  const reloadFeedHomeImage = document.createElement('img');

  feedDiv.className = 'feedDiv';
  // userPostDiv.className = 'userPostDiv';
  greenTopSection.className = 'greenTopSection';
  logoTopSection.className = 'logoTopSection';
  postDiv.className = 'postDiv';
  avatarPost.className = 'avatarPost';
  inputPost.className = 'inputPost';
  postButton.className = 'postButton';
  reloadFeedButton.className = 'reloadFeedButton';
  backgroundButton.className = 'backgroundButton';
  reloadFeedHomeImage.className = 'reloadFeedHomeImage';

  postButton.textContent = 'Publicar';
  inputPost.placeholder = 'Publicar algo...';

  logoTopSection.src = './components/DevSocialLogo.png';
  avatarPost.src = './components/avatar.png';
  reloadFeedHomeImage.src = './components/FeedHomeImage.png';
  avatarPost.src = './components/avatar.png';

  feedDiv.appendChild(greenTopSection);
  // feedDiv.appendChild(userPostDiv);
  greenTopSection.appendChild(logoTopSection);
  feedDiv.appendChild(postDiv);
  postDiv.appendChild(avatarPost);
  postDiv.appendChild(inputPost);
  postDiv.appendChild(postButton);
  feedDiv.appendChild(reloadFeedButton);
  reloadFeedButton.appendChild(backgroundButton);
  reloadFeedButton.appendChild(reloadFeedHomeImage);

  postButton.addEventListener('click', async (e) => {
    e.preventDefault();
    await userData(inputPost.value);
    await getData();
  });

  return feedDiv;
};
