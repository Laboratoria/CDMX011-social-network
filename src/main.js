import { Login } from './components/Login.js';
import { Register } from './components/Register.js';
import { Wall } from './components/Wall.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Login,
  '/register': Register,
  '/wall': Wall,
};

export const onNavigate = (pathname) => {
  // Cambia la ruta de la barra de direcciones actual
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  // Actualiza el contenido de la página
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.lastChild);
  }

  rootDiv.appendChild(routes[pathname]());
  // routes['/wall']  >  Wall()
};

const component = routes[window.location.pathname];

window.addEventListener('popstate', () => {
  // Actualiza el contenido de la página
  while (rootDiv.firstChild) {
    rootDiv.removeChild(rootDiv.lastChild);
  }
  rootDiv.appendChild(component());
});

// window.onload = () => {
//   rootDiv.appendChild(component());
// };

// Mantener la sesion activa
firebase.auth().onAuthStateChanged((user) => {
  let pathname = window.location.pathname;
  // Verifica si usuario esta logueado
  if (user) {
    pathname = '/wall';
  } else {
    pathname = '/';
  }
  // Para actualizar la pagina
  onNavigate(pathname);
});
