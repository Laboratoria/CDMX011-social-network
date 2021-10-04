import {
  getUser, updatePost, stateCheck, getTaskForEdit, editPost,
} from '../firebaseAuth.js';
import { onNavigate } from '../main.js';

export const edit = () => {
  let userEmail = getUser();
  if (userEmail !== '') {
    userEmail = userEmail.email;
  }
  const homePage = document.createElement('div');

  stateCheck(homePage);

  homePage.setAttribute('id', 'homePage');
  const htmlNodes = `<header id = "wallBanner" >
    <img id="logoWall" src="./imagenes/Imagen1.png">
    <h1 id="petFriendsWall">Pet Friends</h1>
    <img id="signOut" src= "./imagenes/exit.png"></header>
    <h2 id= "welcomeMessage">Bienvenid@ ${userEmail}</h2>
    <p id= "catchPost"></p>
    <div id="postContainer">
    <img id= "yellowDog" src="./imagenes/Güero.png">
    <button id="postInput">Cuéntanos sobre tu petFriend</button>
    </div>   
    <div id="backModal">
    <div id="modal">
    <h3 id="close">x</h3>
    <textarea id="post" placeholder = "Cuéntanos sobre tu petFriend"></textarea>
    <button id="share" class="send" >Guardar</button>
    </div>
    </div>
    <div id="posts"></div>
    `;
  homePage.innerHTML = htmlNodes;
  const modal = homePage.querySelector('#backModal');
  const postDivPublish = homePage.querySelector('#posts');

  // Botón para abrir el modal
  modal.style.visibility = 'visible';
  homePage.querySelector('#post').value = '';

  // Es la x para cerrar el modal
  homePage.querySelector('#close').addEventListener('click', () => {
    onNavigate('/home');
  });

  // Botón para publicar el post
  homePage.querySelector('#share').addEventListener('click', (event) => {
    modal.style.visibility = 'hidden';
    editPost();
  });

  // Imprime los post ya existentes en pantalla
  updatePost((snapshot) => {
    postDivPublish.innerHTML = '';
    snapshot.forEach((doc) => {
      const comentId = doc.id;
      const htmlPostsPublished = `<div id= "recentPostDiv" class= "completePost">
            <p id="userMail">${doc.data().user}:</p>
            <p id="recentPost">${doc.data().post}</p>
            <div id= "divButtons">
            <button id= "edit" class= "btnEdit" data-id= ${comentId} >Editar</button>
            <button id= "deletes" class="btndeletes" data-id= ${comentId} > Eliminar</button> 
            <img id="img"  class= "like" src="./imagenes/patitaGris.png">
            <div class="deleteBackModal">
            <div class="deleteModal" >
            <h2 class= "confirmText">¿Estás segur@ que deseas eliminar este post? </h2>
            <button class="si">Si</button>
            <button class="no" >No</button>
            </div>
            </div>
            </div>
            </div>`;

      postDivPublish.innerHTML += htmlPostsPublished;
    });
  });
  return homePage;
};
