// Este es el punto de entrada de tu aplicacion

import { home } from './components/home.js';
import { register } from './components/register.js';
const routesDiv = document.getElementById("root");

const routes = {
    '/': home,
    '/register': register
};

const component=routes[window.location.pathname];

routesDiv.appendChild(component());