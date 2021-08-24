import { toViewHome } from './components/Home.js';
import { toViewSignUp } from './components/signUp.js';
import { toViewLogIn} from './components/LogIn.js';


const rootDiv = document.getElementById('root');

export const routes = {
  '/': toViewHome,
  '/signUp': toViewSignUp,
  '/LogIn': toViewLogIn,
};


export const onNavigate = (pathname) => {
  
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname
  );
  const component = routes[pathname]
  component(rootDiv);
}

window.onpopstate = () => {
  const component = routes[window.location.pathname]
  component(rootDiv);
}
