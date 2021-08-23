/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const Home = () => {
        const HomeContainer = document.createElement("div");
        const buttonLogIn = document.createElement("button");
        const buttonSignUp = document.createElement("button");

        HomeContainer.textContent = "Share your ideas in the largest art community. Get inspired with different styles and genres around your country.";
        buttonLogIn.textContent = "Inicia sesión";
        buttonSignUp.textContent = "Regístrate";

        HomeContainer.classList.add("container");
        buttonLogIn.classList.add("btn_log");
        buttonSignUp.classList.add("btn_log");

        buttonSignUp.addEventListener("click", () => onNavigate("/signUp"));

        HomeContainer.appendChild(buttonLogIn);
        HomeContainer.appendChild(buttonSignUp);

        return HomeContainer;
    }
    // import { toViewSingUp } from './singUp.js';

// export const toViewHome = () => {
//   const mainDiv = document.createElement('div');
//   mainDiv.textContent = 'Regístrate';
//   const buttonRegister = document.createElement('button');
//   buttonRegister.textContent = 'Regístrate';

//   mainDiv.appendChild(buttonRegister);

//   return mainDiv;
// };

// toViewHome();
// export const toViewHome = `
//     <section class="container">
//         <img class="logo" src="img/PIC&ART.png" alt="logo">
//         <p>Share your ideas in the largest art community. Get inspired with different styles and genres around your country.
//         </p>
//         <input type="button" class="btn_log login" value="LOG IN" />
//         <input type="button" class="btn_log signup" value="SIGN UP" />
//         <p2>or</p2>
//         <input type="button" class="btn_log google" value="Continue with Google" />
//     </section>`;