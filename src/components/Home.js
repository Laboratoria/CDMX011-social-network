import { onNavigate } from '../main.js';

export const Home = () => {
    const HomeDiv = document.createElement('div');
    HomeDiv.className = 'Home'
    const buttonRegister = document.createElement('button');
    const buttonLogin = document.createElement('button');

    HomeDiv.textContent = 'ciclovida'

    buttonRegister.textContent = 'Regístrate';
    buttonLogin.textContent = 'Inicia sesión';

    buttonRegister.addEventListener('click', () => onNavigate('/Register'));
    buttonLogin.addEventListener('click', () => onNavigate('/Login'));

    HomeDiv.append(buttonRegister, buttonLogin);
    
    return HomeDiv;
};
