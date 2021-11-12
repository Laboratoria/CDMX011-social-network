export const CardPost = (postData) => {
  const newPostDiv = document.createElement('div');
  newPostDiv.className = 'newPostDiv';
  newPostDiv.textContent = postData.messagePost;

  return newPostDiv;
};
