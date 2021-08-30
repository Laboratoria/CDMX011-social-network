/* eslint-disable */

import { onNavigate } from '../routes.js';

import {logOutUser, stateUser} from '../lib/fireBase.js';


export const toViewtimeline = (container) => {
    
    const html = `
    <header class="timelineHeader">
    <div class = "headTimeline">
      <img class="iconApp" src="img/Component 1.png">
    </div>
    </header>
    <section id="section">
      <div class="divTextArea" id="postForm">
      <div class= "textAreaPostBlue">
        <textarea text="textArea" class="textPost" id="textPost" rows="5" cols="40" maxlength="500" placeholder="Post something :)"></textarea>
        <input type="button" id="buttonNewPost" value="Share" /> 
      </div>
    </div>
    <input type="button" class="btn_log google" value="salir" id="logOut" />
  </section>
   
`;
 
    container.innerHTML = html

    const post = document.createElement('div');
    container.appendChild(post);

    const toLogOut = document.getElementById('logOut');
  toLogOut.addEventListener('click', () => {
   
    logOutUser().then(() => {
      onNavigate('/');
    });
  });
}