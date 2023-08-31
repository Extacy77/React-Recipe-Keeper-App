import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBv7VR02yOvWKxgVsv6xmV2_w8xE_fZACI",
  authDomain: "react-recipe-app-990f4.firebaseapp.com",
  projectId: "react-recipe-app-990f4",
  storageBucket: "react-recipe-app-990f4.appspot.com",
  messagingSenderId: "436916933130",
  appId: "1:436916933130:web:fd27aeb66808d0084585f3",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
