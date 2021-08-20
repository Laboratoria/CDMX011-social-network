// Este es el punto de entrada de tu aplicacion

import { myFunction, email, password } from './lib/index.js';

myFunction();
auth
.createUserWithEmailAndPassword(email, password)
.then(userCredential=>{
  register.reset();
})