import { onNavigate } from '../routes.js';
import { register } from '../lib/fireBase.js';

export const toViewSignUp = (container) => {
    console.log("Estoy en signUp")
    const html = ` <section class="container signup-form">
    <img class="logo" src="img/PIC&ART.png" alt="logo">
    <form id="submitForm">
        <label value="username">User name</label><br>
        <input  type="text" placeholder="User name" /><br>
        <label value="email">E-mail*</label><br>
        <input id="singUpEmail" type="text" placeholder="e-mail" required/><br>
        <label value="password">Password*</label><br>
        <input id="singUpPassword" type="password" placeholder="Password" required/>
        <input id="viewPass" src="../img/pngegg.png" type="image">
        <p class="error red-text center-align"></p>
        <input type="submit" class="btn_log signup" value="SIGN UP" /><br>
        <p2>or </p2><br>
        <input type="button" class="btn_log google" value="Continue with Google" />
       
    </form>
    <a href="javascript:history.back();"> <img class="return" src="img/return.png" alt="logo" ></a>
</section>`;
    container.innerHTML = html

    document.getElementById("viewPass").addEventListener("click", (e) => {
        e.preventDefault();
        const inputType = document.getElementById("singUpPassword");
        inputType.type == "password" ? inputType.type = "text" : inputType.type = "password"
    });

    const singUpform = document.querySelector('#submitForm');
    singUpform.addEventListener('submit', (e) => {
        const email = document.querySelector('#singUpEmail').value;
        const password = document.querySelector('#singUpPassword').value;

        e.preventDefault();
        e.stopPropagation();
        console.log('estoy evitando el reset');
        console.log(email, password);

        register(email, password);
        onNavigate('/TimeLine')
    });
};