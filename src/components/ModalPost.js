/* eslint-disable import/no-cycle */
/* eslint-disable */
export const showModal = document.getElementById("modal");
import { updatePost, savePost } from '../lib/fireBase.js';


const createModal = () => {
  showModal.innerHTML += `
  <div class="modal-content">
  <div class="modal-header">
    <span class="close">&times;</span>
    <h1 class="modalTitle">Post something :)</h1>
  </div>
  <div class="description" id="insertHere">
  
  </div>
</div>
  `
}


export const modal = () => {

  createModal();

  const formShare = document.getElementById('insertHere');

  formShare.innerHTML = `<form  id="postForm" >
  <textarea required text="textArea" class="textPost" id="textPost" rows="5" cols="40" maxlength="500" placeholder="Post something :)"></textarea><br>
  <input type="submit" id="buttonNewPost"  value="Share" />   
</form>`;

  let btnView = document.querySelectorAll('#postForm');
  console.log(btnView);


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

export const editPost = (text, id) => {
  createModal();

  const formEdit = document.getElementById('insertHere');

  formEdit.innerHTML = `<form  id="postForm" >
  <textarea text="textArea" required class="textPost" id="textPost" rows="5" cols="40" maxlength="500" placeholder="Post something :)">${text}</textarea><br>
  <input type="submit" id="buttonNewPost"  value="Update" />   
</form>`;

  let editPosting = document.querySelectorAll('#postForm');
  console.log(editPosting);

  editPosting.forEach(editPost => {
    editPost.addEventListener('submit', async (e) => {
      e.preventDefault();

      const textShare = editPost['textPost'];

      await updatePost(id, {

        textShare: textShare.value
      });




      editPost.reset();
      textShare.focus();
      showModal.style.visibility = "hidden";
    });
  });
}

export const closeModal = () => {

  span = document.querySelectorAll(".close");
  console.log(span)
  span.forEach(function (close) {
    close.addEventListener('click', function () {
      showModal.style.visibility = "hidden";
    });
});
  window.onclick = function (event) {
    // When the user clicks anywhere outside of the modal, close it

    if (event.target == showModal) {
      showModal.style.visibility = "hidden";
    }
  }
}