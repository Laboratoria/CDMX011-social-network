import { onNavigate } from '../../main.js';

export const Home = () => {
    const Homediv = document.createElement('div');
    const labelWelcome = document.createElement('label');
    const buttonRegister = document.createElement('button');
    const buttonLogin = document.createElement('button');
    const labelOr = document.createElement('label');
    const buttonGoogle = document.createElement('button');

    labelWelcome.textContent = 'Bienvenid@';
    buttonRegister.textContent = 'Regístrate';
    buttonLogin.textContent = 'Iniciar Sesión';
    labelOr.textContent = 'o';
    buttonGoogle.textContent = 'Continuar con Google';

    buttonRegister.addEventListener('click', () => onNavigate('/register'));
    buttonLogin.addEventListener('click', () => onNavigate('/login'));

    Homediv.appendChild(labelWelcome);
    Homediv.appendChild(buttonRegister);
    Homediv.appendChild(buttonLogin);
    Homediv.appendChild(labelOr);
    Homediv.appendChild(buttonGoogle);

    return Homediv;
}; 