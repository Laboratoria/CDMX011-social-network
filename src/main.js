// eslint-disable-next-line import/no-cycle
import { inicio } from './components/iniciar.js';
// eslint-disable-next-line import/no-cycle
import { muro } from './components/muro.js';
// eslint-disable-next-line import/no-cycle
import { registro } from './components/registro.js';

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
  // devuelve la ruta
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
