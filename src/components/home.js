/* eslint-disable no-unused-expressions */
import { onNavigate } from '../main.js';
import { allFunctions } from '../lib/validFunc.js';
import {
  logOut, getUser, postInFirestore, updatePost, deletePost, updateLike,
  getIdFromCollection, editPost, dislike,
} from '../firebaseAuth.js';

export const home = () => {
  let userEmail = getUser();
  userEmail !== null ? userEmail = userEmail.email : userEmail = '';

  const homePage = document.createElement('div');

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
  <input type="file" id="addImg" name="addImg" accept="image/png, image/jpeg, image/jpg">
  <button id="share" class="send" >Publicar</button>
  </div>
  </div>
  <div id="posts"></div>
  `;
  homePage.innerHTML = htmlNodes;
  const modal = homePage.querySelector('#backModal');
  const postDivPublish = homePage.querySelector('#posts');

  // Botón de cerrar sesión
  homePage.querySelector('#signOut').addEventListener('click', () => logOut(onNavigate));

  // Botón para abrir el modal
  homePage.querySelector('#postInput').addEventListener('click', () => {
    modal.style.visibility = 'visible';
    homePage.querySelector('#post').value = '';
  });

  // Es la x para cerrar el modal
  homePage.querySelector('#close').addEventListener('click', () => {
    modal.style.visibility = 'hidden';
  });
  const likeUser = [];
  // Botón para publicar el post
  homePage.querySelector('#share').addEventListener('click', () => {
    modal.style.visibility = 'hidden';
    //  sección de comentario

    const postPublish = homePage.querySelector('#post').value;
    const date = new Date();
    const postDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} a las ${date.getHours()}:${date.getMinutes()}`;
    if (allFunctions.validPost(postPublish) === false) {
      alert('No has publicado un post aún');
    } else {
      postInFirestore(postPublish, userEmail, postDate, likeUser);
    }

    // Sección de imagen
    /*  const imgPost = homePage.querySelector('#addImg').files[0];
    storageRef(imgPost, imgPost.name); */
  });

  // Imprime los post ya existentes en pantalla
  updatePost((snapshot) => {
    postDivPublish.innerHTML = '';
    snapshot.forEach((doc) => {
      const comentId = doc.id;
      const idUserFromLike = getUser().uid;
      const htmlPostsPublished = `<div id= "recentPostDiv" class= "completePost">
          <p id="userMail" class="userMail" >${doc.data().user}:</p>
          <p id="date">${doc.data().date}</p>
          <p id="recentPost">${doc.data().post}</p>
          ${userEmail === doc.data().user
    ? `<div id= "divButtons">
          <img id="img"  class= "like" ${doc.data().like.includes(idUserFromLike) ? 'src= "./imagenes/patitaColor.png"' : 'src= "./imagenes/patitaGris.png"'}  data-idpost= ${comentId} data-id= ${idUserFromLike} >
          <p id="paragCounter" class="paragCounter">${doc.data().like.length}</p>
          <button id= "edit" class= "btnEdit" data-id= ${comentId} >Editar</button>
            <div class="editBackModal">
               <div class="editModal">
                  <h3 class="editClose">x</h3>
                  <textarea class="editPost"></textarea>
                  <button id="share" class="save">Guardar</button>
               </div>
            </div>
          <button id= "deletes" class="btndeletes" data-id= ${comentId} > Eliminar</button> 
          <div class="deleteBackModal">
            <div class="deleteModal" >
              <h2 class= "confirmText">¿Estás segur@ que deseas eliminar este post? </h2>
              <button class="si">Si</button>
              <button class="no" >No</button>
             </div>
          </div>`
    : `<img id="img"  data-idpost= ${comentId}  data-id= ${idUserFromLike} class= "like" ${doc.data().like.includes(idUserFromLike) ? 'src= "./imagenes/patitaColor.png"' : 'src= "./imagenes/patitaGris.png"'} >
    <p id="paragCounter" class="paragCounter">${doc.data().like.length}</p>`}
            </div>
          </div>`;

      postDivPublish.innerHTML += htmlPostsPublished;

      // Función para manipular el like
      const colorPaw = postDivPublish.querySelectorAll('.like');

      colorPaw.forEach((postLike) => {
        postLike.addEventListener('click', async (e) => {
          const likeId = await getIdFromCollection(e.target.dataset.idpost);
          const arrayLike = likeId.data();
          if (!arrayLike.like.includes(e.target.dataset.id)) {
            updateLike(e.target.dataset.idpost, e.target.dataset.id);
          } else {
            dislike(e.target.dataset.idpost, e.target.dataset.id);
          }
        });
      });

      // Botón para eliminar post
      const deletebtn = postDivPublish.querySelectorAll('.btndeletes');

      const deleteModal = postDivPublish.querySelector('.deleteBackModal');
      deletebtn.forEach((btnDelete) => {
        btnDelete.addEventListener('click', (f) => {
          deleteModal.style.visibility = 'visible';
          const confirmDelete = () => deletePost(f.target.dataset.id);
          deleteModal.addEventListener('click', (e) => {
            if (e.target.classList.contains('si')) {
              confirmDelete();
              deleteModal.style.visibility = 'hidden';
            } else {
              deleteModal.style.visibility = 'hidden';
            }
          });
        });
      });

      // Botón para editar el post
      const btnEdit = postDivPublish.querySelectorAll('.btnEdit');
      const postEditModal = postDivPublish.querySelector('.editBackModal');
      const editedPost = postDivPublish.querySelector('.editPost');
      btnEdit.forEach((edtPost) => {
        edtPost.addEventListener('click', async (event) => {
          postEditModal.style.visibility = 'visible';
          const docForEdit = await getIdFromCollection(event.target.dataset.id);
          editedPost.value = docForEdit.data().post;
          postEditModal.addEventListener('click', (e) => {
            if (e.target.classList.contains('save')) {
              editPost(docForEdit.id, editedPost.value);
              postEditModal.style.visibility = 'hidden';
            }
            if (e.target.classList.contains('editClose')) {
              postEditModal.style.visibility = 'hidden';
            }
          });
        });
      });
    });
  });

  return homePage;
};
