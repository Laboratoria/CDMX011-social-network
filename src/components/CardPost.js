export const CardPost = (postData) => {
  const newPostDiv = document.createElement('div');
  const imgAvatar = document.createElement('img');
  const textPost = document.createElement('div');
  const datePost = document.createElement('div');
  const imgLikes = document.createElement('img');

  const formatDate = new Date(postData.date.toDate());

  newPostDiv.className = 'newPostDiv';
  imgAvatar.className = 'imgAvatar';
  textPost.className = 'textPost';
  datePost.className = 'datePost';
  imgLikes.className = 'imgLikes';

  imgLikes.src = './components/thumbs-up.png';

  textPost.textContent = postData.messagePost;
  datePost.textContent = formatDate.toLocaleString('en-GB');
  newPostDiv.appendChild(textPost);
  newPostDiv.appendChild(datePost);
  newPostDiv.appendChild(imgLikes);

  return newPostDiv;
};
