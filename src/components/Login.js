import { signIn, googleRegister } from '../firebase/firebaseClient.js';
import { onNavigate } from '../main.js';

export const Login = () => {
  const container = document.createElement('div');

  const html = ` 
    <header></header>
    <div class="divPadre">
      <section id="contenedorLogo">
        <img id="logo" src="./images/sweatshirt.png">
        <h1>Trueque</h1>
        <p id="slogan">La comunidad más grande de intercambio de ropa.</p>
      </section>
      <div id="errorBackground">
        <p id= errorMessage></p>
      </div>

      <main>
        <form class="formulario">
          <section id="sectionInputs">
            <input type="email" id="email" class="inputs" placeholder="Escribe tu email">
            <input type="password" id="password" class="inputs" placeholder="Escribe tu contraseña">
          </section>
          <button id="btnLogin">Iniciar sesión</button>
          <button id="btnGoogle">Sesión con Google</button>
          <a id="textRegister">¿No tienes una cuenta?</a>
          <a href="" id="registerLink" class="links">Regístrate</a>
        </form>
      </main>
    </div>`;
  container.innerHTML = html;

  const errorMessage = container.querySelector('#errorMessage');

  // Ir al Registro
  container.querySelector('#registerLink').addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/register');
  });

  container.querySelector('#btnLogin').addEventListener('click', (e) => {
    e.preventDefault();
    const email = container.querySelector('#email').value;
    const password = container.querySelector('#password').value;

    signIn(email, password)
      .then(() => {
        onNavigate('/wall');
      })
      .catch((error) => {
        errorMessage.innerHTML = error.message;
        container.querySelector('#errorBackground').style.display = 'block';
      });
  });

  container.querySelector('#btnGoogle').addEventListener('click', (e) => {
    e.preventDefault();
    googleRegister()
      .then(() => onNavigate('/wall'))
      .catch((error) => {
        errorMessage.innerHTML = error.message;
        container.querySelector('#errorBackground').style.display = 'block';
      });
  });

  return container;
};
