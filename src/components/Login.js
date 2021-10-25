// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

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

  homeButton.addEventListener('click', () => onNavigate('/'));

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

  return loginDiv;
};
