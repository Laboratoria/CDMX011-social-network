// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Register = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.textContent = 'Bienvenido al registro';
  const buttonHome = document.createElement('button');

  buttonHome.textContent = 'Regresar a pantalla de inicio';

  buttonHome.addEventListener('click', () => onNavigate('/'));
  HomeDiv.appendChild(buttonHome);

  return HomeDiv;
};
