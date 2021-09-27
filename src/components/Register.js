import { createUser } from '../firebase/firebaseClient.js';
import { onNavigate } from '../main.js';

export const Register = () => {
  const container = document.createElement('div');

  const html = `
    <header>
    </header>
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
        <input type="email" id="email" class="inputs" placeholder="example@email.com">
        <input type="password" id="password" class="inputs" placeholder="Contraseña">
        <button id="eye">mostrar password</button>
        </section>
        <button id="btnRegister">Registrate</button>
        <a id="textRegister">¿Ya tienes una cuenta?</a>
        <a href="" id="loginLink" class="links">Inicia sesión</a>
        <p id="errorMessage"></p>
      </form>
    </div>
    </main>`;

  container.innerHTML = html;
  const errorMessage = container.querySelector('#errorMessage');

  container.querySelector('#loginLink').addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
  });

  container.querySelector('#btnRegister').addEventListener('click', (e) => {
    e.preventDefault();
    const email = container.querySelector('#email').value;
    const password = container.querySelector('#password').value;

    createUser(email, password)
      .then(() => onNavigate('/wall'))
      .catch((error) => {
        errorMessage.innerHTML = error.message;
        container.querySelector('#errorBackground').style.display = 'block';
      });
  });
  return container;
};
