// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZDHdidbbIie2oe0pFbGs4FTtKA5kbIrU",
  authDomain: "netflix-clone-5be7f.firebaseapp.com",
  databaseURL: 'https://next-firebase-stripe-39bf8-default-rtdb.firebaseio.com',
  projectId: "netflix-clone-5be7f",
  storageBucket: "netflix-clone-5be7f.appspot.com",
  messagingSenderId: "47082667111",
  appId: "1:47082667111:web:624c9e4670f3259f23a8c2"
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }