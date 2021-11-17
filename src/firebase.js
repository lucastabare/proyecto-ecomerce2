import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCdEAb0O3mwjWYcRmRbnzsJvepAwN4OUFw",
  authDomain: "proyecto-ecommerce-ec62a.firebaseapp.com",
  projectId: "proyecto-ecommerce-ec62a",
  storageBucket: "proyecto-ecommerce-ec62a.appspot.com",
  messagingSenderId: "540835645304",
  appId: "1:540835645304:web:2f5765d45d2c27752e6a8d",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
export { auth };
