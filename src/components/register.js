import { onNavigate } from '../main.js';
import { allFunctions } from '../lib/registerFunc.js';
import { authUser, gmailAuth } from '../firebaseAuth.js';

export const register = () => {
  const registerPage = document.createElement('div');
  registerPage.classList.add('registerPage');
  const banner = document.createElement('header');
  banner.setAttribute('id', 'banner');
  const petFriends = document.createElement('h1');
  petFriends.setAttribute('id', 'petFriends');
  petFriends.textContent = 'Pet Friends';
  const logo = document.createElement('img');
  logo.setAttribute('id', 'logo');
  logo.src = './imagenes/Imagen1.png';

  const email = document.createElement('input');
  email.setAttribute('id', 'email');
  email.setAttribute('type', 'email');
  email.setAttribute('placeholder', 'Ingresa tu correo electrónico');
  email.setAttribute('required', 'required');
  const invalidEmail = document.createElement('h5');
  invalidEmail.setAttribute('id', 'invalidEmail');
  const eyeContainer = document.createElement('div');
  eyeContainer.setAttribute('class', 'eyeContainer');
  const password = document.createElement('input');
  password.setAttribute('id', 'password');
  password.setAttribute('type', 'password');
  password.setAttribute('placeholder', 'Crea tu contraseña');
  password.setAttribute('required', 'required');
  const openEye = document.createElement('img');
  openEye.setAttribute('class', 'openEye');
  openEye.src = './imagenes/openEye 1.png';
  const confirmPassword = document.createElement('input');
  confirmPassword.setAttribute('id', 'confirmPassword');
  confirmPassword.setAttribute('placeholder', 'Confirma tu contraseña');
  confirmPassword.setAttribute('required', 'required');
  confirmPassword.setAttribute('type', 'password');
  const closedEye = document.createElement('img');
  closedEye.setAttribute('class', 'closedEye');
  closedEye.src = './imagenes/closeEye 1.png';
  const invalidPassword = document.createElement('h5');
  invalidPassword.setAttribute('id', 'invalidPassword');
  const signIn = document.createElement('button');
  signIn.setAttribute('id', 'signIn');
  signIn.textContent = 'Registrar';
  const signInGoogle = document.createElement('button');
  signInGoogle.setAttribute('id', 'signInGoogle');
  signInGoogle.textContent = 'Continuar con Google';
  const logoGoogle = document.createElement('img');
  logoGoogle.setAttribute('id', 'logoGoogle');
  logoGoogle.src = './imagenes/iconoGoogle.png';

  const loginText = document.createElement('h3');
  loginText.setAttribute('id', 'registerIn');
  loginText.textContent = '¿Ya tienes una cuenta?';
  const loginButton = document.createElement('button');
  loginButton.setAttribute('id', 'registerButton');
  loginButton.textContent = 'Entrar';
  loginButton.addEventListener('click', () => onNavigate('/'));
  const loginContainer = document.createElement('div');
  loginContainer.setAttribute('id', 'lastContainer');
  const formContainer = document.createElement('form');
  formContainer.setAttribute('id', 'formContainer');
  formContainer.setAttribute('action', '#');

  registerPage.appendChild(banner);
  banner.appendChild(logo);
  banner.appendChild(petFriends);
  registerPage.appendChild(formContainer);
  formContainer.appendChild(email);
  formContainer.appendChild(invalidEmail);
  formContainer.appendChild(eyeContainer);
  eyeContainer.appendChild(password);
  eyeContainer.appendChild(openEye);
  formContainer.appendChild(confirmPassword);
  formContainer.appendChild(invalidPassword);
  formContainer.appendChild(signIn);
  formContainer.appendChild(signInGoogle);
  signInGoogle.appendChild(logoGoogle);
  registerPage.appendChild(loginContainer);
  loginContainer.appendChild(loginText);
  loginContainer.appendChild(loginButton);
  
  let printEmail = '';
  let printPassword = '';

  signIn.addEventListener('click', () => {
    const saveEmail = email.value;
    const savedPassword = password.value;
    const confirmSavedPassword = confirmPassword.value;
    const validEmailFunc = allFunctions.validEmail(saveEmail);
    const validPasswordFunc = allFunctions.validPassword(savedPassword, confirmSavedPassword);

    if (validEmailFunc === false) {
      invalidEmail.innerHTML = 'Favor de ingresar correo válido.';
    } else {
      printEmail = saveEmail;
    }

    if (validPasswordFunc === false) {
      invalidPassword.innerHTML = 'Las contraseñas no coinciden o tienen menos de 6 caracteres';
    } else {
      printPassword = savedPassword;
    }

    console.log(printEmail);
    console.log(printPassword);
    authUser(printEmail, printPassword);
  });

  openEye.addEventListener('click', () => {
    if (password.type === 'text') {
      password.type = 'password';
    } else {
      password.type = 'text';
    }
  });
  signInGoogle.addEventListener('click', () => {
    gmailAuth();
  });

  return registerPage;
};
