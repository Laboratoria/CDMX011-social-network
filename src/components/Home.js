/* eslint-disable */
import { onNavigate } from '../routes.js';
import {continueGoogle} from '../lib/fireBase.js';
import {continueGitHub} from '../lib/fireBase.js';




export const toViewHome = (container) => {
  console.log('estoy en home');
  const html = `
 
  <div class = "homeContainer">
    <section class="container">
        <img class="logo" src="img/PIC&ART.png" alt="logo">
        <div class="content">
        <p>Share your ideas in the largest art community. Get inspired with different styles and genres around your country.
        </p>
        <input type="button" class="btn_log login" value="LOG IN" id="toLogIn" />
        <input type="button" class="btn_log signup" value="SIGN UP" id="toCreate" /><br>
        <p2>──────  or  ──────</p2><br>
        <input type="button" class="btn_log google" value="Continue with Google" id="toGoogle" />
        <input type="button" class="btn_log github" value="Continue with GitHub" id="toGitHub" />
        </div>
    </section>
  </div>
  </div>`
  
  ;

  container.innerHTML = html;

  const toCreate = document.getElementById('toCreate');
  toCreate.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/signUp');
   // console.log(stateUser());
  });
  const toLogIn = document.getElementById('toLogIn');
  toLogIn.addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/LogIn');
    //stateUser();
  });
  const toContinueGoogle = document.getElementById('toGoogle');
  toContinueGoogle.addEventListener('click', () => {
    continueGoogle()
    .then((result) => {
      onNavigate('/TimeLine');
      console.log(result);
      console.log('google done');
    }).catch((error) => {
      console.log(error.message);
    });
    
    //e.preventDefault();
    //onNavigate('/LogIn');
  });
  const toContinueGitHub = document.getElementById('toGitHub');
  toContinueGitHub.addEventListener('click', (e) => {
    e.preventDefault();
    continueGitHub()
    .then((result) => {
      onNavigate('/TimeLine');
      console.log('github login');
     
    }).catch((error)=>{
      console.log(error.message);
      console.log('algo no está bieeen');
    })
  });
};
