/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/named
import { inicio } from './Componente2/Iniciar.js';
import { muro } from './Componente2/Muro.js';
import { registro } from './Componente2/Registro.js';

const rootDiv = document.getElementById('root');

const rutas = {
  '/': inicio,
  '/muro': muro,
  '/registro': registro,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );

  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }

  rootDiv.appendChild(rutas[pathname]());
};

const component = rutas[window.location.pathname];

window.onpopstate = () => {
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.firstChild);
  }
  rootDiv.appendChild(rutas[window.location.pathname]());
};

rootDiv.appendChild(component());
