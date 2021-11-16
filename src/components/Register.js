// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Register = () => {
  const registerDiv = document.createElement('div');
  const topSection = document.createElement('div');
  const homeButton = document.createElement('img');
  const line = document.createElement('div');
  const registerLogoDiv = document.createElement('div');
  const registerLogoBackground = document.createElement('div');
  const registerLogoImage = document.createElement('img');
  const registerTextDiv = document.createElement('div');
  const nameInput = document.createElement('input');
  const emailInput = document.createElement('input');
  const passwordInput = document.createElement('input');
  const buttonRegister = document.createElement('button');
  const copyrightRegister = document.createElement('div');
  const copyrightIcon = document.createElement('div');
  const copyrightCircle = document.createElement('div');
  const copyrightLetterC = document.createElement('div');
  const copyrightText = document.createElement('div');

  registerDiv.className = 'registerDiv';
  topSection.className = 'topSection';
  homeButton.className = 'homeButton';
  line.className = 'line';
  registerLogoDiv.className = 'registerLogoDiv';
  registerLogoBackground.className = 'registerLogoBackground';
  registerLogoImage.className = 'registerLogoImage';
  registerTextDiv.className = 'registerTextDiv';
  nameInput.className = 'nameInput';
  emailInput.className = 'emailInput';
  passwordInput.className = 'passwordInput';
  buttonRegister.className = 'listoButton';
  copyrightRegister.className = 'CopyrightRegister';
  copyrightIcon.className = 'CopyrightIcon';
  copyrightCircle.className = 'CopyrightCircle';
  copyrightLetterC.className = 'LetterC';
  copyrightText.className = 'CopyrightText';

  homeButton.src = './components/BackButtonIcon.png';
  registerLogoImage.src = './components/RegisterLogo.png';
  registerTextDiv.textContent = 'Regístrate aquí';
  nameInput.type = 'text';
  nameInput.placeholder = 'Nombre';
  emailInput.type = 'email';
  emailInput.placeholder = 'Correo electrónico';
  passwordInput.type = 'password';
  passwordInput.placeholder = 'Contraseña';
  buttonRegister.textContent = '¡Listo!';
  copyrightLetterC.textContent = 'C';
  copyrightText.textContent = '2021 DevSocial. Todos los derechos reservados';

  homeButton.addEventListener('click', () => onNavigate('/'));
  buttonRegister.addEventListener('click', () => onNavigate('/feed'));

  registerDiv.appendChild(topSection);
  topSection.appendChild(homeButton);
  topSection.appendChild(line);
  registerDiv.appendChild(registerLogoDiv);
  registerLogoDiv.appendChild(registerLogoBackground);
  registerLogoDiv.appendChild(registerLogoImage);
  registerDiv.appendChild(registerTextDiv);
  registerDiv.appendChild(nameInput);
  registerDiv.appendChild(emailInput);
  registerDiv.appendChild(passwordInput);
  registerDiv.appendChild(buttonRegister);
  registerDiv.appendChild(copyrightRegister);
  copyrightRegister.appendChild(copyrightIcon);
  copyrightIcon.appendChild(copyrightCircle);
  copyrightIcon.appendChild(copyrightLetterC);
  copyrightRegister.appendChild(copyrightText);

  return registerDiv;
};
