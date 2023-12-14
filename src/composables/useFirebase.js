import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: "AIzaSyB-zLrgSaCrqEo2m4MTBEq5bJHbvTn-Uq8",
  authDomain: "delishaus-90abe.firebaseapp.com",
  projectId: "delishaus-90abe",
  storageBucket: "delishaus-90abe.appspot.com",
  messagingSenderId: "34542089280",
  appId: "1:34542089280:web:888816259e1772d66f5ba5"
};

export const firebaseApp = initializeApp(firebaseConfig)