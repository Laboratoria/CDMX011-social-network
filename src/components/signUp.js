/* eslint-disable */
import { onNavigate } from '../routes.js';
import { register } from '../lib/fireBase.js';

export const toViewSignUp = (container) => {
    console.log('Estoy en signUp');
    const html = ` <section class='container signup-form'>
    <img class='logo' src='img/PIC&ART.png' alt='logo'>
    <form id='submitForm'>
        <br><label value='email'>E-mail*</label>
        <input id='singUpEmail' type='text' placeholder='e-mail' required/><br>
        <br><label value='password'>Password*</label>
        <input id='singUpPassword' type='password' placeholder='Password' required/>
        <input id='viewPass' src='../img/eye.png' type='image'/>
        <br><input type='submit' class='btn_log signup' value='SIGN UP' /><br>
        <p class="error"></p>
      
        
       <br>
       <br>
    </form>
    <a href='javascript:history.back();'> <img class='return' src='img/return-logo.png' alt='logo' > Back </a>
</section>`;
    container.innerHTML = html

    document.getElementById('viewPass').addEventListener('click', (e) => {
        e.preventDefault();
        const inputType = document.getElementById('singUpPassword');
        inputType.type == 'password' ? inputType.type = 'text' : inputType.type = 'password';
    });

    const singUpform = document.querySelector('#submitForm');
    singUpform.addEventListener('submit', (e) => {
        const email = document.querySelector('#singUpEmail').value;
        const password = document.querySelector('#singUpPassword').value;

        e.preventDefault();
        e.stopPropagation();
        console.log('estoy evitando el reset');
        console.log(email, password);

        register(email, password)
            .then(() => {
                console.log('then');
                onNavigate('/TimeLine');
            })
            .catch((error) => {
                const alertaError = error.message;
                document.querySelector('.error').innerHTML = `${alertaError}`;
                console.log(error.message);
            });
    });
};