// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { registerUser } from '../lib/firebase.js';

export const Register = () => {
  const registerDiv = document.createElement('div');
  const inputName = document.createElement('input');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonRegister = document.createElement('button');
  const buttonLoginGoogle = document.createElement('button');
  const buttonHome = document.createElement('button');

  inputName.placeholder = 'Nombre';
  inputEmail.placeholder = 'Correo';
  inputPassword.placeholder = 'Contraseña';
  inputPassword.type = 'password';
  buttonRegister.textContent = 'Registrate';
  buttonRegister.type = 'submit';
  buttonLoginGoogle.textContent = 'Registrate con tu cuenta Google';
  buttonHome.textContent = 'Regresar al Home';

  buttonHome.addEventListener('click', () => onNavigate('/'));
  buttonRegister.addEventListener('click', () => registerUser(inputEmail, inputPassword));

  registerDiv.appendChild(inputName);
  registerDiv.appendChild(inputEmail);
  registerDiv.appendChild(inputPassword);
  registerDiv.appendChild(buttonRegister);
  registerDiv.appendChild(buttonLoginGoogle);
  registerDiv.appendChild(buttonHome);

  return registerDiv;
};
