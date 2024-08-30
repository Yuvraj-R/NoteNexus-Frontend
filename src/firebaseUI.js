import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import * as firebaseui from "firebaseui";
import { auth } from "./firebaseConfig";
import { useNavigate } from "react-router-dom";

// FirebaseUI configuration
const uiConfig = {
  signInSuccessUrl: "/dashboard", // Redirect to dashboard after sign-in
  signInOptions: [EmailAuthProvider.PROVIDER_ID],
  callbacks: {
    signInSuccessWithAuthResult: (authResult) => {
      console.log("Sign-in successful", authResult);
      return false; // Return false to prevent the redirect, we handle it manually
    },
  },
};

// Initialize FirebaseUI
const ui = new firebaseui.auth.AuthUI(auth);

export { ui, uiConfig };
