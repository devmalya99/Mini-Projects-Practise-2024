


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQgg27AtY6MdqnvQQf-1A_7Pu7JH3t39M",
  authDomain: "fir-base-01.firebaseapp.com",
  projectId: "fir-base-01",
  storageBucket: "fir-base-01.appspot.com",
  messagingSenderId: "373327612458",
  appId: "1:373327612458:web:9ae1eb2e815886fdb99153"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app

// Initialize Firestore
export const db = getFirestore(app);
