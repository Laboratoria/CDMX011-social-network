// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main.js';
import { LoginUser } from '../firebase.js';

export const Login = () => {
  const Homediv = document.createElement('div');
  Homediv.textContent = 'Inicia sesión';
  const username = document.createElement('input');
  username.placeholder = 'Email';
  username.setAttribute('type', 'email');
  const password = document.createElement('input');
  password.placeholder = 'Password';
  password.setAttribute('type', 'password');
  const buttonHome = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  buttonGoogle.textContent = 'Continuar con Google';
  const buttonAceptar = document.createElement('button');
  buttonAceptar.textContent = 'Aceptar';

  buttonHome.textContent = 'Regresar';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  buttonGoogle.addEventListener('click', (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
      .then(() => {
        window.location.assign('/wall');
        console.log('sign up with google');
      })
      .catch((error) => {
        console.error(error);
      });
  });

  buttonAceptar.addEventListener('click', (e) => {
    const emailLogin = document.getElementById('email');
    const passwordLogin = document.getElementById('password');
    e.preventDefault();
    LoginUser(emailLogin, passwordLogin);
  });

  Homediv.appendChild(username);
  Homediv.appendChild(password);
  Homediv.appendChild(buttonAceptar);
  Homediv.appendChild(buttonGoogle);
  Homediv.appendChild(buttonHome);

  return Homediv;
};
