export const allFunctions = {
  validEmail(email) {
    const expReg = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    const isValid = expReg.test(email);
    return isValid;
  },

  // eslint-disable-next-line consistent-return
  validPassword(password, confirmPassword) {
    if (password.length < 5) {
      return false;
    }
    if (password !== confirmPassword) {
      return false;
    }
  },

  validPost(post) {
    if (post === '') {
      return false;
    }
    return true;
  },
};
