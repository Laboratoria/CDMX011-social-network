// eslint-disable-next-line import/no-cycle
import { allFunctions } from '../lib/validFunc.js';
import { authUser, gmailAuth } from '../firebaseAuth.js';
import { onNavigate } from '../main.js';

export const register = () => {
  const registerPage = document.createElement('div');
  const htmlNodes = `<div class="registerPage">
  <header id="banner">
  <img id="logo" src="./imagenes/Imagen1.png">
  <h1 id="petFriends">Pet Friends</h1>
  </header>
  <form id="formContainer" action="#">
  <input id="email" type="email" placeholder="Ingresa tu correo electrónico" autofocus required="required">
  <h5 id="invalidEmail"></h5>
  <div class="eyeContainer">
  <input id="password" type="password" placeholder="Crea tu contraseña" required="required">
  <img class="openEye" src="./imagenes/openEye 1.png">
  <img class="closeEye" src="./imagenes/closeEye 1.png">
  </div>
  <input id="confirmPassword" placeholder="Confirma tu contraseña" required="required" type="password">
  <h5 id="invalidPassword"></h5>
  <h5 id="entryError"></h5>
  <button id="signIn">Registrar</button>
  <button id="signInGoogle">Continuar con Google<img id="logoGoogle" src="./imagenes/iconoGoogle.png"></button>
  </form>
  <div id="lastContainer">
  <h3 id="registerIn">¿Ya tienes una cuenta?</h3>
  <button id="routeButton">Entrar</button>
  </div>
  </div>`;

  registerPage.innerHTML = htmlNodes;

  let printEmail = '';
  let printPassword = '';

  registerPage.querySelector('#signIn').addEventListener('click', (e) => {
    e.preventDefault();
    const saveEmail = registerPage.querySelector('#email').value;
    const savedPassword = registerPage.querySelector('#password').value;
    const confirmSavedPassword = registerPage.querySelector('#confirmPassword').value;
    const validEmailFunc = allFunctions.validEmail(saveEmail);
    const validPasswordFunc = allFunctions.validPassword(savedPassword, confirmSavedPassword);

    if (validEmailFunc === false) {
      registerPage.querySelector('#invalidEmail').innerHTML = 'please enter a valid email'/*  'Favor de ingresar correo válido.' */;
    } else {
      printEmail = saveEmail;
    }

    if (validPasswordFunc === false) {
    // eslint-disable-next-line max-len
    //  registerPage.querySelector('#invalidPassword').innerHTML = 'Las contraseñas no coinciden o tienen menos de 6 caracteres';
    } else {
      printPassword = savedPassword;
    }
    authUser(printEmail, printPassword)
      .then(() => onNavigate('/home'))
      .catch((error) => {
        registerPage.querySelector('#entryError').innerHTML = error.message;
      });
  });

  registerPage.querySelector('.openEye').addEventListener('click', () => {
    registerPage.querySelector('.closeEye').style.visibility = 'visible';
    registerPage.querySelector('.openEye').style.visibility = 'hidden';
    const returnPassword = registerPage.querySelector('#password');
    if (returnPassword.type === 'password') {
      returnPassword.type = 'text';
    } else {
      returnPassword.type = 'password';
    }
  });
  registerPage.querySelector('.closeEye').addEventListener('click', () => {
    registerPage.querySelector('.closeEye').style.visibility = 'hidden';
    registerPage.querySelector('.openEye').style.visibility = 'visible';
    const returnPassword = registerPage.querySelector('#password');
    if (returnPassword.type === 'password') {
      returnPassword.type = 'text';
    } else {
      returnPassword.type = 'password';
    }
  });
  registerPage.querySelector('#signInGoogle').addEventListener('click', () => {
    gmailAuth(onNavigate);
  });
  registerPage.querySelector('#routeButton').addEventListener('click', () => onNavigate('/'));

  return registerPage;
};
