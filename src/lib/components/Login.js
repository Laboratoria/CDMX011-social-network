import { onNavigate } from "../../main.js"; 

export const Login = () => {
    const Homediv = document.createElement('div');
    Homediv.textContent = 'Inicia sesión';
    const username = document.createElement('input');
    username.textContent = 'Email';
    const password = document.createElement('input');
    password.textContent = 'Password';
    const buttonHome = document.createElement('button');

    buttonHome.textContent = 'Regresar';
    buttonHome.addEventListener('click', () => onNavigate('/'));

    Homediv.appendChild(buttonHome);
    Homediv.appendChild(username);
    Homediv.appendChild(password);
    return Homediv;
}; 