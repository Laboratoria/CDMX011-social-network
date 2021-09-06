import { onNavigate } from '../main.js';

export const login = () => {
  const loginPage = document.createElement('div');
  const htmlLogin = `<div class="loginPage">
  <header id="banner"><img id="logo" src="./imagenes/Imagen1.png">
  <h1 id="petFriends">Pet Friends</h1></header><form id="formContainer">
  <input id="email" placeholder="Correo electrónico">
  <input id="password" placeholder="Contraseña" type="password">
  <button id="signIn">Iniciar sesión</button>
  <button id="signInGoogle">Continuar con Google<img id="logoGoogle" src="./imagenes/iconoGoogle.png"></button>
  </form><div id="lastContainer">
  <h3 id="registerIn">¿No tienes una cuenta?</h3>
  <button id="registerButton">Regístrate</button>
  </div>
  </div>`;
  loginPage.innerHTML = htmlLogin;

  loginPage.querySelector('#registerButton').addEventListener('click', () => onNavigate('/register'));
  loginPage.querySelector('#signIn').addEventListener('click', () => onNavigate('/home'));
  /*
  signIn.addEventListener('click', () => {
     const saveEmail = email.value;
    const savePassword = password.value;
  }); */
  return loginPage;
};
