import { onNavigate } from "../main.js";

export const  Login = () => {
    const HomeDiv = document.createElement('div');
    HomeDiv.textContent = '¡Bienvenidx!, incia sesión';
    const buttonHome = document.createElement('button');
    
    buttonHome.textContent = 'Regresar a Home';

    buttonHome.addEventListener('click', () => onNavigate('/'))
    
    HomeDiv.appendChild(buttonHome);
    
    return HomeDiv;
};
