/* eslint-disable */

import { onNavigate } from '../routes.js';
import { modal, closeModal, showModal } from './ModalPost.js';
import { logOutUser, onGetPost, getPost, updatePost, deletePost, savePost, getUser, actualUser, stateUser } from '../lib/fireBase.js';



export const toViewtimeline = (container) => {
  
  const html = `
    <div class = "TimeContainer">
    <header class="timelineHeader"><!--no se esta usando clase-->
    <div class = "headTimeline">
    <img class="iconApp" src="img/picartBlanco.png">
   <!-- <input type="button"  value="salir" id="logOut" />-->
   
    </div>
    <hr id="witheBorder">
    </header>
    <nav class="navBar" > 
    <div><input src='../img/homeL.png' class='btnNavBarMovil'  type='image' /></div>
    <div><input src='../img/post1.png' class='btn_mas' id='newPost' type='image'/></div>
    <div><input src='../img/logOutt.png' id='logOut' class="btnNavBarMovil" type='image' /></div>
    </nav> 

    <section class="TimeContainer" id="section">
    <form  id="postForm">
        <textarea text="textArea" class="textPost" id="textPost" rows="5" cols="40" maxlength="500" placeholder="Post something :)"></textarea><br>
        <input type="submit" id="buttonNewPost"  value="Share" /> 
        
    </form>
    <div class= "postContainer"  id = "postContainer"></div>
    
  </section>

 
  </div>
`;
stateUser();
  const postContainer = document.getElementById('postContainer');
// firebase.auth().onAuthStateChanged((getUser) => {

//   if (getUser) {
  let editStatus = false;
  let id = '';
  container.innerHTML = html


  // const postContainer = document.createElement('div');
  // postContainer.classList.add('post-box');
  // container.appendChild(postContainer);

  //Log out de app
  const toLogOut = document.getElementById('logOut');
  toLogOut.addEventListener('click', () => {

    logOutUser().then(() => {
      onNavigate('/');
    });
  });


  //Post

  const posting = document.getElementById('postForm');


 

      console.log(actualUser())
      //Cargar la pagina y aparezcan los post 
      onGetPost((querySnapshot) => {
        postContainer.innerHTML = '';
        querySnapshot.forEach(doc => {
          //Obtener id de cada post//
          const postData = doc.data();
          postData.id = doc.id;

          const postEmail = doc.data().user;



          //Template de post
          postContainer.innerHTML += `
     <div class= "post_container">
     <div class="postHeader">
     <div class="user">
     <p class="userPost">${doc.data().user}</p>
     <p class="postDate">${new Date(doc.data().date.seconds * 1000).toDateString()}</p>

     </div>
    <div class="verMas"> 
    <nav>
    <input type="checkbox" id="${postData.id}" class="btnMenu menu" ></input>
    <label for="${postData.id}" id="${postData.id}"  class="labelPost" >...</label>
    <ul class='menuToPost'>
      <li><button class  = "btn_delete delete" data-id="${postData.id}" >Delete</button></li>
      <li><button class  = "btn_edit edit" data-id="${postData.id}" >Edit</button></li>
    </ul>
  </nav>
    </div>
     </div>
     <hr id="blackLine">
     <div class="postText">
     <h2>${doc.data().textShare}</h2>
     </div>
     <hr id="blackLine">
     <div class="usuarioPost">
     <div class="likes"><input src='../img/heart.png' class='btn_like'  type='image' /> </div>
      </div>
      </div>
      `;
          const btn = document.querySelectorAll('.labelPost');//como mandarle id en lugar de nombre de clase 

          console.log(postEmail);
          if (actualUser() == postEmail) {
            btn.forEach(btn2 => {
              btn2.style.display = "block";
            })
            // document.getElementsByClassName("labelPost").style.display= "none";
          }
          //to create a new post
          const toNewPost = document.getElementById('newPost');
          toNewPost.addEventListener('click', () => {
            console.log('click evento');
            showModal.style.display = "block";
            //llamar modal
            modal();
            closeModal();
          });
          
          //Borrar post//
          const btnDel = postContainer.querySelectorAll('.delete');
          btnDel.forEach(btn => {
            btn.addEventListener('click', async (e) => {
              //console.log(e.target.dataset.id);// es el ID del post clickeado
              await deletePost(e.target.dataset.id);
            });
          });

          //Editar post//
          const btnEdit = postContainer.querySelectorAll('.edit');
          btnEdit.forEach(btn => {
            btn.addEventListener('click', async (e) => {
              const doc = await getPost(e.target.dataset.id);
              console.log(doc.data());

              editStatus = true;
              id = doc.id;

              posting["textPost"].value = doc.data().textShare;
              posting['buttonNewPost'].value = 'Update';
            });
          });

        });

      });
    // }else {
    //   onNavigate('/');
    // }
  
  // };
  //mostrar ocultar btn vermas



  const savePost = (textShare) =>
    firebase.firestore().collection('posts').doc().set({
      textShare,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
      user: firebase.auth().currentUser.email
    });




  //Compartir post 

  posting.addEventListener('submit', async (e) => {
    e.preventDefault();
    console.log("Share");
    const textShare = posting['textPost'];
    console.log(textShare);

    if (!editStatus) {
      await savePost(textShare.value);
    } else {
      await updatePost(id, {
        textShare: textShare.value
      });

      editStatus = false;
      id = '';
      posting['buttonNewPost'].value = 'Share';

    };


    posting.reset();
    textShare.focus();

  }); 
  

}
