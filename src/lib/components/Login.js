// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main.js';

export const Login = () => {
  const Homediv = document.createElement('div');
  Homediv.textContent = 'Inicia sesión';
  const username = document.createElement('input');
  username.placeholder = 'Email';
  const password = document.createElement('input');
  password.placeholder = 'Password';
  const buttonHome = document.createElement('button');
  const buttonGoogle = document.createElement('button');
  buttonGoogle.textContent = 'Continuar con Google';

  buttonHome.textContent = 'Regresar';
  buttonHome.addEventListener('click', () => onNavigate('/'));

  buttonGoogle.addEventListener('click', (event) => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    event.preventDefault();
    firebase.auth().signInWithRedirect(googleProvider).then(() => {
      window.location.assign('/Register');
    })
      .catch((error) => {
        console.error(error);
      });
  });

  Homediv.appendChild(username);
  Homediv.appendChild(password);
  Homediv.appendChild(buttonHome);
  Homediv.appendChild(buttonGoogle);

  return Homediv;
};
