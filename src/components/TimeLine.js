/* eslint-disable */

import { onNavigate } from '../routes.js';

import {logOutUser, dataBase } from '../lib/fireBase.js';
//import { async } from 'regenerator-runtime';


export const toViewtimeline = (container) => {
    
    const html = `
    <div class = "TimeContainer">
    <header class="timelineHeader">
    <div class = "headTimeline">
    <img class="iconApp" src="img/Component 1.png">
    <input type="button" class="btn_log logout" value="salir" id="logOut" />
    </div>
    </header>
    <section class="timeLineSection" id="section">
    <form class="TextArea" id="postForm">
      <div class= "textAreaPost" >
        <textarea text="textArea" class="textPost" id="textPost" rows="5" cols="40" maxlength="500" placeholder="Post something :)"></textarea>
        <input type="submit" id="buttonNewPost" value="Share" /> 
      </div>
    </form>
    <div class = "postContainer"  id = "postContainer"></div>
    
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

  const savePost = (textShare) =>
  dataBase.collection('posts').doc().set({
    textShare
  });
  const getPost = () => dataBase.collection('posts').get();
  //const user = firebase.getUser();
//console.log(user);
  const onGetPost = (callback) => firebase.firestore().collection('posts').onSnapshot(callback);

  window.addEventListener('DOMContentLoaded', async (e) =>{
   
    onGetPost((querySnapshot) => {
      postContainer.innerHTML = '';
      querySnapshot.forEach(doc =>{
      const userUID = firebase.auth().currentUser;
        //console.log(stateUser());
     
     postContainer.innerHTML += `<div class= "post_container">
      <p>${userUID.email}</p>
      <h2>${doc.data().textShare}</h2>
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
