// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  const buttonLogin = document.createElement('button');
  const buttonRegister = document.createElement('button');

  buttonLogin.textContent = 'Iniciar Sesión';
  buttonRegister.textContent = 'Regístrate aquí';

  buttonLogin.addEventListener('click', () => onNavigate('/login'));
  buttonRegister.addEventListener('click', () => onNavigate('/register'));

  HomeDiv.appendChild(buttonLogin);
  HomeDiv.appendChild(buttonRegister);

  return HomeDiv;
};
