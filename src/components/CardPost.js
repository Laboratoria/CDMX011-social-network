export const CardPost = (postData, documentId) => {
  const newPostDiv = document.createElement('div');
  const avatarNameContent = document.createElement('div');
  const deleteText = document.createElement('button');
  // const deleteText = document.createElement('h5');
  const imgAvatar = document.createElement('img');
  const datePost = document.createElement('div');
  const textPost = document.createElement('div');
  const likesDiv = document.createElement('div');
  const imgLikes = document.createElement('img');
  const comment = document.createElement('h4');
  const formatDate = new Date(postData.date.toDate());

  newPostDiv.className = 'newPostDiv';
  newPostDiv.id = documentId;
  avatarNameContent.className = 'avatarNameContent';
  deleteText.className = 'editText';
  imgAvatar.className = 'imgAvatar';
  textPost.className = 'textPost';
  datePost.className = 'datePost';
  likesDiv.className = 'likesDiv';
  imgLikes.className = 'imgLikes';
  comment.className = 'comment';

  imgLikes.src = './components/thumbs-up.png';
  imgAvatar.src = './components/default-person.png';

  newPostDiv.appendChild(avatarNameContent);
  avatarNameContent.appendChild(deleteText);
  avatarNameContent.appendChild(imgAvatar);
  avatarNameContent.appendChild(datePost);
  newPostDiv.appendChild(textPost);
  newPostDiv.appendChild(likesDiv);
  likesDiv.appendChild(imgLikes);
  likesDiv.appendChild(comment);

  deleteText.textContent = 'Eliminar';
  textPost.textContent = postData.messagePost;
  datePost.textContent = formatDate.toLocaleString('en-GB');
  comment.textContent = 'Comentar';

  /* const deletePost = document.querySelectorAll('.deleteText');
  deletePost('id');
  deletePost.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      console.log(e.target.dataset);
      deletePost('id');
    });
  }); */

  return newPostDiv;
};
