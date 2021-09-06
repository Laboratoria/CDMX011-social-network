// eslint-disable-next-line import/no-cycle
import { allFunctions } from '../lib/registerFunc.js';
import { authUser, gmailAuth } from '../firebaseAuth.js';

export const register = () => {
  const loginPage = document.createElement('div');
  const htmlNodes = `<div class="registerPage">
  <header id="banner">
  <img id="logo" src="./imagenes/Imagen1.png">
  <h1 id="petFriends">Pet Friends</h1>
  </header>
  <form id="formContainer" action="#">
  <input id="email" type="email" placeholder="Ingresa tu correo electrónico" required="required">
  <h5 id="invalidEmail"></h5>
  <div class="eyeContainer">
  <input id="password" type="password" placeholder="Crea tu contraseña" required="required">
  <img class="openEye" src="./imagenes/openEye 1.png">
  </div>
  <input id="confirmPassword" placeholder="Confirma tu contraseña" required="required" type="password">
  <h5 id="invalidPassword"></h5>
  <button id="signIn">Registrar</button>
  <button id="signInGoogle">Continuar con Google<img id="logoGoogle" src="./imagenes/iconoGoogle.png"></button>
  </form>
  <div id="lastContainer">
  <h3 id="registerIn">¿Ya tienes una cuenta?</h3>
  <button id="registerButton">Entrar</button>
  </div>
  </div>`;

  loginPage.innerHTML = htmlNodes;

  let printEmail = '';
  let printPassword = '';

  loginPage.querySelector('#signIn').addEventListener('click', (e) => {
    e.preventDefault();
    const saveEmail = loginPage.querySelector('#email').value;
    const savedPassword = loginPage.querySelector('#password').value;
    const confirmSavedPassword = loginPage.querySelector('#confirmPassword').value;
    const validEmailFunc = allFunctions.validEmail(saveEmail);
    const validPasswordFunc = allFunctions.validPassword(savedPassword, confirmSavedPassword);

    if (validEmailFunc === false) {
      loginPage.querySelector('#invalidEmail').innerHTML = 'Favor de ingresar correo válido.';
    } else {
      printEmail = saveEmail;
    }

    if (validPasswordFunc === false) {
      loginPage.querySelector('#invalidPassword').innerHTML = 'Las contraseñas no coinciden o tienen menos de 6 caracteres';
    } else {
      printPassword = savedPassword;
    }

    /* console.log(printEmail);
    console.log(printPassword);  */

    authUser(printEmail, printPassword);
  });

  loginPage.querySelector('.openEye').addEventListener('click', () => {
    const returnPassword = loginPage.querySelector('#password');
    if (returnPassword.type === 'text') {
      returnPassword.type = 'password';
    } else {
      returnPassword.type = 'text';
    }
  });
  loginPage.querySelector('#signInGoogle').addEventListener('click', () => {
    gmailAuth();
  });

  return loginPage;
};
