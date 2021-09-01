/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const SignUp = () => {
        const SignUpContainer = document.createElement("div");
        const buttonSignUp = document.createElement("button");
        const buttonHome = document.createElement("button");

        SignUpContainer.textContent = "Crea tu cuenta";
        buttonHome.textContent = "Regresar";
        buttonSignUp.textContent = "Regístrate";

        buttonHome.addEventListener("click", () => onNavigate("/"));

        SignUpContainer.appendChild(buttonHome);
        SignUpContainer.appendChild(buttonSignUp);

        return SignUpContainer;
    }
    // import { onNavigate } from '../main.js';

// export const toViewSingUp = (container) => {
//   const html = ` <section class="container signup-form">
//     <img class="logo" src="img/PIC&ART.png" alt="logo">
//     <form id="submitForm">
//         <label value="username">User name</label><br>
//         <input  type="text" placeholder="User name" /><br>
//         <label value="email">E-mail</label><br>
//         <input id="singUpEmail" type="text" placeholder="e-mail" /><br>
//         <label value="password">Password</label><br>
//         <input id="singUpPassword" type="password" placeholder="Password" /><br>
//         <input type="submit" class="btn_log signup" value="SIGN UP" /><br>
//         <p2>or </p2><br>
//         <input type="button" class="btn_log google" value="Continue with Google" />
//     </form>
// </section>`;
//   container.innerHtml = html;
//   const singUpform = document.querySelector('#submitForm');
//   singUpform.addEventListener('submit', (e) => {
//     const email = document.querySelector('#singUpEmail').value;
//     const password = document.querySelector('#singUpPassword').value;

//     e.preventDefault();
//     console.log('estoy evitando el reset');
//     console.log(email + password);

//     register(email, password);

//     singUpform.reset();
//   });
// };