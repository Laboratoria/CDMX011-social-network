const firebaseConfig = {
  apiKey: 'AIzaSyCpSAPKtWEyb1-aAVANceUzbFweVmWSHhQ',
  authDomain: 'social-network-ciclovida.firebaseapp.com',
  projectId: 'social-network-ciclovida',
  storageBucket: 'social-network-ciclovida.appspot.com',
  messagingSenderId: '234593177540',
  appId: '1:234593177540:web:c7f9fd5ea153a826df1e91',
};

firebase.initializeApp(firebaseConfig);

export default firebase;

export const db = firebase.firestore();