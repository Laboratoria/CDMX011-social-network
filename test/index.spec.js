import { register } from '../src/components/register.js';

describe('DOM behavior', () => {
  test('it should bring DOM elements', () => {
    const registerTest = register();
    expect(registerTest).toBe('HTMLDivElement');
  });
});
