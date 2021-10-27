import { onNavigate } from '../main.js'

export const Register = () => {
    const registerDiv = document.createElement('div');
    registerDiv.textContent = '¿Aún no tienes una cuenta? ¡Regístrate!';
    registerDiv.className = 'registerDiv'

    const buttonHome = document.createElement('button');
    buttonHome.className = 'buttonBackHome2'
    buttonHome.textContent = 'Regresar a Home';

    buttonHome.addEventListener('click', () => onNavigate('/'));

    const inputMail = document.createElement('input');
    inputMail.className = 'inputMail2'
    inputMail.setAttribute('placeholder', 'Correo electrónico');

    const inputPass = document.createElement('input');
    inputPass.setAttribute('placeholder', 'Contraseña');
    inputPass.className = 'inputPass2'

    const btnSubmit = document.createElement('button');
    btnSubmit.className = 'btnSubmit2';
    btnSubmit.textContent = 'Regístrarse'
    
    registerDiv.append(buttonHome, inputMail, inputPass,btnSubmit);
    
    return registerDiv;
};