/* eslint-disable */
//crear modal
export const showModal = document.getElementById("modal");
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
    `}

export const closeModal = () => {
    const span = document.getElementsByClassName("close")[0];
    console.log(span);
    span.addEventListener('click', function () {
        showModal.style.display = "none";
    })

    window.onclick = function (event) {// When the user clicks anywhere outside of the modal, close it

        if (event.target == showModal) {
            showModal.style.display = "none";
        }
    }
}