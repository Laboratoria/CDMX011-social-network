/**
 * @jest-environment jsdom
 */
/* eslint-disable */

import {firebase} from './globals/firebase.js';
import { toViewHome } from '../src/components/Home.js';
import { toViewLogIn} from '../src/components/LogIn.js';

// describe("Colección de test en Home", () => {
//     document.body.innerHTML=`<div id="root"></div>`;
    
//     it("Should render in Home", () => {
//         const rootDiv=document.getElementById('root');
//         console.log(rootDiv);
//         expect(typeof toViewHome).toBe('function');
//     });
// });

describe("Colección de test en logIn", () => {
        document.body.innerHTML=`<div id="root"></div>`;
        
        it("Should render in logIn", () => {
            const rootDiv=document.getElementById('root');
            const component=toViewLogIn();
            
            console.log(rootDiv.innerHTML);
          //  expect(typeof toViewLogIn).toBe('function');
        });
    });

