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
 


  const getPost = () => firebase.firestore().collection('posts').get();
  //const user = firebase.getUser();
//console.log(user);
  const onGetPost = (callback) => firebase.firestore().collection('posts').onSnapshot(callback);

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
        <button class= "btn_log" id = "btn_del">Delete</button>
        <button class= "btn_log" id = "btn_edit">Edit</button>
      </div>
      </div>
      `;
    });
   
   console.log("Estoy entrando");

   });
    
  });
  
  const menu=document.querySelectorAll('#menuVerMas');

//   const  viewMore= () => {
//     menu.forEach(function (button) {
//         button.addEventListener('click', function (event) {
//             const id = event.target.dataset.id;
//             // const movie = findById(data, id)
//             // modal.style.display = "block";
//             // createModal(movie);
//             // closeModal();
//             }
            
            
//         )

//     });
// }

  const posting = document.getElementById('postForm');

  const savePost = (textShare) =>
  firebase.firestore().collection('posts').doc().set({
    textShare,
    date: Date.now(),//firebase.firestore.Timestamp.fromDate(new Date()),
    user:firebase.auth().currentUser.email
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

const botonPost= document.getElementById('btnMAs');

}
