import Ilustration from './Ilustration.js';

const Container = () => {
  const div = document.createElement('div');

  div.className = 'Container';
  div.appendChild(Ilustration);

  return div;
};

export default Container;
