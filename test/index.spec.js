/* eslint-disable */

/**
 * @jest-environment jsdom
 */

 import { toViewLogIn} from './components/LogIn.js';
 

describe("Colección de test en Home", () => {
     const renderizado = toViewHome();
     it("Test sobre render en Home", () => {
         console.log(renderizado);
         expect(typeof toViewHome).toBe('function');
     });
 });


