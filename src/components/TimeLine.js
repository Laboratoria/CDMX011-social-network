/* eslint-disable */

import { onNavigate } from '../routes.js';

import {logOutUser, dataBase  } from '../lib/fireBase.js';
//import { async } from 'regenerator-runtime';


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
    <div><input src='../img/home1.png' class='btnNavBarMovil'  type='image' /></div>
    <div><input src='../img/post1.png' class='btn_mas' id='btnMAs' type='image' /></div>
    <div><input src='../img/logOut.png' id='logOut' class="btnNavBarMovil" type='image' /></div>
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
 
    container.innerHTML = html
const postContainer = document.getElementById('postContainer');
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

  let editStatus = false;
  let id = '';

  //Obtener un solo post por ID//
  const getPost = (id) => firebase.firestore().collection('posts').doc(id).get();
  
  const onGetPost = (callback) => firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot(callback);

  const deletePost = id => {firebase.firestore().collection('posts').doc(id).delete()
    .then (alert('Are you sure you want to delete your post?'));
  };

  const updatePost = (id, updatedPost) => firebase.firestore().collection('posts').doc(id).update(updatedPost);

  window.addEventListener('DOMContentLoaded', async (e) =>{
   
    onGetPost((querySnapshot) => {
      postContainer.innerHTML = '';
      querySnapshot.forEach(doc =>{
      const userUID = firebase.auth().currentUser;

      //Obtener id de cada post//
      const postData = doc.data();
      postData.id = doc.id;
      //console.log(postData);

     
     postContainer.innerHTML += `
     <div class= "post_container">
     <div class="postHeader">
    <div class="verMas"> 
    <nav>
    <input type="checkbox" id="menu">
    <label for="menu" class="labelPost"> ... </label>
    <ul class='menuPost'>
      <li>Delete</li>
      <li>Update</li>
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
     <div class="user">
     <p>${doc.data().user}</p>
     <p class="postDate">${new Date(doc.data().date.seconds*1000).toLocaleDateString()}</p>

     </div>
     <div class="likes"><input src='../img/heart.png' class='btn_like'  type='image' /> </div>
      </div>
      
      <div class = "buttonsDelEdit">

        <button class  = "btn_log delete" data-id="${postData.id}" >Delete</button>
        <button class  = "btn_log edit" data-id="${postData.id}" >Edit</button>
      </div>
      </div>
      `;
        
        

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
    
  });

  

  const savePost = (textShare) =>
  firebase.firestore().collection('posts').doc().set({
    textShare,
    date: firebase.firestore.Timestamp.fromDate(new Date()),
    //firebase.firestore.Timestamp.fromDate(new Date()),
    user:firebase.auth().currentUser.email
  });


  posting.addEventListener('submit', async (e)  =>{
    e.preventDefault();
    console.log("Share");
    const textShare= posting['textPost'];
    console.log(textShare);

    if (!editStatus){
      await savePost(textShare.value);
    } else {
      await updatePost(id, {
        textShare : textShare.value
      });
      
      editStatus = false;
      id = '';
      posting['buttonNewPost'].value = 'Share';

    };


      posting.reset();
      textShare.focus();
        
  });
}
