/**
 * @jest-environment jsdom
 */
/* eslint-disable */

import './globals/firebase.js';
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
            //const component=toViewLogIn();
            toViewLogIn(rootDiv);
            //console.log(rootDiv.innerHTML);
           expect(rootDiv.innerHTML).toMatchSnapshot();
        });

        it("should log when btn logIn is clicked", () =>{
            const mockLogIn= jest.fn();
            mockLogIn.mockImplementation(()=>Promise.resolve()); 

            firebase.auth= jest.fn().mockImplementation(()=>({
                signInWithEmailAndPassword: mockLogIn,
            }));
            const rootDiv=document.getElementById('root');
            //const component=toViewLogIn();
            toViewLogIn(rootDiv);

            const email='testing@gmail.com';
            const password='12345.';

            document.getElementById('logInEmail').value=email;
            document.getElementById('logInPassword').value=password;

            document.getElementById('btnLogIn').click();
            expect(mockLogIn).toHaveBeenCalledWith(email, password);

        })

        
          });

