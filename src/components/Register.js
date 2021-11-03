/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { signUp } from '../lib/auth.js';
import { onNavigate } from '../main.js';

export const Register = () => {
  const registerDiv = document.createElement('div');
  registerDiv.texContent = '¿Aún no tienes una cuenta? ¡Regístrate!';
  registerDiv.className = 'registerDiv';

  const formContainer = document.createElement('div');
  formContainer.className = 'formContainer';

  const mainLogoR = document.createElement('div');
  mainLogoR.className = 'mainLogoR';
  mainLogoR.textContent = 'ciclovida';

  const logoDivR = document.createElement('div');
  logoDivR.className = 'logoDivR';
  logoDivR.textContent = 'ciclovida';

  const buttonHome = document.createElement('button');
  buttonHome.className = 'buttonBackHome2';
  buttonHome.textContent = 'Regresar a Home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  const inputMail = document.createElement('input');
  inputMail.className = 'inputMail2';
  inputMail.setAttribute('placeholder', 'Correo electrónico');

  const inputPass = document.createElement('input');
  inputPass.setAttribute('placeholder', 'Contraseña');
  inputPass.className = 'inputPass2';

  const btnSubmit = document.createElement('button');
  btnSubmit.className = 'btnSubmit2';
  btnSubmit.textContent = 'Registrarse';

  btnSubmit.addEventListener('click', () => signUp(inputMail.value, inputPass.value));

  registerDiv.append(formContainer, mainLogoR, logoDivR, buttonHome, inputMail, inputPass, btnSubmit);

  return registerDiv;
};
