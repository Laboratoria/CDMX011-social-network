// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../../main.js';
import { registerUser } from '../firebase.js';

export const Register = () => {
  const Homediv = document.createElement('div');
  Homediv.id = 'divRegister';
  const formRegister = document.createElement('form');
  formRegister.id = 'register-form';
  Homediv.textContent = 'Regístrate';
  const inputUserName = document.createElement('input');
  inputUserName.placeholder = 'Username';
  const inputEmail = document.createElement('input');
  inputEmail.placeholder = 'Email';
  inputEmail.id = 'email';
  inputEmail.setAttribute('type', 'email');
  const inputPass = document.createElement('input');
  inputPass.placeholder = 'Password';
  inputPass.id = 'password';
  inputPass.setAttribute('type', 'password');
  const confirmPass = document.createElement('input');
  confirmPass.placeholder = 'Confirm Password';
  confirmPass.setAttribute('type', 'password');
  confirmPass.id = 'confirm-pass';
  const buttonHome = document.createElement('button');
  buttonHome.textContent = 'Regresar';
  const buttonAceptar = document.createElement('button');
  buttonAceptar.textContent = 'Aceptar';
  const buttonGoogle = document.createElement('button');
  buttonGoogle.textContent = 'Continuar con Google';

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
    const emailRegister = document.getElementById('email');
    const passwordRegister = document.getElementById('password');
    e.preventDefault();
    registerUser(emailRegister, passwordRegister);
    onNavigate('/login');
  });

  Homediv.appendChild(inputUserName);
  Homediv.appendChild(inputEmail);
  Homediv.appendChild(inputPass);
  Homediv.appendChild(confirmPass);
  Homediv.appendChild(buttonAceptar);
  Homediv.appendChild(buttonGoogle);
  Homediv.appendChild(buttonHome);

  return Homediv;
};
