/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';
import { googleAuth, loginEmailPass } from '../lib/auth.js';

export const Login = () => {
  const loginDiv = document.createElement('div');
  loginDiv.className = 'loginDiv';

  const formContainerL = document.createElement('section');
  formContainerL.className = 'formContainerL';

  const greetingDivL = document.createElement('div');
  greetingDivL.textContent = '¡Hola de nuevo!';
  greetingDivL.className = 'greetingDivL';

  const mainLogoL = document.createElement('div');
  mainLogoL.className = 'mainLogoL';
  mainLogoL.textContent = 'ciclovida';

  const logoDivL = document.createElement('div');
  logoDivL.className = 'logoDivL';
  logoDivL.textContent = 'ciclovida';

  const buttonHome = document.createElement('button');
  buttonHome.className = 'buttonBackHome';
  buttonHome.textContent = 'Regresar a Home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  const inputMail = document.createElement('input');
  inputMail.className = 'inputMailL';
  inputMail.setAttribute('placeholder', 'Correo electrónico');

  const inputPass = document.createElement('input');
  inputPass.setAttribute('placeholder', 'Contraseña');
  inputPass.className = 'inputPassL';
  inputPass.type = 'password';

  const btnSubmit = document.createElement('button');
  btnSubmit.className = 'btnSubmitL';
  btnSubmit.textContent = 'Iniciar sesión';

  btnSubmit.addEventListener('click', () => loginEmailPass(inputMail.value, inputPass.value));

  const btnGoogle = document.createElement('button');
  btnGoogle.className = 'btnGoogle';
  // btnGoogleR.src = './imagenes/google.png';
  btnGoogle.textContent = 'Ingresar con Google';

  btnGoogle.addEventListener('click', () => googleAuth());

  loginDiv.append(formContainerL, mainLogoL, logoDivL, greetingDivL, buttonHome, inputMail, inputPass, btnGoogle, btnSubmit);

  return loginDiv;
};
