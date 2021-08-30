import { Home } from './lib/components/Home.js';
import { Register } from './lib/components/Register.js';
import { Login } from './lib/components/Login.js';

const rootDiv = document.getElementById('root');


const routes = {
    '/' : Home,
    '/ register': Register,
    '/login' : Login,
};

const components = routes[window.location.pathname];
rootDiv.appendChild(components());
