// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const Home = () => {
  const HomeDiv = document.createElement('div');
  const logo = document.createElement('img');
  const h1Presentation = document.createElement('h1');
  const inputEmail = document.createElement('input');
  const inputPassword = document.createElement('input');
  const buttonLogin = document.createElement('button');
  const buttonLoginGoogle = document.createElement('button');
  const buttonGoToRegister = document.createElement('button');

  logo.setAttribute('src', '../img/BeTheLight.png');
  h1Presentation.textContent = 'Be the light te ayuda a comunicarte y compartir la luz que ha sido depositada en ti con las personas que forman parte de tu comunidad';
  inputEmail.placeholder = 'Correo';
  inputPassword.placeholder = 'Contraseña';
  inputPassword.type = 'password';
  buttonLogin.textContent = 'INGRESAR';
  buttonLoginGoogle.textContent = 'Ingresa con tu cuenta de Google';
  buttonGoToRegister.textContent = '¿No tienes cuenta?  Registrate';

  buttonGoToRegister.addEventListener('click', () => onNavigate('/register'));

  h1Presentation.classList.add('Presentacion');
  inputEmail.classList.add('inputs');
  inputPassword.classList.add('inputs');
  buttonLogin.classList.add('inputs');
  buttonLoginGoogle.classList.add('inputs');

  buttonLoginGoogle.addEventListener('click', (event) => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    event.preventDefault();
    firebase.auth().signInWithRedirect(googleProvider).then(() => {
      window.location.assign('/profile');
    })
      .catch((error) => {
        console.error(error);
      });
  });
  HomeDiv.appendChild(logo);
  HomeDiv.appendChild(h1Presentation);
  HomeDiv.appendChild(inputEmail);
  HomeDiv.appendChild(inputPassword);
  HomeDiv.appendChild(buttonLogin);
  HomeDiv.appendChild(buttonLoginGoogle);
  HomeDiv.appendChild(buttonGoToRegister);

  return HomeDiv;
};
