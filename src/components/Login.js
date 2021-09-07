import { signIn, googleRegister } from '../firebaseClient.js';
import { onNavigate } from '../main.js';

export const Login = () => {
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
  <button id="btnLogin">Iniciar sesión</button>
  <p id="errorMessage"></p>
  <button id="btnGoogle">Continua con Google</button>
  <a id="textRegister">¿No tienes una cuenta?</a>
  <a href="" id="registerLink" class="links">Registrate</a>
  </form>
  </main>
  </div>`;

  container.innerHTML = html;

  container.querySelector('#registerLink').addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/register');
  });

  container.querySelector('#btnLogin').addEventListener('click', (e) => {
    e.preventDefault();
    const email = container.querySelector('input[type=email]').value;
    const password = container.querySelector('input[type=password]').value;
    const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const validar = expReg.test(email);

    if (validar !== true) {
      alert('Ingresa un correo válido');
    }
    signIn(email, password)
      .then(() => onNavigate('/wall'))
      .catch((error) => {
        alert(error.message);
      });

    /* const user = getUser;
    if (user) {
      console.log('existe');
      persistencia()
        .then(() => signIn(email, password))
        .catch((error) => {
          console.log(error.message);
        });
    } */
  });

  container.querySelector('#btnGoogle').addEventListener('click', (e) => {
    e.preventDefault();
    googleRegister()
      .then(() => onNavigate('/wall'))
      .catch((error) => {
        alert(error.message);
      });
  });

  return container;
};
