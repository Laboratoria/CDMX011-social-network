/* eslint-disable no-console */
/* eslint-disable import/no-cycle */
import { signOut } from '../lib/firebaseAuth.js';
// eslint-disable-next-line import/named
import { getData, post, borrar } from '../lib/fireStore.js';

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
  const divMuro = document.createElement('div');
  divMuro.id = 'divMuro';
  const divPanelMorado = document.createElement('div');
  divPanelMorado.id = 'divPanelMorado';
  const publicar = document.createElement('textarea');
  publicar.setAttribute('placeholder', 'publicar');
  publicar.className = 'publicar';
  const botonPublicar = document.createElement('button');
  botonPublicar.textContent = 'Publicar';
  botonPublicar.id = 'boton-publicar';
  botonPublicar.addEventListener('click', (e) => {
    e.preventDefault();
    post(publicar.value);
  });

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
  divMuro.appendChild(publicar);
  divMuro.appendChild(botonPublicar);
  divPanelMorado.appendChild(divMuro);
  divPanelMorado.appendChild(publicarDiv);
  homeDiv.appendChild(divPanelMorado);
  homeDiv.appendChild(divEntrada);

  // eslint-disable-next-line no-unused-vars
  const templatePost = (publicacion, id) => {
    const divPost = document.createElement('div');
    divPost.className = 'publicaciones';
    const hr = document.createElement('hr');
    const html = ` 
           <p class = "parrafoPublicaciones"> ${publicacion.texto}</p>`;
    divPost.innerHTML = html;
    const botonEliminar = document.createElement('img');
    botonEliminar.id = 'botonEliminar';
    botonEliminar.src = '/Assets/botonBasura.png';
    botonEliminar.addEventListener('click', () => {
      /* alert(id); */
      if (window.confirm('Estás seguro de que quieres eliminar esta publicacion?')) {
        borrar(id);
      }
    });
    divPost.appendChild(botonEliminar);
    publicarDiv.appendChild(hr);
    publicarDiv.appendChild(divPost);
  };

  const printData = async () => {
    await getData()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          templatePost(doc.data(), doc.id);
        });
      })
      .catch((error) => {
        console.log('Error getting documents: ', error);
      });
  };
  printData();
  return homeDiv;
};
