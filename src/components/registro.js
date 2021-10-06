/* eslint-disable import/no-cycle */
// eslint-disable-next-line import/named
import { onNavigate } from '../main.js';

export const registro = () => {
  const registroDiv = document.createElement('div');
  const titulo = document.createElement('h1');
  titulo.id = 'Titulo';
  titulo.textContent = '¡Registrate!';
  const nombre = document.createElement('input');
  nombre.placeholder = 'Nombre';
  nombre.id = 'nombreRegistro';
  const correoElectronico = document.createElement('input');
  correoElectronico.placeholder = 'Correo electronico';
  nombre.className = 'Registro';
  const contraseña = document.createElement('input');
  contraseña.placeholder = 'Contraseña';
  contraseña.type = 'password';
  nombre.className = 'registro';
  const botonCrearCuenta = document.createElement('button');
  botonCrearCuenta.textContent = 'Crear cuenta';
  botonCrearCuenta.id = 'boton-crear-cuenta';
  // eslint-disable-next-line no-undef
  botonCrearCuenta.addEventListener('click', () => onNavigate('/'));
  registroDiv.append(titulo);
  registroDiv.append(nombre);
  registroDiv.append(correoElectronico);
  registroDiv.append(contraseña);
  registroDiv.append(botonCrearCuenta);

  return registroDiv;
};
