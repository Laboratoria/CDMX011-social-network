export const allFunctions = {
  validEmail(email) {
    const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const isValid = expReg.test(email);
    return isValid;
  },
  /* comparePassword : function(password, confirmPassword){
        if (password === confirmPassword){
            return true
        }
    }
    */
};
