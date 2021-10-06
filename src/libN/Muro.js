export const muro = () => {
  const homeDiv = document.createElement('div');
  homeDiv.className = 'contenedorMuro';
  const tituloHome = document.createElement('h1');
  tituloHome.className = 'marca';
  tituloHome.textContent = 'TRANSMUTA';
  const publicarDiv = document.createElement('div');
  const publicar = document.createElement('input');
  publicar.placeholder = 'Inserta tu publicación aquí';
  publicar.className = 'publicar';
  const botonPublicar = document.createElement('button');
  botonPublicar.textContent = 'Publicar';
  botonPublicar.id = 'boton-publicar';
  homeDiv.appendChild(publicarDiv);
  publicarDiv.appendChild(publicar);
  publicarDiv.appendChild(botonPublicar);
  homeDiv.appendChild(tituloHome);
  return homeDiv;
};
