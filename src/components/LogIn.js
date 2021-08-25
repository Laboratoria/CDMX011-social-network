/* eslint-disable */

import { logIn } from '../lib/fireBase.js'
import { onNavigate } from '../routes.js';
export { onNavigate } from '../routes.js';


export const toViewLogIn = (container) => {

    console.log("Estoy en LogIn");
    const html = ` <section class="container logIn-form">
    <img class="logo" src="img/PIC&ART.png" alt="logo">
    <form id="logInForm">
        <br><label value="email">E-mail</label><br>
        <input id="logInEmail" type="text" placeholder="e-mail" required/><br>
        <label value="password">Password</label><br>
        <input id="logInPassword" type="password" placeholder="Password" required />
        <input src="../img/pngegg.png" id="viewPass" type="image" />
        <input type="submit" class="btn_log signup" value="LOG IN" /><br>
        <p2>or</p2><br>
        <input type="button" class="btn_log google" value="Continue with Google" />

        <br>
    </form>
    <a href='javascript:history.back();'> <img class='return' src='img/return.png' alt='logo'   ></a>
    
</section>`;

    container.innerHTML = html

    document.getElementById('viewPass').addEventListener('click', (e) => {
        e.preventDefault();
        const inputType = document.getElementById('logInPassword');
        inputType.type == 'password' ? inputType.type = 'text' : inputType.type = 'password';
    });


    const logInForm = document.querySelector('#logInForm');
    logInForm.addEventListener('submit', (e) => {
        const emailUser = document.querySelector('#logInEmail').value;
        const passwordUser = document.querySelector('#logInPassword').value;
        logIn(emailUser, passwordUser);
    })
    document.querySelector("#logInForm").addEventListener('submit', (e) =>{
        e.preventDefault()
        console.log("estoy evitando el reset")
        //onNavigate('/TimeLine')
    })

      

        //logInForm.reset();

        //singUpform.querySelector(".error").innerHTML = register.catch;
    

}
