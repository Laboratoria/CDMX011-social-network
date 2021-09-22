import { onNavigate } from '../main.js';
import {
  logOut, getUser, postInFirestore, updatePost, db,
} from '../firebaseAuth.js';
import { allFunctions } from '../lib/validFunc.js';

export const home = () => {
  let userEmail = getUser();
  if (userEmail !== null) {
    userEmail = userEmail.email;
  }
  const homePage = document.createElement('div');
  homePage.setAttribute('id', 'homePage');
  const htmlNodes = `<header id = "wallBanner" >
  <img id="logoWall" src="./imagenes/Imagen1.png">
  <h1 id="petFriendsWall">Pet Friends</h1>
  <img id="signOut" src= "./imagenes/exit.png"></header>
  <h2 id= "welcomeMessage">Bienvenid@ ${userEmail} </h2>
  <p id= "catchPost"></p>
  <div id="postContainer">
  <img id= "yellowDog" src="./imagenes/Güero.png">
  <button id="postInput">Cuéntanos sobre tu petFriend</button>
  </div>   
  <div id="backModal">
  <div id="modal">
  <h3 id="close">x</h3>
  <textarea id="post" placeholder = "Cuéntanos sobre tu petFriend"></textarea>
  <button id="share">Publicar</button>
  </div>
  </div>
  <div id="posts"></div>
  `;
  homePage.innerHTML = htmlNodes;

  const postDivPublish = homePage.querySelector('#posts');

  updatePost((snapshot) => {
    postDivPublish.innerHTML = '';
    snapshot.forEach((doc) => {
      const htmlPostsPublished = `<div id= "recentPostDiv">
          <p id="userMail">${doc.data().user}</p>
          <p id="recentPost">${doc.data().post}</p>
          <div id= "divButtons"><button id= "edit">Editar</button>
          <button id= "deletes"> Eliminar</button> 
          <img id= "img" src="./imagenes/patitaGris.png">
          </div>
          </div>`;

      postDivPublish.innerHTML += htmlPostsPublished;
      /* postDivPublish.querySelector('#deletes').addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.target.parentElement.getAttribute('data-id');
        db.collections('posts').doc(id).delete();
      }); */
      postDivPublish.querySelector('#deletes').addEventListener('click', (e) => {
        e.stopPropagation();
        const id = e.target.parentElement.getAttribute('data-id');
        db.collections('posts').doc(id).delete();
        console.log('hola');
      });
    });
  });

  const modal = homePage.querySelector('#backModal');
  homePage.querySelector('#signOut').addEventListener('click', () => logOut(onNavigate));

  homePage.querySelector('#postInput').addEventListener('click', () => {
    modal.style.visibility = 'visible';
    homePage.querySelector('#post').value = '';
  });

  homePage.querySelector('#close').addEventListener('click', () => {
    modal.style.visibility = 'hidden';
  });

  homePage.querySelector('#share').addEventListener('click', () => {
    modal.style.visibility = 'hidden';
    // const catchPost = homePage.querySelector('#catchPost');
    const postPublish = homePage.querySelector('#post').value;
    if (allFunctions.validPost(postPublish) === false) {
      alert('No has publicado un post aún');
    } else {
      postInFirestore(postPublish, userEmail);
    }

    // const catchPost = homePage.querySelector('#catchPost');
  });
  return homePage;
};
