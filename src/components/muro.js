/* eslint-disable import/named */
/* eslint-disable import/no-cycle */
/* eslint-disable no-unused-vars */
// eslint-disable-next-line import/no-cycle
import { signOut } from '../lib/firebaseAuth.js';
import { getData, post } from '../lib/fireStore.js';

export const muro = () => {
  const homeDiv = document.createElement('div');
  homeDiv.id = 'homeDiv';
  const tituloHome = document.createElement('h1');
  tituloHome.id = 'marcaMuro';
  tituloHome.textContent = 'TRANSMUTA';
  // const tituloMiPublicacion = document.createElement('textarea');
  // tituloMiPublicacion.textContent = 'tituloMiPublicacion';
  // tituloMiPublicacion.className = 'tituloMiPublicacion';
  const publicar = document.createElement('textarea');
  publicar.textContent = 'publicar';
  publicar.className = 'publicar';
  const botonPublicar = document.createElement('button');
  botonPublicar.textContent = 'Publicar';
  botonPublicar.id = 'boton-publicar';
  botonPublicar.addEventListener('click', () => {
    post(publicar.value);
    console.log(publicar.value);
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
  divEntrada.appendChild(tituloHome);
  // divEntrada.appendChild(tituloMiPublicacion);
  divEntrada.appendChild(publicar);
  divEntrada.appendChild(botonPublicar);
  homeDiv.appendChild(divEntrada);
  homeDiv.appendChild(publicarDiv);
  homeDiv.appendChild(botonSalir);
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

/* const txt1 = document.querySelector("publicacioes";

const database =firebase.database();
botonPublicar.addEventListener('click', (e) =>{
  e.preventDefault();
  database.ref('/nuevapublicacion').set({
    campo1: txt1.Value
  })

}) */
