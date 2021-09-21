/* eslint-disable */
// Aquí se renderizan todas las rutas//

import { routes } from './routes.js';

const rootDiv = document.getElementById('root');
const ViewFunction = routes[window.location.pathname];
ViewFunction(rootDiv);

