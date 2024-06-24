// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-112d1.firebaseapp.com",
  projectId: "mern-blog-112d1",
  storageBucket: "mern-blog-112d1.appspot.com",
  messagingSenderId: "358643287524",
  appId: "1:358643287524:web:9940190f144ba39f6c73f1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
