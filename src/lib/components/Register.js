import { onNavigate } from "../../main.js"; 


export const Register = () => {
    const Homediv = document.createElement('div');
    Homediv.textContent = 'Regístrate';
    const inputUserName = document.createElement('input');
    inputUserName.textContent = 'Username';
    const inputEmail = document.createElement('input');
    inputEmail.textContent = 'Email';
    const inputPass = document.createElement('input');
    inputPass.textContent = 'Password';
    const buttonHome = document.createElement('button');
    buttonHome.textContent = 'Regresar';
    const buttonAceptar = document.createElement('button');
    buttonAceptar.textContent = 'Aceptar';

    buttonHome.addEventListener('click', () => onNavigate('/'));

    Homediv.appendChild(inputUserName);
    Homediv.appendChild(inputEmail);
    Homediv.appendChild(inputPass);
    Homediv.appendChild(buttonAceptar);
    Homediv.appendChild(buttonHome);

    return Homediv;
}; 

