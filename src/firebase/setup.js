
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import {getFirestore} from "firebase/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyADSYAZeqlGDS9ukMRoQwGft6QWBxNjLhw",
  authDomain: "linkedin-clone-ba248.firebaseapp.com",
  projectId: "linkedin-clone-ba248",
  storageBucket: "linkedin-clone-ba248.appspot.com",
  messagingSenderId: "94722782485",
  appId: "1:94722782485:web:21b1bbe99572301657e51c"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider(app)
export const database = getFirestore(app)
