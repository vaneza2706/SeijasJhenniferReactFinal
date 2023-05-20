
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAtC0nbBfFrxJkoHq0BgheYt9SFqraIhhE",
  authDomain: "cosmeticos-aroma.firebaseapp.com",
  projectId: "cosmeticos-aroma",
  storageBucket: "cosmeticos-aroma.appspot.com",
  messagingSenderId: "746857618157",
  appId: "1:746857618157:web:6b01adb8c758bf66910ae4"
};

 
const app = initializeApp(firebaseConfig);
export const db = getFirestore (app)