// eslint-disable-next-line import/no-cycle
import { Home } from './Components/home.js';
import { Register } from './Components/register.js';

const rootDiv = document.getElementById('root');

const routes = {
  '/': Home,
  '/register': Register,

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
  rootDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  rootDiv.appendChild(component());
};

const component = routes[window.location.pathname];

rootDiv.appendChild(component());
