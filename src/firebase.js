import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyAtXDgL2EMQi0r16Uo8HObw_JCWoNs_VEQ",
  authDomain: "cleverp-todo-app.firebaseapp.com",
  projectId: "cleverp-todo-app",
  storageBucket: "cleverp-todo-app.appspot.com",
  messagingSenderId: "722871312888",
  appId: "1:722871312888:web:e3ba328cc82b914357f60d",
  measurementId: "G-Z2R0QLMF3B",
});

const db = firebaseApp.firestore();

export default db;
