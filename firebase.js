// firebase.js (FINAL WORKING)

const firebaseConfig = {
  apiKey: "AIzaSyAMYRg0WZpZd2wEXVsTPrrfQcD_-Zy3DJY",
  authDomain: "sreesastha-computers.firebaseapp.com",
  projectId: "sreesastha-computers",
  storageBucket: "sreesastha-computers.firebasestorage.app",
  messagingSenderId: "640111745930",
  appId: "1:640111745930:web:af6fa56895bbecbecb4673"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Services
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();