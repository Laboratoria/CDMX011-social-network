export const register= ()=>{

const registerPage=document.createElement("div");
registerPage.classList.add("registerPage");

const email=document.createElement("input");
email.setAttribute("id", "email");
email.setAttribute("placeholder", "Ingresa tu correo electrónico");
const password=document.createElement("input");
password.setAttribute("id", "password");
password.setAttribute("placeholder", "Crea tu contraseña");
const confirmPassword=document.createElement("input");
confirmPassword.setAttribute("id","confirmPassword");
confirmPassword.setAttribute("placeholder","Confirma tu contraseña");
const signIn=document.createElement("button");
signIn.setAttribute("id", "sigIn");
signIn.textContent="Crear cuenta";
const signInGoogle=document.createElement("button");
signInGoogle.setAttribute("id", "signInGoogle");
signInGoogle.textContent="Continuar con Google";

registerPage.appendChild(email);
registerPage.appendChild(password);
registerPage.appendChild(confirmPassword);
registerPage.appendChild(signIn);
registerPage.appendChild(signInGoogle);

return registerPage;
}