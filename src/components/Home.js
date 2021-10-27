// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  const DevSocialLogo = document.createElement('img');
  const Background = document.createElement('img');
  const slogan = document.createElement('div');
  const conecta = document.createElement('div');
  const firstBulletPoint = document.createElement('div');
  const descubre = document.createElement('div');
  const secondBulletPoint = document.createElement('div');
  const crea = document.createElement('div');
  const buttonLogin = document.createElement('button');
  const registerDiv = document.createElement('div');
  const registerText = document.createElement('div');
  const buttonRegister = document.createElement('button');

  HomeDiv.className = 'Home';
  DevSocialLogo.className = 'Logo';
  DevSocialLogo.alt = 'DevSocial';
  Background.className = 'Background';
  Background.alt = 'Background image';
  slogan.className = 'Slogan';
  conecta.className = 'Conecta';
  firstBulletPoint.className = 'VignetteOne';
  descubre.className = 'Descubre';
  secondBulletPoint.className = 'VignetteTwo';
  crea.className = 'Crea';
  buttonLogin.className = 'Login';
  registerDiv.className = 'Register';
  registerText.className = 'registerText';
  buttonRegister.className = 'registerButton';

  DevSocialLogo.src = './components/DevSocialLogo.png';
  Background.src = './components/Background.png';
  buttonLogin.textContent = 'Iniciar Sesión';
  conecta.textContent = 'Conecta';
  descubre.textContent = 'Descubre';
  crea.textContent = 'Crea';
  registerText.textContent = '¿Aún no tienes cuenta?';
  buttonRegister.textContent = 'Regístrate aquí.';

  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  buttonRegister.addEventListener('click', () => onNavigate('/register'));

  HomeDiv.appendChild(DevSocialLogo);
  HomeDiv.appendChild(Background);
  HomeDiv.appendChild(slogan);
  slogan.appendChild(conecta);
  slogan.appendChild(firstBulletPoint);
  slogan.appendChild(descubre);
  slogan.appendChild(secondBulletPoint);
  slogan.appendChild(crea);
  HomeDiv.appendChild(buttonLogin);
  HomeDiv.appendChild(registerDiv);
  registerDiv.appendChild(registerText);
  registerDiv.appendChild(buttonRegister);

  return HomeDiv;
};
