import { onNavigate } from '../main.js';
import { logOut } from '../firebaseAuth.js';

export const home = () => {
  const homePage = document.createElement('div');

  const htmlNodes = '<button id="signOut">Cerrar sesión</button>';

  homePage.innerHTML = htmlNodes;

  homePage.querySelector('#signOut').addEventListener('click', () => logOut(onNavigate));
  return homePage;
};
