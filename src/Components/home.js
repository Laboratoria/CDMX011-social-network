// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const buttonLoginGoogle = document.createElement('button');
  const buttonGoToRegister = document.createElement('button');

  inputEmail.placeholder = 'Correo';
  inputPassword.placeholder = 'Contraseña';
  inputPassword.type = 'password';
  buttonLogin.textContent = 'Ingresar';
  buttonLoginGoogle.textContent = 'Ingresa con tu cuenta de Google';
  buttonGoToRegister.textContent = 'Registrate';

  buttonGoToRegister.addEventListener('click', () => onNavigate('/register'));

  HomeDiv.appendChild(inputEmail);
  HomeDiv.appendChild(inputPassword);
  HomeDiv.appendChild(buttonLogin);
  HomeDiv.appendChild(buttonLoginGoogle);
  HomeDiv.appendChild(buttonGoToRegister);

  return HomeDiv;
};
