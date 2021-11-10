/* eslint-disable import/no-cycle */
import { sharePost } from "../lib/post.js";
import { onNavigate } from "../main.js";

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
  wallWelcome.textContent = '🌳🌳🌳    🚴   🌳🌳🌳';

  const postSection = document.createElement('form');
  postSection.className = 'postSection';

  const postInput = document.createElement('textarea');
  postInput.className = 'postInput';
  postInput.setAttribute('placeholder', 'Comparte tu experiencia más reciente');

  const publishBtn = document.createElement('button');
  publishBtn.className = 'publishBtn';
  publishBtn.textContent = 'Publicar';

  publishBtn.addEventListener('click', () => {
    sharePost(postInput.value);
  });

  const logoutBtn = document.createElement('button');
  logoutBtn.classList = 'logoutBtn';
  logoutBtn.textContent = 'Cerrar sesión';

  logoutBtn.addEventListener('click', () => onNavigate('/'));

  wallDiv.append(wallWelcome, mainLogoW, logoDivW, postSection, postInput, publishBtn, logoutBtn);

  return wallDiv;
};
