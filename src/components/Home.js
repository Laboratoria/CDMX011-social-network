import { onNavigate } from '../main.js';
import { toViewSingUp } from './singUp.js';

export const toViewHome = () => {
  const mainDiv = document.createElement('div');
  mainDiv.textContent = 'Regístrate';
  const buttonRegister = document.createElement('button');
  buttonRegister.textContent = 'Regístrate';

  mainDiv.appendChild(buttonRegister);

  return mainDiv;
};

toViewHome();
// export const toViewHome = (container) => {
//   const html = `
//     <section class="container">
//         <img class="logo" src="img/PIC&ART.png" alt="logo">
//         <p>Share your ideas in the largest art community. Get inspired with different styles and genres around your country.
//         </p>
//         <input type="button" class="btn_log login" value="LOG IN" />
//         <input type="button" class="btn_log signup" value="SIGN UP" />
//         <p2>or</p2>
//         <input type="button" class="btn_log google" value="Continue with Google" />
//     </section>`;
//   container.innerHtml = html;
// };
