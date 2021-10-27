export const Feed = () => {
  const feedDiv = document.createElement('div');
  const greenTopSection = document.createElement('div');
  const logoTopSection = document.createElement('img');
  const reloadFeedButton = document.createElement('div');
  const backgroundButton = document.createElement('div');
  const reloadFeedHomeImage = document.createElement('img');

  feedDiv.className = 'feedDiv';
  greenTopSection.className = 'greenTopSection';
  logoTopSection.className = 'logoTopSection';
  reloadFeedButton.className = 'reloadFeedButton';
  backgroundButton.className = 'backgroundButton';
  reloadFeedHomeImage.className = 'reloadFeedHomeImage';

  logoTopSection.src = './components/DevSocialLogo.png';
  reloadFeedHomeImage.src = './components/FeedHomeImage.png';

  feedDiv.appendChild(greenTopSection);
  greenTopSection.appendChild(logoTopSection);
  feedDiv.appendChild(reloadFeedButton);
  reloadFeedButton.appendChild(backgroundButton);
  reloadFeedButton.appendChild(reloadFeedHomeImage);

  return feedDiv;
};
