import { createUser } from '../firebaseClient.js';
import { onNavigate } from '../main.js';

export const Register = () => {
  const container = document.createElement('div');

  const html = `
  <header>
  </header>
  <div class="divPadre">
  <section id="contenedorLogo">
  <img id="logo" src="./sweatshirt.png">
  <h1>Trueque</h1>
  <p id="slogan">La comunidad más grande de intercambio de ropa.</p>
  </section>
  <main>
  <form class="formulario">
  <section id="sectionInputs">
  <input type="email" id="email" class="inputs" placeholder="example@email.com">
  <input type="password" id="password" class="inputs" placeholder="Contraseña">
  </section>
  <button id="btnRegister">Registrate</button>
  <a id="textRegister">¿Ya tienes una cuenta?</a>
  <a href="" id="loginLink" class="links">Inicia sesión</a>
  <p id="errorMessage"></p>
  </form>
  </div>
  </main>`;

  container.innerHTML = html;

  container.querySelector('#loginLink').addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/');
  });

  container.querySelector('#btnRegister').addEventListener('click', (e) => {
    e.preventDefault();
    const email = container.querySelector('input[type=email]').value;
    const password = container.querySelector('input[type=password]').value;
    const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const validar = expReg.test(email);

    if (validar !== true) {
      alert('Ingresa un correo válido');
    }
    createUser(email, password)
      .then(() => onNavigate('/wall'))
      .catch((error) => {
        alert(error.message);
      });
  });
  return container;
};
