export const LogIn = () => {
    const LogInContainer = document.createElement("div");
    const buttonLogIn = document.createElement("button");
    const buttonHome = document.createElement("button");

    LogInContainer.textContent = "Inicia sesión";
    buttonHome.textContent = "Regresar";
    buttonLogIn.textContent = "Inicia sesión";

    LogInContainer.appendChild(buttonHome);
    LogInContainer.appendChild(buttonLogIn);

    return LogInContainer;
}