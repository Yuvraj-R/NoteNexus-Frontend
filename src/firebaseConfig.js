import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD5ch3SKv6T3rnHzoQ91MTm1XYJK-H5_Ls",
  authDomain: "notenexus-9574b.firebaseapp.com",
  projectId: "notenexus-9574b",
  storageBucket: "notenexus-9574b.appspot.com",
  messagingSenderId: "594641846152",
  appId: "1:594641846152:web:83ef384d016bd804f0843d",
  measurementId: "G-P1DDXSFGTR",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
