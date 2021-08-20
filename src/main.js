// Este es el punto de entrada de tu aplicacion

import { toViewHome } from './components/Home.js';
import { toViewSingUp } from './components/singUp.js';

const rootDiv = document.getElementById('root');

export const routes = {
  '/': toViewHome,
  '/singUp': toViewSingUp,
};
console.log(routes);

// const component = routes[window.location.pathname];
// rootDiv.innerHTML(component());

export const onNavigate = (pathname) => {
  
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  );
  const component = routes[pathname]
  component(rootDiv);
};

// aqui tu codigo
// console.log('Hola mundo!');
