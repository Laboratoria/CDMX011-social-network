/**
 * @jest-environment jsdom
 */
/* eslint-disable */

import './globals/firebase.js';
import { toViewSignUp } from '../src/components/signUp.js';

describe("Colección de test en SignUp", () => {
    document.body.innerHTML=`<div id="root"></div>`;
    
    it("Should render in SignUp", () => {
        const rootDiv=document.getElementById('root');
        //const component=toViewLogIn();
        toViewSignUp(rootDiv);
        //console.log(rootDiv.innerHTML);
       expect(rootDiv.innerHTML).toMatchSnapshot();
    });

    it("should log when btn signUp is clicked", () =>{
        const mockSignUp= jest.fn();
        mockSignUp.mockImplementation(()=>Promise.resolve()); 

        firebase.auth= jest.fn().mockImplementation(()=>({
            createUserWithEmailAndPassword: mockSignUp,
        }));
        const rootDiv=document.getElementById('root');
        //const component=toViewLogIn();
        toViewSignUp(rootDiv);

        const email='testing@test.com';
        const password='123456.';

        document.getElementById('singUpEmail').value=email;
        document.getElementById('singUpPassword').value=password;

        document.getElementById('btnSignUp').click();
        expect(mockSignUp).toHaveBeenCalledWith(email, password);

    })

    
      });