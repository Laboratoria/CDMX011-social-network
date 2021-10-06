/**
 * @jest-enviroment jsdom
 */
// eslint-disable-next-line import/no-unresolved
import { tsObjectKeyword } from '@babel/types';
import { render } from '../src/component';

describe('colecciones de test sobre el DOM', () => {
      const renderizado = render();
      test('Test sobre render', () => {
    /*console.log(renderizado.outerHTML);*/
    expect(renderizado.outerHTML).toBe('<div><button class="btn-first">Haz clic aqui</button>')
  });
  test('Comportamiento al hacer clic', () => {
      const button = renderizado.querySelector('.btn-first');
      console.log(button.outerHTML);
  });
});
