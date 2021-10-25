export const Footer = () => {
  const footer = document.getElementById('myFooter');
  const copyright = document.createElement('div');
  const copyrightIcon = document.createElement('div');
  const copyrightCircle = document.createElement('div');
  const copyrightLetterC = document.createElement('div');
  const copyrightText = document.createElement('div');

  copyright.className = 'Copyright';
  copyrightIcon.className = 'CopyrightIcon';
  copyrightCircle.className = 'CopyrightCircle';
  copyrightLetterC.className = 'LetterC';
  copyrightText.className = 'CopyrightText';

  copyrightLetterC.textContent = 'C';
  copyrightText.textContent = '2021 DevSocial. Todos los derechos reservados';

  footer.appendChild(copyright);
  copyright.appendChild(copyrightIcon);
  copyrightIcon.appendChild(copyrightCircle);
  copyrightIcon.appendChild(copyrightLetterC);
  copyright.appendChild(copyrightText);

  return footer;
};
