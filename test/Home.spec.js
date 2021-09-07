/**
 * @jest-environment jsdom
 */
/* eslint-disable */

import './globals/firebase.js';
import { toViewHome } from '../src/components/Home.js';

describe("Colección de test en Home", () => {
    document.body.innerHTML=`<div id="root"></div>`;
    
    it("toViewHome should be a function", () => {
        const rootDiv=document.getElementById('root');
        console.log(rootDiv);
        expect(typeof toViewHome).toBe('function');
    });

    it("Should render in Home", () => {
        const rootDiv=document.getElementById('root');
        console.log(rootDiv);
        expect(rootDiv.innerHTML).toMatchSnapshot();
    });

    // it("Should log when Google button is clicked", () => {
    //     const mockLogInGoogle= jest.fn();
    //         mockLogInGoogle.mockImplementation(()=>Promise.resolve()); 

    //         firebase.auth= jest.fn().mockImplementation(()=>({
    //             signInWithGoogle: mockLogInGoogle,
    //         }));
    //         const rootDiv=document.getElementById('root');
    //         toViewHome(rootDiv);

    //         const email='testing@gmail.com';
    //         const password='12345.';

    //         document.getElementById('toGoogle').click();
    //         expect(mockLogInGoogle).toHaveBeenCalledWith(email, password);
    // });
})