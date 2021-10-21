const Ilustration = () => {
  const myIlustration = document.createElement('div');
  myIlustration.className = 'DevSocialIlustration';

  const appIlustration = document.createElement('img');
  appIlustration.src = './Background.png';
  appIlustration.className = 'BackgroundIlustration';
  myIlustration.appendChild(appIlustration);

  return myIlustration;
};

export default Ilustration;
