/* eslint-disable */
//crear modal
export const showModal = document.getElementById("modal");
import {  updatePost, savePost } from '../lib/fireBase.js';
import { onNavigate } from './LogIn.js';
// import {postContainer} from './TimeLine.js';
// const showModal = document.getElementsByClassName("TimeContainer");
///modal
export const modal = () => {
    console.log('entro a modal');
    showModal.innerHTML += `
    <div class="modal-content">
    <div class="modal-header">
      <span class="close" ">&times;</span>
      <h1>Post something :)</h1>
    </div>
    <div class="description">
    <form  id="postForm">
    <textarea text="textArea" class="textPost" id="textPost" rows="5" cols="40" maxlength="500" placeholder="Post something :)"></textarea><br>
    <input type="submit" id="buttonNewPost"  value="Share" />   
</form>
    </div>
  </div>
    `
    let editStatus = false;
    let id = '';
    const posting = document.getElementById('postForm');
    console.log(posting);


posting.addEventListener('submit', async (e) => {
    e.preventDefault();

    //console.log("Share");
    const textShare= posting['textPost'];
    //console.log(textShare);

    if (!editStatus) {
      await savePost(textShare.value);
      showModal.style.visibility= "hidden";
    } else {
      await updatePost(id, {
        
        textShare: textShare.value
      });

      editStatus = false;
      id = '';
      posting['buttonNewPost'].value = 'Share';

    };

    closeModal();
    posting.reset();
    textShare.focus();

  }); 



}



    

export const closeModal = () => {
    const span = document.getElementsByClassName("close")[0];
    console.log(span);
    span.addEventListener('click', function () {
        showModal.style.visibility= "hidden";
    })

    window.onclick = function (event) {// When the user clicks anywhere outside of the modal, close it

        if (event.target == showModal) {
            showModal.style.visibility= "hidden";
        }
    }
}

     //Editar post//
    //  const btnEdit = postContainer.querySelectorAll('.edit');
    //  btnEdit.forEach(btn => {
    //    btn.addEventListener('click', async (e) => {
    //      const doc = await getPost(e.target.dataset.id);
    //      console.log(doc.data());

    //      editStatus = true;
    //      id = doc.id;

    //      posting["textPost"].value = doc.data().textShare;
    //      posting['buttonNewPost'].value = 'Update';
    //    });
    //  });
export const editPost= (status, text, id)=>{
    console.log('entro a modal');
    showModal.innerHTML += `
    <div class="modal-content">
    <div class="modal-header">
      <span class="close" ">&times;</span>
      <h1>Post something</h1>
    </div>
    <div class="description">
    <form  id="postForm">
    <textarea text="textArea" class="textPost" id="textPost" rows="5" cols="40" maxlength="500" placeholder="Post something :)">${text}</textarea><br>
    <input type="submit" id="buttonNewPost"  value="Update" />   
</form>
    </div>
  </div>
    `
    // closeModal();
    
    let editStatus = false;
    
    const posting = document.getElementById('postForm');
    
posting.addEventListener('submit', async (e) => {
  e.preventDefault();

  //console.log("Share");
  const textShare= posting['textPost'];
  //console.log(textShare);

  if (!editStatus) {
    await savePost(textShare.value);
    showModal.style.visibility= "hidden";
  } else {
    await updatePost(id, {
      
      textShare: textShare.value
    });

    editStatus = false;
    id = '';
    posting['buttonNewPost'].value = 'Share';

  };

  closeModal();
  posting.reset();
  textShare.focus();

}); 
}