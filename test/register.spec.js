/**
 * @jest-environment jsdom
 */
import { register } from '../src/components/register.js';

describe('DOM behavior', () => {
  document.body.innerHTML = '<div id="root"></div>';

  it('register', () => {
    const rootDiv = document.getElementById('root');
    const componet = register();
    register(componet);

    console.log(rootDiv.innerHTML);
  });
});
