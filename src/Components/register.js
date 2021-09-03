// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { registerUser } from '../lib/firebase.js';

export const Register = () => {
  const registerDiv = document.createElement('div');
  const inputName = document.createElement('input');
  let inputEmail = document.createElement('input');
  let inputPassword = document.createElement('input');
  const buttonRegister = document.createElement('button');
  const buttonLoginGoogle = document.createElement('button');
  const buttonHome = document.createElement('button');

  inputName.placeholder = 'Nombre';
  inputEmail.placeholder = 'Correo';
  inputEmail.id = 'inputEmail';
  inputPassword.placeholder = 'Contraseña';
  inputPassword.type = 'password';
  inputPassword.id = 'inputPassword';
  buttonRegister.textContent = 'Registrate';
  buttonLoginGoogle.textContent = 'Registrate con tu cuenta Google';
  buttonHome.textContent = 'Regresar al Home';

  buttonHome.addEventListener('click', () => onNavigate('/'));

  buttonRegister.addEventListener('click', (event) => {
    inputEmail = document.getElementById('inputEmail').value;
    inputPassword = document.getElementById('inputPassword').value;
    event.preventDefault();
    registerUser(inputEmail, inputPassword);
  });

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

  registerDiv.appendChild(inputName);
  registerDiv.appendChild(inputEmail);
  registerDiv.appendChild(inputPassword);
  registerDiv.appendChild(buttonRegister);
  registerDiv.appendChild(buttonLoginGoogle);
  registerDiv.appendChild(buttonHome);

  return registerDiv;
};

// //Google Register
// //firebase.auth().signInWithRedirect(provider);
// //firebase.auth().signInWithRedirect(googleRegister);

// //Para acceder mediante el redireccionamiento a la página de acceso
// buttonLoginGoogle.addEventListener('click', (event) => {
//     const buttonLoginGoogle = document.createElement('button');
//     buttonLoginGoogle.textContent = 'Registrate con tu cuenta Google';
//     googleRegister(firebase.auth().signInWithRedirect(provider));
// });
