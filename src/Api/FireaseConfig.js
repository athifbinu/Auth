// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
import {getStorage} from "firebase/storage"
import { signInWithPopup } from "firebase/auth";
import { GithubAuthProvider } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzUAlbHZ7-pSyqnYX6MU2x8EJ3yz24Xa8",
  authDomain: "masine-test.firebaseapp.com",
  projectId: "masine-test",
  storageBucket: "masine-test.appspot.com",
  messagingSenderId: "927182073492",
  appId: "1:927182073492:web:325a1f9c220a3a6c614e81"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//to connect auth in firebase
export const auth=getAuth(app)

export const db=getFirestore(app)

export const storage=getStorage(app)

export const provider=new GoogleAuthProvider()

export const GithubProvider=new GithubAuthProvider()



export default app


