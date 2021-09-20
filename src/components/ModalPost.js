/* eslint-disable */
//crear modal
export const showModal = document.getElementById("modal");
import { updatePost, savePost } from '../lib/fireBase.js';
import { onNavigate } from './LogIn.js';
// import {postContainer} from './TimeLine.js';
// const showModal = document.getElementsByClassName("TimeContainer");
///modal
export const modal = (id) => {
  showModal.innerHTML += `
    <div class="modal-content">
    <div class="modal-header">
      <span class="close">&times;</span>
      <h1>Post something :)</h1>
    </div>
    <div class="description">
    <form  id="postForm" >
    <textarea text="textArea" class="textPost" id="textPost" rows="5" cols="40" maxlength="500" placeholder="Post something :)"></textarea><br>
    <input type="submit" id="buttonNewPost"  value="Share" />   
</form>
    </div>
  </div>
    `
  let btnView = document.querySelectorAll('#postForm');
  console.log(btnView);
  const posting = document.getElementById('postForm');


  btnView.forEach(function (posting) {
    posting.addEventListener('submit', async (e) => {
      e.preventDefault();

      const textShare = posting['textPost'];
      //console.log(textShare);
      await savePost(textShare.value);
      showModal.style.visibility = "hidden";


      posting.reset();
      textShare.focus();

    });


  });
}
let span;

export const editPost = ( text, id) => {
  console.log('entro a modal');
  showModal.innerHTML += `
    <div class="modal-content">
    <div class="modal-header">
      <span class="close" ">&times;</span>
      <h1>Post something</h1>
    </div>
    <div class="description">
    <form  id="postEditForm">
    <textarea text="textArea" class="textPost" id="textPost" rows="5" cols="40" maxlength="500" placeholder="Post something :)">${text}</textarea><br>
    <input type="submit" id="buttonNewPost"  value="Update" />   
</form>
    </div>
  </div>
    `
  const editPosting = document.getElementById('postEditForm');

  editPosting.addEventListener('submit', async (e) => {
    e.preventDefault();

    const textShare = editPosting['textPost'];

    await updatePost(id, {

      textShare: textShare.value
    });




    editPosting.reset();
    textShare.focus();
    showModal.style.visibility = "hidden";
  });

}

export const closeModal = () => {

   span = document.querySelectorAll(".close");
   console.log(span)
   span.forEach(function (close) {
  close.addEventListener('click', function () {
    showModal.style.visibility = "hidden";
  })
   })
  window.onclick = function (event) {// When the user clicks anywhere outside of the modal, close it

    if (event.target == showModal) {
      showModal.style.visibility = "hidden";
    }
  }
}