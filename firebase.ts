import {getApp, getApps, initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjTdeAi8M5qkcCEyMwdJpVUNcHoo4UkyQ",
  authDomain: "chatgpt-messenger-yt-d849c.firebaseapp.com",
  projectId: "chatgpt-messenger-yt-d849c",
  storageBucket: "chatgpt-messenger-yt-d849c.appspot.com",
  messagingSenderId: "634563386801",
  appId: "1:634563386801:web:a10a8bf365f48245593190"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};