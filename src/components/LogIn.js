export {onNavigate} from '../routes.js';

export const toViewLogIn = (container) => {
    console.log("Estoy en LogIn");
    const html = ` <section class="container logIn-form">
    <img class="logo" src="img/PIC&ART.png" alt="logo">
    <form id="submitForm">
        <label value="email">E-mail</label><br>
        <input id="logInEmail" type="text" placeholder="e-mail" /><br>
        <label value="password">Password</label><br>
        <input id="logInPassword" type="password" placeholder="Password" /><br>
        <p class="error red-text center-align"></p>
        <br><input type="submit" class="btn_log signup" value="LOG IN" /><br>
        <p2>or </p2><br>
        <input type="button" class="btn_log google" value="Continue with Google" />
        <br>
    </form>
    
    <a href="javascript:history.back();"> <img class="return" src="img/return.png" alt="logo"   ></a>
</section>`;
    container.innerHTML = html
    
    
};