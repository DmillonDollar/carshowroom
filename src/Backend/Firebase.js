
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyDfo8Mb-JFREU82dB5NjIw-nBOcBk83qv8",
  authDomain: "carshowsroom.firebaseapp.com",
  projectId: "carshowsroom",
  storageBucket: "carshowsroom.appspot.com",
  messagingSenderId: "107775240296",
  appId: "1:107775240296:web:b6456399a2424defcdf3dd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const data = getFirestore(app)
export const storage =  getStorage(app)