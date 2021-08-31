import { onNavigate } from '../main.js';

export const home = () => {
  const registerPage = document.createElement('div');
  const signOut = document.createElement('button');
  signOut.textContent = 'Cerrar sesión';
  registerPage.appendChild(signOut);
  signOut.addEventListener('click', () => onNavigate('/'));
  return registerPage;
};
