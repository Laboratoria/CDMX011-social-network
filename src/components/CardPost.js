export const CardPost = (postData) => {
  const newPostDiv = document.createElement('div');
  newPostDiv.className = 'newPostDiv';

  const textPost = document.createElement('div');
  textPost.className = 'textPost';
  textPost.textContent = postData.messagePost;
  newPostDiv.appendChild(textPost);

  const datePost = document.createElement('div');
  datePost.class = 'datePost';
  datePost.textContent = postData.date;
  newPostDiv.appendChild(datePost);

  return newPostDiv;
};
