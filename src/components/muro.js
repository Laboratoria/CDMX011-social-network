/* eslint-disable import/named */
import { onNavigate } from '../main.js';

export const muro = () => {
  const homeDiv = document.createElement('div');
  const tituloHome = document.createElement('h1');
  tituloHome.className = 'marca';
  tituloHome.textContent = 'TRANSMUTA';
  const publicar = document.createElement('input');
  publicar.textContent = 'publicar';
  publicar.className = 'publicar';
  const botonPublicar = document.createElement('button');
  botonPublicar.textContent = 'Publicar';
  botonPublicar.id = 'boton-publicar';
  botonPublicar.addEventListener('click', () => onNavigate('/'));
  homeDiv.appendChild(tituloHome);
  homeDiv.appendChild(publicar);
  homeDiv.appendChild(botonPublicar);

  return homeDiv;
};
