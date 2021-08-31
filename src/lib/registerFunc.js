export const allFunctions = {
  validEmail(email, invalidEmail) {
    const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const isValid = expReg.test(email);
    let prueba = "";
    // eslint-disable-next-line no-alert
    if (isValid !== true) { prueba = invalidEmail.innerHTML = 'Favor de ingresar correo válido.'; }
    return prueba;
  },
  /* comparePassword : function(password, confirmPassword){
        if (password === confirmPassword){
            return true
        }
    }
    */
};
