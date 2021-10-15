/**
 * @jest-enviroment jsdom
 */
import { render } from "../src/component";
describe('colecciones de test sobre el DOM', () => {
  test('Test sobre render', () => {
    const renderizado = render();
    console.log(renderizado.outerHTML);
    
  })
})