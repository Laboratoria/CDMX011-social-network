const Logo = () => {
  const mainLogo = document.createElement('div');
  mainLogo.className = 'appLogo';

  const appName = document.createElement('img');
  appName.src = './DevSocialLogo.png';
  appName.className = 'nameLogo';
  mainLogo.appendChild(appName);

  return mainLogo;
};

export default Logo;
