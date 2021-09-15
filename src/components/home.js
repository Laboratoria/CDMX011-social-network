// eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import {
  logOut, getUser, postInFirestore, printPostFromFirestore,
} from '../firebaseAuth.js';

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

    const postPublish = homePage.querySelector('#post').value;

    const postDivPublish = homePage.querySelector('#posts');

    const recentPostDiv = document.createElement('div');
    recentPostDiv.setAttribute('id', 'recentPostDiv');
    const usermail = document.createElement('p');
    usermail.innerHTML = 'aqui va el useremail';
    usermail.setAttribute('id', 'userMail');
    const recentPost = document.createElement('p');
    recentPost.setAttribute('id', 'recentPost');
    recentPost.textContent = postPublish;
    const divButtons = document.createElement('divButtons');
    divButtons.setAttribute('id', 'divButtons');
    const edit = document.createElement('button');
    edit.setAttribute('id', 'edit');
    edit.textContent = 'Editar';
    const deletes = document.createElement('button');
    deletes.setAttribute('id', 'deletes');
    deletes.textContent = 'Eliminar';
    const like = document.createElement('img');
    like.setAttribute('id', 'like');
    like.setAttribute('src', './imagenes/patitaGris.png');

    postDivPublish.append(recentPostDiv);
    divButtons.append(edit, deletes, like);
    recentPostDiv.append(usermail, recentPost, divButtons);
    postInFirestore(postPublish);
    printPostFromFirestore()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(`${JSON.stringify(doc.data().post)}`);
        });
      });
  });
  /* console.log(persistance(userEmail)); */
  return homePage;
};
