import { onNavigate } from "../main.js";

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
    email.setAttribute('placeholder', 'Ingresa tu correo electrónico');
    const password = document.createElement('input');
    password.setAttribute('id', 'password');
    password.setAttribute('placeholder', 'Crea tu contraseña');
    const confirmPassword = document.createElement('input');
    confirmPassword.setAttribute('id', 'confirmPassword');
    confirmPassword.setAttribute('placeholder', 'Confirma tu contraseña');
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

    registerPage.appendChild(banner);
    banner.appendChild(logo);
    banner.appendChild(petFriends);
    registerPage.appendChild(formContainer);
    formContainer.appendChild(email);
    formContainer.appendChild(password);
    formContainer.appendChild(confirmPassword);
    formContainer.appendChild(signIn);
    formContainer.appendChild(signInGoogle);
    signInGoogle.appendChild(logoGoogle);
    registerPage.appendChild(loginContainer);
    loginContainer.appendChild(loginText);
    loginContainer.appendChild(loginButton);

    return registerPage;
}