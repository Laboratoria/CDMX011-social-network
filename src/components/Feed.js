export const Feed = () => {
  const feedDiv = document.createElement('div');
  const greenTopSection = document.createElement('div');
  const logoTopSection = document.createElement('img');
  const postDiv = document.createElement('div');
  const avatarPost = document.createElement('img');
  const inputPost = document.createElement('textArea');
  const refreshText = document.createElement('h6');
  const reloadFeedButton = document.createElement('div');
  const backgroundButton = document.createElement('div');
  const reloadFeedHomeImage = document.createElement('img');

  feedDiv.className = 'feedDiv';
  greenTopSection.className = 'greenTopSection';
  logoTopSection.className = 'logoTopSection';
  postDiv.className = 'postDiv';
  avatarPost.className = 'avatarPost';
  inputPost.className = 'inputPost';
  refreshText.className = 'refreshText';
  reloadFeedButton.className = 'reloadFeedButton';
  backgroundButton.className = 'backgroundButton';
  reloadFeedHomeImage.className = 'reloadFeedHomeImage'; 

  refreshText.textContent = 'Actualizar';
  inputPost.placeholder = 'Publicar algo...';

  logoTopSection.src = './components/DevSocialLogo.png';
  avatarPost.src = './components/avatar.png';
  reloadFeedHomeImage.src = './components/FeedHomeImage.png';
  avatarPost.src = './components/avatar.png';

  feedDiv.appendChild(greenTopSection);
  greenTopSection.appendChild(logoTopSection);
  feedDiv.appendChild(postDiv);
  postDiv.appendChild(avatarPost);
  postDiv.appendChild(inputPost);
  postDiv.appendChild(refreshText);
  feedDiv.appendChild(reloadFeedButton);
  reloadFeedButton.appendChild(backgroundButton);
  reloadFeedButton.appendChild(reloadFeedHomeImage);

  return feedDiv;
};
