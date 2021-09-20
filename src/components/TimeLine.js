/* eslint-disable */

import { onNavigate } from '../routes.js';
import { modal, closeModal, showModal, editPost } from './ModalPost.js';
import { logOutUser, onGetPost, getPost, updatePost, deletePost,addLikes, savePost, disLike, actualUser } from '../lib/fireBase.js';
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
    <div><input src='../img/homeL.png' class='btnNavBarMovil' id="ToGoHome" type='image' /></div>
    <div><input src='../img/post1.png' class='btn_mas' id='newPost' type='image' /></div>
    <div><input src='../img/logOutt.png' id='logOut' class="btnNavBarMovil" type='image' /></div>
    </nav> 

    <section class="TimeContainer" id="section">
    <form  id="postForm1">
       <!-- <textarea text="textArea" class="textPost1" id="textPost1" rows="5" cols="40" maxlength="500" placeholder="Post something :)" required ></textarea><br>
        <input type="submit" id="buttonNewPost"  value="Share" /> -->
        
    </form>
    <div class= "postContainer"  id = "postContainer"></div>
    
  </section>

 
  </div>
`;

// let imagenEmptyLike = "../img/emptylike.png"
// let imagenLike ="../img/like.png"
// let btnValue = ""
// const imgLike = (boo) => {
//   btnValue = boo
//  }

  // stateUser();
  firebase.auth().onAuthStateChanged((getUser) => {

    if (getUser) {
    let editStatus = false;
    let id = '';
    container.innerHTML = html

    const postContainer = document.getElementById('postContainer');
    
    //Log out de app
    const toLogOut = document.getElementById('logOut');
      toLogOut.addEventListener('click', () => {

      logOutUser().then(() => {
        onNavigate('/');
        });
      });


    //Post

    const posting = document.getElementById('postForm');

        console.log(actualUser()) // uid del usuario actual
        //Cargar la pagina y aparezcan los post 
        onGetPost((querySnapshot) => {
          postContainer.innerHTML = '';
          querySnapshot.forEach(doc => {

            //Obtener id de cada post//
            const postData = doc.data();
            postData.id = doc.id;
            const likeUser = postData.likes.includes(actualUser());
            const postLikes= doc.data().likes.length; //longitud del array de likes
            //console.log(postLikes);

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
      <label for="${postData.id}" class="${postData.uid}" ></label>
      
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
      <div class="likes"><input id='like' src='${likeUser ? '../img/like.png' : '../img/emptylike.png'}'  data-id="${postData.id}" name="like" class='btn_like' type='image' value="${postData.id}"/></div> 
      <div class="countLike">${postLikes} </div>
  

      </div>
        </div>

        `
            const labelOptions = document.querySelectorAll(`.${postData.uid}`);


            // console.log(postEmail);
            if (actualUser() == postUid) {
              labelOptions.forEach(btn2 => {
                btn2.innerHTML=`<div class='labelPost' >...</div>`;
                
              })
              // document.getElementsByClassName("labelPost").style.display= "none";
            }
            
            //Borrar post//
            const btnDel = postContainer.querySelectorAll('.delete');
            btnDel.forEach(btn => {
              btn.addEventListener('click', async (e) => {
                //console.log(e.target.dataset.id);// es el ID del post clickeado
                await deletePost(e.target.dataset.id);
              });
            });

            //Botón like//
                   
                      
            const btnLike = postContainer.querySelectorAll('.likes');
            btnLike.forEach(btn => {
              btn.addEventListener('click', async (e) => {
              const docpost =  await getPost(e.target.dataset.id);
              console.log(docpost);
                const postEdit = docpost.data();
                id = docpost.id;
                const uidUser = firebase.auth().currentUser.uid;
                const likesFb = firebase.firestore().collection('posts').doc(id)
                //console.log(docpost)
                const likeArray = postEdit.likes;
  
              if(likeArray.includes(uidUser)) {
                likesFb.update({
                  likes: firebase.firestore.FieldValue.arrayRemove(uidUser) //se tendría que agregar el uid
                });

                btn.src = '../img/emptylike.png';
                    console.log("le quité mi like");
              }else {
                btn.src = '../img/like.png';
                likesFb.update({
                      likes: firebase.firestore.FieldValue.arrayUnion(uidUser)
                    });
                    
                    console.log("le di like");
              }
          });
        });
     
     

            //Editar post//
            const btnEdit = postContainer.querySelectorAll('.edit');
            btnEdit.forEach(btn => {
              btn.addEventListener('click', async (e) => {
                const doc = await getPost(e.target.dataset.id);
                id = doc.id;
                
              showModal.style.visibility = "visible";
              editPost(true,doc.data().textShare, id );
             closeModal();
                
                // posting["textPost"].value = doc.data().textShare;
                // posting['buttonNewPost'].value = 'Update';
              });
            });

        });  });

          //to create a new post
            const toNewPost = document.getElementById('newPost');
            toNewPost.addEventListener('click', () => {
              console.log('click evento');
              showModal.style.visibility = "visible";
            // container.innerHTML=`<div id="modal" class="modal"></div>`;
              //llamar modal
              modal(actualUser());
              closeModal();
      
            });

            //To go home

            const home= document.getElementById('ToGoHome');
            home.addEventListener('click', () =>{
              onNavigate('/TimeLine');
            })
    
    //Share post
    //   posting.addEventListener('submit', async (e) => {
    //   e.preventDefault();

    //   //console.log("Share");
    //   const textShare= posting['textPost'];
    //   //console.log(textShare);

    //   if (!editStatus) {
    //     await savePost(textShare.value);
    //   } else {
    //     await updatePost(id, {
    //       textShare: textShare.value
    //     });

    //     editStatus = false;
    //     id = '';
    //     posting['buttonNewPost'].value = 'Share';

    //   };


    //   posting.reset();
    //   textShare.focus();

    // }); 
  
    }else {
          onNavigate('/');
        }
    

    });
}
