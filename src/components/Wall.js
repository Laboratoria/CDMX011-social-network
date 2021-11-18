/* eslint-disable max-len */
/* eslint-disable import/no-cycle */
import { sharePost } from '../lib/post.js';
import { onNavigate } from '../main.js';
import { obtainPosts, deletePost } from '../lib/post.js';
import { db } from '../lib/firebase.js';

export const Wall = () => {
  const wallDiv = document.createElement('div');
  wallDiv.className = 'wallDiv';

  const mainLogoW = document.createElement('div');
  mainLogoW.className = 'mainLogoW';
  mainLogoW.textContent = 'ciclovida';

  const logoDivW = document.createElement('div');
  logoDivW.className = 'logoDivW';
  logoDivW.textContent = 'ciclovida';

  const wallWelcome = document.createElement('div');
  wallWelcome.className = 'wallWelcome';
  wallWelcome.textContent = '🌳🌳🌳🌳🌳🌳   🚴   🌳🌳🌳🌳🌳🌳';

  const postSection = document.createElement('form');
  postSection.className = 'postSection';

  const postInput = document.createElement('textarea');
  postInput.className = 'postInput';
  postInput.setAttribute('placeholder', 'Comparte tu experiencia más reciente...');

  const publishBtn = document.createElement('button');
  publishBtn.className = 'publishBtn';
  publishBtn.textContent = 'Publicar';

  publishBtn.addEventListener('click', () => {
    sharePost(postInput.value);
  });

  const sharedPost = document.createElement('container');
  sharedPost.className = 'sharedPost';

  const textPost = document.createElement('p');
  textPost.className = 'textPost';

  sharedPost.appendChild(textPost);

  const linePost = document.createElement('div');
  linePost.className = 'linePost';

  const logoutBtn = document.createElement('button');
  logoutBtn.classList = 'logoutBtn';
  logoutBtn.textContent = 'Cerrar sesión';

  logoutBtn.addEventListener('click', () => onNavigate('/'));

  wallDiv.append(wallWelcome, mainLogoW, logoDivW, postSection, postInput, publishBtn, sharedPost, linePost, logoutBtn);

  const visualizePosts = () => {
    obtainPosts().onSnapshot((querySnapshot) => {
      sharedPost.innerHTML = '';
      querySnapshot.forEach((doc) => {
        const divPost = document.createElement('div');
        divPost.className = 'divPost';
        const updateBtn = document.createElement('button');
        updateBtn.className = 'updateBtn';
        updateBtn.textContent = 'Editar';
        const deleteBtn = document.createElement('button');
        deleteBtn.className = 'deleteBtn';
        deleteBtn.textContent = 'Eliminar';
        console.log(doc);
        deleteBtn.addEventListener('click', () => {
          deletePost(doc.id);
          console.log(doc.id);
        });
        const post = `<p>${doc.data().texto}</p>`;
        divPost.innerHTML = post;
        sharedPost.append(divPost, updateBtn, deleteBtn);
      });
    });
  };
  visualizePosts();

  return wallDiv;
};
