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
  wallWelcome.textContent = 'Comparte tu experiencia más reciente';

  const postSection = document.createElement('div');
  postSection.className = 'postSection';

  const postInput = document.createElement('input');
  postInput.className = 'postInput';
  postInput.setAttribute('placeholder', 'Comparte tu experiencia más reciente');

  const publishBtn = document.createElement('button');
  publishBtn.className = 'publishBtn';
  publishBtn.textContent = 'Publicar';

  const logoutBtn = document.createElement('button');
  logoutBtn.classList = 'logoutBtn';
  logoutBtn.textContent = 'Cerrar sesión';

  wallDiv.append(wallWelcome, mainLogoW, logoDivW, postSection, postInput, publishBtn, logoutBtn);

  return wallDiv;
};
