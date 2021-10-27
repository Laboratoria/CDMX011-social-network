import { onNavigate } from "../main.js";

export const  Login = () => {
    const loginDiv = document.createElement('div');
    loginDiv.textContent = '¡Hola de nuevo!';
    loginDiv.className = 'loginDiv';

    const buttonHome = document.createElement('button');
    buttonHome.className = 'buttonBackHome';
    buttonHome.textContent = 'Regresar a Home';

    buttonHome.addEventListener('click', () => onNavigate('/'));

    const inputMail = document.createElement('input');
    inputMail.className = 'inputMail'
    inputMail.setAttribute('placeholder', 'Correo electrónico');

    const inputPass = document.createElement('input');
    inputPass.setAttribute('placeholder', 'Contraseña');
    inputPass.className = 'inputPass'

    const btnSubmit = document.createElement('button');
    btnSubmit.className = 'btnSubmit';
    btnSubmit.textContent = 'Iniciar sesión'

    loginDiv.append(buttonHome, inputMail, inputPass, btnSubmit)

    return loginDiv;
};





// btnSubmit.addEventListener('click', () => onNavigate('/Wall'));

    //funcion firebase en doc lib
    // disparar el evento en el boton enviar ahí disparara la funcion firebase


    // se llama por el id con queryselector haciendo referencia a su papá
    // const htmlForm = `<form id="formLogin">
    // <input id="email" placeholder="Correo electrónico">
    // <input id="password" placeholder="Contraseña"><button type=></button>
    // </form>`

    // loginDiv.innerHTML = htmlForm;