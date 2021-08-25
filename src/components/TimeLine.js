import { onNavigate } from '../routes.js';


export const toViewtimeline = (container) => {
    console.log("estoy en home");
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
   
  </section>
   
`;

    container.innerHTML = html
}