/* import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCdEAb0O3mwjWYcRmRbnzsJvepAwN4OUFw",
  authDomain: "proyecto-ecommerce-ec62a.firebaseapp.com",
  projectId: "proyecto-ecommerce-ec62a",
  storageBucket: "proyecto-ecommerce-ec62a.appspot.com",
  messagingSenderId: "540835645304",
  appId: "1:540835645304:web:2f5765d45d2c27752e6a8d",
});

export const auth = firebase.auth();

 */
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdEAb0O3mwjWYcRmRbnzsJvepAwN4OUFw",
  authDomain: "proyecto-ecommerce-ec62a.firebaseapp.com",
  projectId: "proyecto-ecommerce-ec62a",
  storageBucket: "proyecto-ecommerce-ec62a.appspot.com",
  messagingSenderId: "540835645304",
  appId: "1:540835645304:web:2f5765d45d2c27752e6a8d",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();

export default app;
