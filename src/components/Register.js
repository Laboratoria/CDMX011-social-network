import { onNavigate } from '../main.js'

export const Register = () => {
    const HomeDiv = document.createElement('div');
    HomeDiv.textContent = '¡Bienvenidx!, regístrate';
    
    const buttonHome = document.createElement('button');
    buttonHome.className = 'buttonRegister'
    
    buttonHome.textContent = 'Regresar a Home';

    buttonHome.addEventListener('click', () => onNavigate('/'));
    
    HomeDiv.appendChild(buttonHome);
    
    return HomeDiv;
};