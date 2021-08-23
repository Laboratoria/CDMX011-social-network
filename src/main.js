// Este es el punto de entrada de tu aplicacion
import { Home } from './components/Home.js';
import { SignUp } from './components/signUp.js';
import { LogIn } from './components/LogIn.js';

const rootDiv = document.getElementById('root');

const routes = {
    '/': Home,
    '/signUp': SignUp,
    '/logIn': LogIn,
};

const component = routes[window.location.pathname];
rootDiv.appendChild(component());

export const onNavigate = (pathname) => {
    window.history.pushState({},
        pathname,
        window.location.origin + pathname
    );
    while (rootDiv.firstChild) {
        rootDiv.removeChild(rootDiv.firstChild);
    };
    rootDiv.appendChild(routes[pathname]());
};

// component(rootDiv);
// //console.log(routes);

// rootDiv.innerHTML(component()); = routes[window.location.pathname];
// // rootDiv.innerHTML(component());

// aqui tu codigo
// console.log('Hola mundo!');