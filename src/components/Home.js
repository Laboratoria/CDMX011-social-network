/* eslint-disable */

import { onNavigate } from "../routes.js";

export const toViewHome = (container) => {
    console.log("estoy en home");
    const html = `
       <section class='container'>
        <img class='logo' src='img/PIC&ART.png' alt='logo'>
            <div class='content'>
                <p>Share your ideas in the largest art community. Get inspired with different styles and genres around your country.
                </p>
                <input type='button' class='btn_log login' value='LOG IN' id='toLogIn' />
                <input type='button' class='btn_log signup' value='SIGN UP' id='toCreate' />
                <br><p2>──────  or  ──────</p2>
                <br><input type='button' class='btn_log google' value='Continue with Google' />
            </div>
        </section>`;

    container.innerHTML = html;
    const toCreate = document.getElementById('toCreate');
    toCreate.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/signUp');
    });
    const toLogIn = document.getElementById('toLogIn');
    toLogIn.addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/LogIn');
    });
};