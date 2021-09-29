// Este es el punto de entrada de tu aplicacion
import { login } from './components/login.js';
import { register } from './components/register.js';
import { home } from './components/home.js';
import { stateCheck } from './firebaseAuth.js';

const routesDiv = document.getElementById('root');

const routes = {
  '/': login,
  '/register': register,
  '/home': home,
};

// este export es para ir de Home a Registro
export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  while (routesDiv.firstChild) {
    routesDiv.removeChild(routesDiv.firstChild);
  }
  routesDiv.appendChild(routes[pathname]());
};
const component = routes[window.location.pathname];

stateCheck().onAuthStateChanged((user) => {
  if (user) {
    onNavigate('/home');
  } else {
    onNavigate('/');
  }
});

window.onpopstate = () => {
  while (routesDiv.firstChild) {
    routesDiv.removeChild(routesDiv);
  }
  routesDiv.appendChild(routes[window.location.pathname]());
};

routesDiv.appendChild(component());

// este export es para ir de Registro a Home
