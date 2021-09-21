/* eslint-disable */

import { logIn } from '../lib/fireBase.js'
import { onNavigate } from '../routes.js';
export { onNavigate } from '../routes.js';

export const toViewLogIn = (container) => {
    //console.log('Estoy en LogIn');
    const html = ` 
    <div class = "homeContainer">
    <section class='container logIn-form'>
    <img class='logo' src='img/PIC&ART.png' alt='logo'>
    <form id='logInForm'>
        <br><label class="title" value='email'>E-mail</label>
        <input id='logInEmail' type='text' placeholder='e-mail' required/><br>
        <br><label class="title" value='password'>Password</label>
        <input id='logInPassword' type='password' placeholder='Password' required />
        <input src='../img/eye.png' id='viewPass' type='image' />
        <br>
        <br><input type='submit' class='btn_log login' id="btnLogIn" value='LOG IN' /><br>
        <p class="error"></p>
        <br>
    </form>
    <a href='javascript:history.back();'> <img class='return' src='img/return-logo.png' alt='logo'> Back </a>
    
</section>
</div>`;


    container.innerHTML = html


    const btnEye = document.getElementById('viewPass');
    
    btnEye.addEventListener('click', (e) => {
        e.preventDefault();
        const inputType = document.getElementById('logInPassword');
        if(inputType.type == 'password'){
            inputType.type = 'text';
            btnEye.src = "../img/hide.png";
        }else if(inputType.type = 'password') {
            btnEye.src = "../img/eye.png"
        }
        
    });
 
    const logInForm = document.querySelector('#logInForm');
    logInForm.addEventListener('submit', (e) => {
        //console.log('debug 1')

        const emailUser = document.querySelector('#logInEmail').value;
        const passwordUser = document.querySelector('#logInPassword').value;
        logIn(emailUser, passwordUser)
            .then(() => {
            //console.log('debug 2')
            onNavigate('/TimeLine');
            })
            .catch((error) => {
                const alertaError = error.message;
                document.querySelector('.error').innerHTML = `${alertaError}`;
            });

    });

    document.querySelector("#logInForm").addEventListener('submit', (e) => {
        e.preventDefault()
    });

}