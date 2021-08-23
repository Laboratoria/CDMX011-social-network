/* eslint-disable import/no-cycle */
import { onNavigate } from '../main.js';

export const Home = () => {
    const HomeContainer = document.createElement("div");
    const buttonLogIn = document.createElement("button");
    const buttonSignUp = document.createElement("button");
    const text = document.createElement("p");
    const buttonGoogle = document.createElement("button");

    HomeContainer.textContent = "Share your ideas in the largest art community. Get inspired with different styles and genres around your country.";
    buttonLogIn.textContent = "Log in";
    buttonSignUp.textContent = "Sign up";
    text.textContent = "or";
    buttonGoogle.textContent = "Continue with Google";

    HomeContainer.classList.add("container");
    buttonLogIn.classList.add("btn_log");
    buttonSignUp.classList.add("btn_log");
    buttonGoogle.classList.add("btn_log");

    buttonSignUp.addEventListener("click", () => onNavigate("/signUp"));

    HomeContainer.appendChild(buttonLogIn);
    HomeContainer.appendChild(buttonSignUp);
    HomeContainer.appendChild(text);
    HomeContainer.appendChild(buttonGoogle);
    return HomeContainer;
}


//         <img class="logo" src="img/PIC&ART.png" alt="logo">