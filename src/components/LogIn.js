/* eslint-disable */

import { logIn } from '../lib/fireBase.js'
import { onNavigate } from '../routes.js';
export { onNavigate } from '../routes.js';


export const toViewLogIn = (container) => {


    console.log('Estoy en LogIn');
    const html = ` 
    <div class = "homeContainer">
    <section class='container logIn-form'>
    <img class='logo' src='img/PIC&ART.png' alt='logo'>
    <form id='logInForm'>
        <br><label class="title" value='email'>E-mail</label>
        <input id='logInEmail' type='text' placeholder='e-mail' required/><br>
        <br><label class="title" value='password'>Password</label>
        <input id='logInPassword' type='password' placeholder='Password' required />
        <input src='../img/eye.png' id='viewPass' type='image' /><br>
        <input src='../img/hide.png' id='hidePass' display='block' type='image' /><br>
        <br><input type='submit' class='btn_log login' value='LOG IN' /><br>
       
        <p class="error"></>
        
        <br>
    </form>
    <a href='javascript:history.back();'> <img class='return' src='img/return-logo.png' alt='logo'> Back </a>
    
</section>
</div>`;

    container.innerHTML = html

    document.getElementById('viewPass').addEventListener('click', (e) => {
        e.preventDefault();
        const inputType = document.getElementById('logInPassword');
        inputType.type == 'password' ? inputType.type = 'text' : inputType.type = 'password';

        // if(inputType.type === text){
        //     btnHide.style.display = 'visible';  
        //     btnEye.style.display = 'hidden';
        // } else {
        //     btnHide.style.display = 'hidden';  
        //     btnEye.style.display = 'visible';
        // }
    });
    function mostrarBoton() {
        const btnEye = document.getElementById('viewPass');
        const btnHide = document.getElementById('hidePass');
        btnEye.style.display = 'none';
        btnHide.style.display = 'inline';
    }


    const logInForm = document.querySelector('#logInForm');
    logInForm.addEventListener('submit', (e) => {
        const emailUser = document.querySelector('#logInEmail').value;
        const passwordUser = document.querySelector('#logInPassword').value;
        logIn(emailUser, passwordUser)
            .then(() => {
            onNavigate('/TimeLine');
            })
            .catch((error) => {
                const alertaError = error.message;
                document.querySelector('.error').innerHTML = `${alertaError}`;
            });
    });

    document.querySelector("#logInForm").addEventListener('submit', (e) => {
        e.preventDefault()
        console.log("estoy evitando el reset")
        //onNavigate('/TimeLine')
    });



    //logInForm.reset();

    //singUpform.querySelector(".error").innerHTML = register.catch;


}