/* eslint-disable import/named */
// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';

export const inicio = () => {
  const inicioDiv = document.createElement('div');
  inicioDiv.id = 'inicioDiv';
  const marca = document.createElement('h1');
  marca.className = 'marca';
  marca.textContent = '¡Bienvenida a Transmuta!';
  const slogan = document.createElement('h3');
  slogan.textContent = '"Transformando las emociones en poder"';
  slogan.id = 'slogan';
  const imagenInicioDeSesion = document.createElement('img');
  imagenInicioDeSesion.id = 'imagenInicioDeSesion';
  imagenInicioDeSesion.src = '/Assets/mounstruo.png';
  inicioDiv.append(marca);
  inicioDiv.append(slogan);
  inicioDiv.append(imagenInicioDeSesion);
  const divInicioDeSesion = document.createElement('form');
  divInicioDeSesion.id = 'divInicioDeSesion';
  divInicioDeSesion.method = 'post';
  divInicioDeSesion.action = 'muro';
  const inicioSesion = document.createElement('h2');
  inicioSesion.textContent = 'Iniciar Sesion';
  inicioSesion.id = 'inicio-sesion';
  const correoElectronico = document.createElement('input');
  correoElectronico.id = 'correo-electronico';
  correoElectronico.name = 'correo-electronico';
  correoElectronico.placeholder = 'Correo Electronico';
  const contraseña = document.createElement('input');
  // este lo va a tomar como índice de mi post
  contraseña.name = 'contraseña';
  contraseña.id = 'contraseña';
  contraseña.placeholder = 'Contraseña';
  contraseña.type = 'password';
  const botonIngresar = document.createElement('button');
  botonIngresar.textContent = 'Ingresar';
  botonIngresar.id = 'boton-ingresar';
  botonIngresar.addEventListener('click', () => onNavigate('/muro'));
  const opcion = document.createElement('p');
  opcion.textContent = 'o';
  opcion.className = 'letra-o';
  const textoSinCuenta = document.createElement('p');
  textoSinCuenta.textContent = 'No tienes cuenta. Registrate ';
  textoSinCuenta.className = 'texto-no-cuenta';
  const registro = document.createElement('a');
  registro.textContent = 'Aqui';
  registro.addEventListener('click', () => onNavigate('/registro'));
  registro.className = 'registro';
  divInicioDeSesion.appendChild(inicioSesion);
  divInicioDeSesion.appendChild(correoElectronico);
  divInicioDeSesion.appendChild(contraseña);
  divInicioDeSesion.appendChild(botonIngresar);
  divInicioDeSesion.appendChild(opcion);
  divInicioDeSesion.appendChild(textoSinCuenta);
  divInicioDeSesion.appendChild(registro);
  inicioDiv.append(divInicioDeSesion);

  return inicioDiv;
};
