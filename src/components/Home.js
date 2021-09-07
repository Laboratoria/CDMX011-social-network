import {
  db,
  getUser, sendEmail, signOut,
} from '../firebaseClient.js';
import { onNavigate } from '../main.js';

export const Home = () => {
  const user = getUser();
  const verification = user.emailVerified;
  const container = document.createElement('div');
  const html = `
  <header id=headerHome>
  <img id="logoHome" src="./sweatshirt.png">
  <h2>Trueque</h2>
  <a href ='' id='singOut' class="links">Cerrar Sesion</a>
  </header>
  <divPadre class='divPadre'>
  <h3> Te has logeado con ${user ? user.email : ''} </h3>
  <p id=verificationMessage>${verification ? '' : 'Te enviamos un link a tu correo, verifica tu cuenta'}<p>
  <form id="wallForm">
  <input type="text" id="post" placeholder="¿Qué quieres publicar hoy?" required>
  <button type="submit" id="btnPost">Publicar</button>
  </form>
  <div id=postContainer></div>
  </divPadre>
  `;
  container.innerHTML = html;

  if (verification === false) { // MANDAMOS VERIFICACION AL CORREO DEL USUARIO
    sendEmail()
      .then(() => {
        // Email verification sent!
      });
  }

  container.querySelector('#singOut').addEventListener('click', (e) => { // CERRAR SESION
    e.preventDefault();
    signOut()
      .then(() => {
        onNavigate('/');
      })
      .catch((error) => {
        alert(error.message);
      });
  });

  const docRef = db.collection('wallPost'); // AQUÍ CONECTAMOS A FB

  container.querySelector('#btnPost').addEventListener('click', (e) => { // MANDAMOS LOS POST FB
    e.preventDefault();
    const publicaciones = document.querySelector('#post').value;
    if (publicaciones === '') {
      alert('ingresa una publicación');
    } else {
      docRef.add({
        publicaciones,
      })
        .then(() => {
          console.log('Document successfully written!');
        })
        .catch((error) => {
          console.error('Error writing document: ', error);
        });
    }
    document.querySelector('#wallForm').reset();
  });

  const postContainer = container.querySelector('#postContainer');

  docRef
    .onSnapshot((querySnapshot) => { // TRAEMOS LOS POST Y LOS AGREGAMOS EN TIEMPO REAL
      postContainer.innerHTML = '';
      querySnapshot.forEach((doc) => {
        const dataPost = doc.data();
        dataPost.id = doc.id;

        postContainer.innerHTML += `
      <div id='contenedorPublicacion'>
      ${dataPost.publicaciones}
      <div id="btnsContenedor">
      <a href="" id='linkEdit' class="links" data-id='${dataPost.id}'>Editar</a>      
      <img id='btnDelete' src="./eliminar.png" data-id='${dataPost.id}'>
      </div>
      </div>

      <div id="modalPadre">
      <div id="contenedorModal">
      <div id="closeDiv">
      <span class="close" id="closeX">&times;</span>
      </div>
      <input type="text" id="editInput" placeholder="Esto es un ejemplo">
      <button id="editBtnPost" data-id='${dataPost.id}'>Editar</button>
      </div>
      </div>
      `;
        // BORRAR POST
        document.querySelectorAll('#btnDelete').forEach((btn) => { // SE RECORREN CON UN FOREACH
          btn.addEventListener('click', (e) => {
            const target = e.target; // DELEGACION DE EVENTOS
            // SE PASA COMO VALOR LA ID AL DAR CLICK SE ELIMINA
            docRef.doc(target.dataset.id)
              .delete()
              .then(() => {
                console.log('Document successfully deleted!');
              }).catch((error) => {
                console.error('Error removing document: ', error);
              });
          });
        });

        // EDITAR POST
        document.querySelectorAll('#linkEdit').forEach((btnE) => {
          btnE.addEventListener('click', (e) => {
            e.preventDefault();
            document.getElementById('modalPadre').style.display = 'block';

            const target = e.target;
            docRef.doc(target.dataset.id)
              .get()
              // eslint-disable-next-line no-shadow
              .then((doc) => {
                const dataEdit = doc.data();
                document.getElementById('editInput').value = dataEdit.publicaciones;
              })
              .catch((error) => {
                console.log('Error getting document:', error);
              });

            document.getElementById('editBtnPost').addEventListener('click', () => {
              // eslint-disable-next-line no-shadow
              const target = e.target;
              const publicaciones = document.querySelector('#editInput').value;

              docRef.doc(target.dataset.id)
                .update({
                  publicaciones,
                })
                .then(() => {
                  console.log('Document successfully updated!');
                })
                .catch((error) => {
                  console.error('Error updating document: ', error);
                });
            });
            document.getElementById('closeX').addEventListener('click', () => {
              document.getElementById('modalPadre').style.display = 'none';
            });
          });
        });
      });
    });

  return container;
};
