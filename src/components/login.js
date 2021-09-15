import { onNavigate } from '../main.js';
import { allFunctions } from '../lib/validFunc.js';
import { signIn, gmailAuth, persistence } from '../firebaseAuth.js';

export const login = () => {
  const loginPage = document.createElement('div');
  const htmlLogin = `<div class="loginPage">
  <header id="banner"><img id="logo" src="./imagenes/Imagen1.png">
  <h1 id="petFriends">Pet Friends</h1></header>
  <form id="formContainer">
  <input id="email" placeholder="Correo electrónico">
  <h5 id="invalidEmail"></h5>
  <div class="eyeContainer">
  <input id="password" type="password" placeholder="Contraseña" required="required">
  <img class="openEye" src="./imagenes/openEye 1.png">
  </div>
  <h5 id="entryError"></h5>
  <button id="signIn">Iniciar sesión</button>
  <button id="signInGoogle">Continuar con Google<img id="logoGoogle" src="./imagenes/iconoGoogle.png"></button>
  </form><div id="lastContainer">
  <h3 id="registerIn">¿No tienes una cuenta?</h3>
  <button id="routeButton">Regístrate</button>
  </div>
  </div>`;

  loginPage.innerHTML = htmlLogin;
  let savedPassword = '';
  let printEmail = '';
  loginPage.querySelector('#signIn').addEventListener('click', (e) => {
    e.preventDefault();
    const saveEmail = loginPage.querySelector('#email').value;
    savedPassword = loginPage.querySelector('#password').value;
    const validEmailFunc = allFunctions.validEmail(saveEmail);
    if (validEmailFunc === false) {
      loginPage.querySelector('#invalidEmail').innerHTML = 'Favor de ingresar correo válido.';
    } else {
      printEmail = saveEmail;
    }
    signIn(printEmail, savedPassword)
      .then(() => {
        onNavigate('/home');
        console.log('Estas logueada');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        loginPage.querySelector('#entryError').innerHTML = 'Verifica los datos ingresados';
      });
    /* console.log(persistance(printEmail, savedPassword)); */// console.log(printEmail);
  });
  /* loginPage.querySelector('#email').addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/home');
  }); */
  persistence(signIn);

  loginPage.querySelector('.openEye').addEventListener('click', () => {
    const returnPassword = loginPage.querySelector('#password');
    if (returnPassword.type === 'text') {
      returnPassword.type = 'password';
    } else {
      returnPassword.type = 'text';
    }
  });
  loginPage.querySelector('#routeButton').addEventListener('click', () => onNavigate('/register'));

  loginPage.querySelector('#signInGoogle').addEventListener('click', () => {
    gmailAuth(onNavigate);
  });

  return loginPage;
};
