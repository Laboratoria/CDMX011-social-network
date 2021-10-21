import Logo from './Logo.js';
import Main from './Main.js';

const App = () => {
  const el = document.createElement('div');

  el.className = 'App';
  el.appendChild(Logo());
  el.appendChild(Main());

  return el;
};

export default App;
