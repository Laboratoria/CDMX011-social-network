export const home = () => {
    
    const homePage = document.createElement("div");
    homePage.classList.add("homepage");
    const banner = document.createElement("header");
    banner.setAttribute("id", "banner");
    const petFriends = document.createElement("h1");
    petFriends.setAttribute("id", "petFriends");
    petFriends.textContent = "PetFriends";
    const logo = document.createElement ("img")
    logo.setAttribute("id", "logo");
    logo.src = "./imagenes/Imagen1.png";
    const email = document.createElement("input");
    email.setAttribute("id", "email");
    email.setAttribute("placeholder", "Correo electrónico");
    const password = document.createElement("input");
    password.setAttribute("id", "password");
    password.setAttribute("placeholder", "Contraseña");
    const signIn = document.createElement("button");
    signIn.setAttribute("id", "signIn");
    signIn.textContent = "Iniciar sesión";
    const signInGoogle = document.createElement("button");
    signInGoogle.setAttribute("id", "signInGoogle");
    signInGoogle.textContent = "Continuar con Google";
    const registerIn = document.createElement("h3");
    registerIn.setAttribute("id", "registerIn");
    registerIn.textContent = "¿No tienes una cuenta?";
    const registerButton = document.createElement("button");
    registerButton.setAttribute("Id", "registerButton");
    registerButton.textContent = "Regístrate";
    const formContainer =document.createElement("form")
    formContainer.setAttribute("id", "formContainer");

    homePage.appendChild(banner);
    banner.appendChild(logo);
    banner.appendChild(petFriends);
    homePage.appendChild(formContainer);
    formContainer.appendChild(email);
    formContainer.appendChild(password);
    formContainer.appendChild(signIn);
    formContainer.appendChild(signInGoogle);
    formContainer.appendChild(registerIn);
    formContainer.appendChild(registerButton);
    


    return homePage;
}
