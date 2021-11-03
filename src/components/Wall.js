export const Wall = () => {
  const wallDiv = document.createElement('div');
  wallDiv.className = 'wallDiv';

  const wallWelcome = document.createElement('div');
  wallWelcome.className = 'wallWelcome';
  wallDiv.textContent = 'Comparte tu experiencia más reciente';

  const mainLogoW = document.createElement('div');
  mainLogoW.className = 'mainLogoR';
  mainLogoW.textContent = 'ciclovida';

  const logoDivW = document.createElement('div');
  logoDivW.className = 'logoDivR';
  logoDivW.textContent = 'ciclovida';

  wallDiv.append(wallWelcome, mainLogoW, logoDivW);

  return wallDiv;
};
