// eslint-disable-next-line import/no-duplicates
// eslint-disable-next-line import/named
 import { getData } from '../lib/fireStore';
// eslint-disable-next-line import/no-unresolved
import { templatePost } from '../componets/muro.js';

export const imprimirPost() {
  getData()
    .then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, doc.data());
        templatePost(doc.data());
      });
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.log('Error getting documents: ', error);
    });
} 
