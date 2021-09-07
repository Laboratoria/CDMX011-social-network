/* eslint-disable */

import { onNavigate } from '../routes.js';

import {logOutUser, dataBase } from '../lib/fireBase.js';
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
    <div><a href="#postForm"><input src='../img/post1.png' class='btn_mas'  type='image' /></a></div>
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
 


  //const getPost = () => dataBase.collection('posts').get();
  //const user = firebase.getUser();
//console.log(user);
  const onGetPost = (callback) => firebase.firestore().collection('posts').orderBy('date', 'desc').onSnapshot(callback);

  window.addEventListener('DOMContentLoaded', async (e) =>{
   
    onGetPost((querySnapshot) => {
      postContainer.innerHTML = '';
      querySnapshot.forEach(doc =>{
      const userUID = firebase.auth().currentUser;
        //console.log(stateUser());
     
     postContainer.innerHTML += `
     <div class= "post_container">
     <div class="postHeader">
    <div class="verMas"> 
    <input src='../img/verMas.png' class='btn_VerMas'  type='image' />
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
     <p>Fecha: ${doc.data().date}</p>
     </div>
     <div class="likes"><input src='../img/heart.png' class='btn_like'  type='image' /> </div>
      </div>
      
      <div class = "buttonsDelEdit">
        <button class  = "btn_log" id = "btn_del">Delete</button>
        <button class  = "btn_log" id = "btn_edit">Edit</button>
      </div>
      </div>
      `;
    });
   
   console.log("Estoy entrando");

   });
    
  })

  const posting = document.getElementById('postForm');

  const savePost = (textShare) =>
  firebase.firestore().collection('posts').doc().set({
    textShare,
    date: firebase.firestore.FieldValue.serverTimestamp(),
    user:firebase.auth().currentUser.email,
  });

posting.addEventListener('submit', async (e)  =>{
  e.preventDefault();
   console.log("Share");
   const textShare= posting['textPost'];
   console.log(textShare);

   await savePost(textShare.value);

    posting.reset();
    textShare.focus();
   
   
} );
}