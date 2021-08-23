import { routes } from "./routes.js";

const rootDiv = document.getElementById('root');
const ViewFunction = routes[window.location.pathname];
ViewFunction(rootDiv);

// import { toViewHome } from './components/Home.js';
// import { toViewSingUp } from './components/singUp.js';

// const rootDiv = document.getElementById('root');

// export const routes = {
//   '/': toViewHome,
//   '/singUp': toViewSingUp,
// };

// //rootDiv.innerHTML = routes[window.location.pathname];
// //rootDiv.innerHTML(component());

// export const onNavigate = (pathname) => {

//   window.history.pushState(
//     {},
//     pathname,
//     window.location.origin + pathname
//   );
//   const component = routes[pathname]
//   component(rootDiv);
// };

// window.onpopstate = () => {
//   const component = routes[window.location.pathname];
//   component(rootDiv);
// };

// // aqui tu codigo
// // console.log('Hola mundo!');
// let currentPathname = window.location.pathname;
// onNavigate(currentPathname);