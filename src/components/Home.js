/* eslint-disable import/no-cycle */
/* eslint-disable max-len */
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  HomeDiv.className = 'Home';

  const background = document.createElement('div');
  background.className = 'background';

  const mainLogo = document.createElement('div');
  mainLogo.className = 'mainLogo';
  mainLogo.textContent = 'ciclovida';

  const logoDiv = document.createElement('div');
  logoDiv.className = 'logoDiv';
  logoDiv.textContent = 'ciclovida';

  const welcomeDiv = document.createElement('div');
  welcomeDiv.className = 'welcomeDiv';
  welcomeDiv.textContent = '¡Bienvenidx a la comunidad de ciclismo más grande en Latinoamérica!';

  // const lineDiv = document.createElement('div');
  // lineDiv.className = 'line';
  // const lineDiv2 = document.createElement('div');
  // lineDiv2.className = 'line2';
  const oDiv = document.createElement('div');
  oDiv.className = 'oDiv';
  oDiv.textContent = 'o';
  // const lineDiv3 = document.createElement('div');
  // lineDiv3.className = 'line3';
  // const lineDiv4 = document.createElement('div');
  // lineDiv4.className = 'line4';

  const buttonRegister = document.createElement('button');
  buttonRegister.className = 'buttonHomeRegister';
  buttonRegister.textContent = 'Regístrate';

  const buttonLogin = document.createElement('button');
  buttonLogin.className = 'buttonHomeLogin';
  buttonLogin.textContent = 'Inicia sesión';

  buttonRegister.addEventListener('click', () => onNavigate('/Register'));
  buttonLogin.addEventListener('click', () => onNavigate('/Login'));

  HomeDiv.append(buttonRegister, buttonLogin, welcomeDiv, oDiv, logoDiv, mainLogo, background);

  return HomeDiv;
};
