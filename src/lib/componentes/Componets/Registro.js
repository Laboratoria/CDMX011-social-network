export const registro = () => {
  const registroDiv = document.createElement('div');
  const titulo = document.createElement('h1');
  titulo.id = 'Titulo';
  titulo.textContent = '¡Registrate!';
  const nombre = document.createElement('input');
  nombre.textContent = 'nombre';
  nombre.className = 'registro';
  const correoElectronico = document.createElement('input');
  correoElectronico.textContent = 'Ingrese aqui su correo electronico';
  nombre.className = 'registro';
  const contraseña = document.createElement('input');
  contraseña.textContent = 'Ingrese aqui su contraseña';
  nombre.className = 'registro';
  const confirmarContraseña = document.createElement('input');
  confirmarContraseña.textContent = 'Confirme su contraseña';
  nombre.className = 'registro';
  const botonCrearCuenta = document.createElement('button');
  botonCrearCuenta.textContent = 'Crear cuenta';
  botonCrearCuenta.id = 'boton-crear-cuenta';

  registroDiv.append(titulo);
  registroDiv.append(nombre);
  registroDiv.append(correoElectronico);
  registroDiv.append(contraseña);
  registroDiv.append(confirmarContraseña);
  registroDiv.append(botonCrearCuenta);

  return registroDiv;
};
