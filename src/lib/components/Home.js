// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main.js';

export const Home = () => {
  const Homediv = document.createElement('div');
  const logoPDP = document.createElement('img');
  const h1Welcome = document.createElement('h1');
  const buttonRegister = document.createElement('button');
  const buttonLogin = document.createElement('button');
  const labelOr = document.createElement('label');
  const buttonGoogle = document.createElement('button');
  h1Welcome.textContent = 'Bienvenid@';
  buttonRegister.textContent = 'Regístrate';
  buttonLogin.textContent = 'Iniciar Sesión';
  labelOr.textContent = 'o';
  buttonGoogle.textContent = 'Continuar con Google';

  buttonRegister.addEventListener('click', () => onNavigate('/register'));
  buttonLogin.addEventListener('click', () => onNavigate('/login'));

  Homediv.appendChild(logoPDP);
  Homediv.appendChild(h1Welcome);
  Homediv.appendChild(buttonRegister);
  Homediv.appendChild(buttonLogin);
  Homediv.appendChild(labelOr);
  Homediv.appendChild(buttonGoogle);

  return Homediv;
};
