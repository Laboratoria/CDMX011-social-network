export const home = () => {
    const homePage = document.createElement("div");
    homePage.classList.add("homepage");
    const email = document.createElement("input");
    email.setAttribute("id", "email");
    email.setAttribute("placeholder", "Correo electrónico");
    const password = document.createElement("input");
    password.setAttribute("id", "password");
    password.setAttribute("placeholder", "Contraseña");
    const signIn = document.createElement("button");
    signIn.setAttribute("id", "sigIn");
    signIn.textContent = "Iniciar sesión";
    const signInGoogle = document.createElement("button");
    signInGoogle.setAttribute("id", "signInGoogle");
    signInGoogle.textContent = "Continuar con Google";
    const registerIn = document.createElement("button");
    registerIn.setAttribute("id", "registerIn");
    registerIn.textContent = "Regístrate";

    homePage.appendChild(email);
    homePage.appendChild(password);
    homePage.appendChild(signIn);
    homePage.appendChild(signInGoogle);
    homePage.appendChild(registerIn);

    return homePage;
}
