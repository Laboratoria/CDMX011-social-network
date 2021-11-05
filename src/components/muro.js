/* eslint-disable import/no-cycle */
import { signOut } from '../lib/firebaseAuth.js';
// eslint-disable-next-line import/named
import { getData, post } from '../lib/fireStore.js';

export const muro = () => {
  const encabezadoDiv = document.createElement('div');
  encabezadoDiv.id = 'encabezadoDiv';
  const homeDiv = document.createElement('div');
  homeDiv.id = 'homeDiv';
  const tituloHome = document.createElement('h1');
  tituloHome.id = 'marcaMuro';
  tituloHome.textContent = 'TRANSMUTA';
  const imagenSalir = document.createElement('img');
  imagenSalir.id = 'imagenSalir';
  imagenSalir.src = '/Assets/salir01.png';
  imagenSalir.addEventListener('click', () => {
    signOut();
  });
  // const tituloMiPublicacion = document.createElement('textarea');
  // tituloMiPublicacion.textContent = 'tituloMiPublicacion';
  // tituloMiPublicacion.className = 'tituloMiPublicacion';
  const publicar = document.createElement('textarea');
  publicar.textContent = 'publicar';
  publicar.className = 'publicar';
  const botonPublicar = document.createElement('button');
  botonPublicar.textContent = 'Publicar';
  botonPublicar.id = 'boton-publicar';
  botonPublicar.addEventListener('click', (e) => {
    e.preventDefault();
    post(publicar.value);
    /* imprimirPost(); */
    /* console.log(publicar.value); */
  });
  /*actualizar((querySnapshot) => {
    querySnapshot.forEach((publicacion) => {
      const html = ` 
           <p class = "parrafoPublicaciones"> ${publicacion.texto}</p>`;
      divPost.innerHTML = html;
      publicarDiv.appendChild(divPost);
    });
  });
*/
  const divEntrada = document.createElement('form');
  divEntrada.id = 'divEntrada';
  const publicarDiv = document.createElement('div');
  publicarDiv.id = 'publicarDiv';
  const botonSalir = document.createElement('button');
  botonSalir.textContent = 'Cerrar sesión';
  botonSalir.id = 'boton-salir';
  botonSalir.addEventListener('click', () => {
    signOut();
  });
  encabezadoDiv.appendChild(tituloHome);
  encabezadoDiv.appendChild(imagenSalir);
  homeDiv.appendChild(encabezadoDiv);
  // divEntrada.appendChild(tituloMiPublicacion);
  divEntrada.appendChild(publicar);
  divEntrada.appendChild(botonPublicar);
  homeDiv.appendChild(divEntrada);
  homeDiv.appendChild(publicarDiv);

  const templatePost = (publicacion) => {
    const divPost = document.createElement('div');
    const html = ` 
           <p class = "parrafoPublicaciones"> ${publicacion.texto}</p>`;
    divPost.innerHTML = html;
    publicarDiv.appendChild(divPost);
  };

   const printData = async () => {
    await getData()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, doc.data());
          templatePost(doc.data());
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  };
  printData(); 
  return homeDiv;
};
