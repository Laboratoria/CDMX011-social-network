// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
// eslint-disable-next-line import/no-cycle
import { myAuth } from '../google-signin.js';

export const Login = () => {
  const loginDiv = document.createElement('div');
  const topSection = document.createElement('div');
  const homeButton = document.createElement('img');
  const line = document.createElement('div');
  const loginLogo = document.createElement('img');
  const hiDiv = document.createElement('div');
  const emailInput = document.createElement('input');
  const passwordInput = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const loginText = document.createElement('div');
  const loginOptions = document.createElement('div');
  const googleIcon = document.createElement('img');
  const facebookIcon = document.createElement('img');
  const gitHubIcon = document.createElement('img');
  const copyrightLogin = document.createElement('div');
  const copyrightIcon = document.createElement('div');
  const copyrightCircle = document.createElement('div');
  const copyrightLetterC = document.createElement('div');
  const copyrightText = document.createElement('div');

  loginDiv.className = 'loginDiv';
  topSection.className = 'topSection';
  homeButton.className = 'homeButton';
  line.className = 'line';
  loginLogo.className = 'loginLogo';
  hiDiv.className = 'hiDiv';
  emailInput.className = 'emailInput';
  passwordInput.className = 'passwordInput';
  buttonLogin.className = 'listoButton';
  loginText.className = 'loginText';
  loginOptions.className = 'loginOptions';
  googleIcon.className = 'googleIcon';
  facebookIcon.className = 'facebookIcon';
  gitHubIcon.className = 'gitHubIcon';
  copyrightLogin.className = 'CopyrightLogin';
  copyrightIcon.className = 'CopyrightIcon';
  copyrightCircle.className = 'CopyrightCircle';
  copyrightLetterC.className = 'LetterC';
  copyrightText.className = 'CopyrightText';

  homeButton.src = './components/BackButtonIcon.png';
  loginLogo.src = './components/loginLogo.png';
  hiDiv.textContent = '¡Hola de nuevo!';
  emailInput.type = 'email';
  emailInput.placeholder = 'Correo electrónico';
  passwordInput.type = 'password';
  passwordInput.placeholder = 'Contraseña';
  buttonLogin.textContent = '¡Listo!';
  loginText.textContent = 'Iniciar sesión con:';
  googleIcon.src = './components/Google.png';
  facebookIcon.src = './components/Facebook.png';
  gitHubIcon.src = './components/gitHub.png';
  copyrightLetterC.textContent = 'C';
  copyrightText.textContent = '2021 DevSocial. Todos los derechos reservados';

  homeButton.addEventListener('click', () => onNavigate('/'));
  buttonLogin.addEventListener('click', () => onNavigate('/feed'));
  googleIcon.addEventListener('click', () => myAuth());
  facebookIcon.addEventListener('click', () => onNavigate('/feed'));
  gitHubIcon.addEventListener('click', () => onNavigate('/feed'));

  loginDiv.appendChild(topSection);
  topSection.appendChild(homeButton);
  topSection.appendChild(line);
  loginDiv.appendChild(loginLogo);
  loginDiv.appendChild(hiDiv);
  loginDiv.appendChild(emailInput);
  loginDiv.appendChild(passwordInput);
  loginDiv.appendChild(buttonLogin);
  loginDiv.appendChild(loginText);
  loginDiv.appendChild(loginOptions);
  loginOptions.appendChild(googleIcon);
  loginOptions.appendChild(facebookIcon);
  loginOptions.appendChild(gitHubIcon);
  loginDiv.appendChild(copyrightLogin);
  copyrightLogin.appendChild(copyrightIcon);
  copyrightIcon.appendChild(copyrightCircle);
  copyrightIcon.appendChild(copyrightLetterC);
  copyrightLogin.appendChild(copyrightText);

  return loginDiv;
};
