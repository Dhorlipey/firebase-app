import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDIH6Eb39PiXCCpRUe5o2u2PskxBiyFOWI",
  authDomain: "fir-auth-cf3df.firebaseapp.com",
  projectId: "fir-auth-cf3df",
  storageBucket: "fir-auth-cf3df.appspot.com",
  messagingSenderId: "633923950028",
  appId: "1:633923950028:web:86b1b46a98e0ea55d6f969",
  measurementId: "G-5WBTXHHFNX"
};

export const app = initializeApp(firebaseConfig);
