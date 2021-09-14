/* eslint-disable */

import { onNavigate } from '../routes.js';
import { modal, closeModal, showModal } from './ModalPost.js';
import {logOutUser, onGetPost, getPost, updatePost,deletePost, savePost, addLikes, getUser , actualUser} from '../lib/fireBase.js';
//import { async } from 'regenerator-runtime';


export const toViewtimeline = (container) => {

  const html = `
    <div class = "TimeContainer">
    <header class="timelineHeader"><!--no se esta usando clase-->
    <div class = "headTimeline">
    <img class="iconApp" src="img/picartBlanco.png">
   
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
        <textarea text="textArea" class="textPost" id="textPost" rows="5" cols="40" maxlength="500" placeholder="Post something :)" required ></textarea><br>
        <input type="submit" id="buttonNewPost"  value="Share" /> 
        
    </form>
    <div class= "postContainer"  id = "postContainer"></div>
    
  </section>

 
  </div>
`;
// stateUser();

firebase.auth().onAuthStateChanged((getUser) => {

  if (getUser) {
  let editStatus = false;
  let id = '';
  container.innerHTML = html


   
   //Log out de app
    const toLogOut = document.getElementById('logOut');
  toLogOut.addEventListener('click', () => {

    logOutUser().then(() => {
      onNavigate('/');
    });
  });


  //Post

  const posting = document.getElementById('postForm');

  const postContainer = document.getElementById('postContainer');
 

      console.log(actualUser())
      //Cargar la pagina y aparezcan los post 
      onGetPost((querySnapshot) => {
        postContainer.innerHTML = '';
        querySnapshot.forEach(doc => {
          //Obtener id de cada post//
          const postData = doc.data();
          postData.id = doc.id;

          const postUid = doc.data().uid;



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
    <label for="${postData.id}" class="labelPost" ><div class='${postData.uid}'></div></label>
    
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
     <div class="likes"><input src='../img/heart.png' class='btn_like' id="like" type='image' /> </div>
      </div>
      </div>
      `;
          const labelOptions = document.querySelectorAll(`.${postData.uid}`);//como mandarle id en lugar de nombre de clase 
          console.log(labelOptions)

          // console.log(postEmail);
          if (actualUser() == postUid) {
            labelOptions.forEach(btn2 => {
              btn2.innerHTML=`<div class='labelPost' >...</div>`;
            })
            // document.getElementsByClassName("labelPost").style.display= "none";
          }
          //to create a new post
          const toNewPost = document.getElementById('newPost');
          toNewPost.addEventListener('click', () => {
            console.log('click evento');
            showModal.style.visibility = "visible";
           // container.innerHTML=`<div id="modal" class="modal"></div>`;
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

        });
        
        //Botón like//
        //console.log(postData.id);
        // let likesFb = firebase.firestore().collection('posts').doc(postData.id);
        const btnLike = postContainer.querySelectorAll('#like');
        const likeValue = document.getElementById('like').value;
        btnLike.forEach(btn => {
          let countLikes = 0;
          btn.addEventListener('click', () => {
            console.log(likeValue)
            //addLikes(likeValue)
            //console.log(postData.id);
            countLikes += 1;
            console.log(countLikes); 
            // likesFb.update({
            //   likes: firebase.firestore.FieldValue.increment(1)
            // })
             
           //console.log(btn.src);
          if(btn.src===("http://localhost:5000/img/emptylike.png")){
              btn.src = '../img/like.png';
              //console.log('unclicked');          
          }else {
            btn.src = '../img/emptylike.png';
            //console.log('clicked')
          }
      
        }
        ); 
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

      

  //Compartir post 

  posting.addEventListener('submit', async (e) => {
    e.preventDefault();

    //console.log("Share");
    const textShare= posting['textPost'];
    //console.log(textShare);

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
  
 }else {
      onNavigate('/');
    }
  

  });
}
