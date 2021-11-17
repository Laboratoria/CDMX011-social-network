export const CardPost = (postData) => {
  const newPostDiv = document.createElement('div');
  const avatarNameContent = document.createElement('div');
  const editText = document.createElement('button');
  // const deleteText = document.createElement('h5');
  const imgAvatar = document.createElement('img');
  const datePost = document.createElement('div');
  const textPost = document.createElement('div');
  const likesDiv = document.createElement('div');
  const imgLikes = document.createElement('img');
  const comment = document.createElement('h4');
  const formatDate = new Date(postData.date.toDate());
  /* const users = doc.data();
  users.id = doc.id; */

  newPostDiv.className = 'newPostDiv';
  avatarNameContent.className = 'avatarNameContent';
  editText.className = 'editText';
  editText.id = 'post.id';
  imgAvatar.className = 'imgAvatar';
  textPost.className = 'textPost';
  datePost.className = 'datePost';
  likesDiv.className = 'likesDiv';
  imgLikes.className = 'imgLikes';
  comment.className = 'comment';

  imgLikes.src = './components/thumbs-up.png';
  imgAvatar.src = './components/default-person.png';

  newPostDiv.appendChild(avatarNameContent);
  avatarNameContent.appendChild(editText);
  avatarNameContent.appendChild(imgAvatar);
  avatarNameContent.appendChild(datePost);
  newPostDiv.appendChild(textPost);
  newPostDiv.appendChild(likesDiv);
  likesDiv.appendChild(imgLikes);
  likesDiv.appendChild(comment);

  editText.textContent = 'Eliminar';
  textPost.textContent = postData.messagePost;
  datePost.textContent = formatDate.toLocaleString('en-GB');
  comment.textContent = 'Comentar';

  /* const deletePost = document.querySelectorAll('.editText');
  deletePost.forEach(btn => {
    btn.addEventListener('click', (e) => {
      console.log(e.target.dataset);
    });
  }); */

  return newPostDiv;
};
