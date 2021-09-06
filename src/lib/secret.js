const firebaseConfig = {
  apiKey: 'AIzaSyAjdQ-egAJ8cBdNPfQzZIyQhUrpjhIrpC8',
  authDomain: 'social-network-ba343.firebaseapp.com',
  projectId: 'social-network-ba343',
  storageBucket: 'social-network-ba343.appspot.com',
  messagingSenderId: '655339195037',
  appId: '1:655339195037:web:ad599f68b38b473c806274',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
export const auth = firebase.auth();
