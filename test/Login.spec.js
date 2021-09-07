/**
 * @jest-environment jsdom
 */
import './globals/firebase';
import { Login } from '../src/components/Login.js';
import { render } from '../src/utils.js';
import { Register } from '../src/components/Register';
import { Home } from '../src/components/Home';

/* eslint-disable no-console */

describe('Testeando Login', () => {
  document.body.innerHTML = '<div id="root"></div>';

  test('debería renderizar', () => {
    const rootDiv = document.getElementById('root');
    const component = Login();
    render(rootDiv, component);

    expect(rootDiv.innerHTML).toMatchSnapshot();
  });

  test('Debe logear al usuario al hacer submit', () => {
    const mockLogin = jest.fn();
    mockLogin.mockImplementation(() => Promise.resolve());

    firebase.auth = jest.fn().mockImplementation(() => ({
      signInWithEmailAndPassword: mockLogin,
    }));
    const rootDiv = document.getElementById('root');
    const component = Login();
    render(rootDiv, component);

    const email = 'test@email.com';
    const password = '123456';

    document.getElementById('email').value = email;
    document.getElementById('password').value = password;

    document.getElementById('btnLogin').click();

    expect(mockLogin).toHaveBeenCalledWith(email, password);
  });
});
describe('Testeando Register', () => {
  document.body.innerHTML = '<div id="root"></div>';

  test('debería renderizar', () => {
    const rootDiv = document.getElementById('root');
    const component = Register();
    render(rootDiv, component);

    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
  test('Debe crear al usuario al hacer submit', () => {
    const mockLogin = jest.fn();
    mockLogin.mockImplementation(() => Promise.resolve());

    firebase.auth = jest.fn().mockImplementation(() => ({
      createUserWithEmailAndPassword: mockLogin,
    }));
    const rootDiv = document.getElementById('root');
    const component = Register();
    render(rootDiv, component);

    const email = 'test@email.com';
    const password = '123456';

    document.getElementById('email').value = email;
    document.getElementById('password').value = password;

    document.getElementById('btnRegister').click();

    expect(mockLogin).toHaveBeenCalledWith(email, password);
  });
});
describe('Testeando Home', () => {
  document.body.innerHTML = '<div id="root"></div>';

  test('debería renderizar', () => {
    const rootDiv = document.getElementById('root');
    const component = Home();
    render(rootDiv, component);

    expect(rootDiv.innerHTML).toMatchSnapshot();
  });
});
