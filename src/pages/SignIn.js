import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { ui, uiConfig } from "../firebaseUI";
import { onAuthStateChanged } from "firebase/auth";

export default function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize FirebaseUI
    ui.start("#firebaseui-auth-container", uiConfig);

    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed, user:", user);
      if (user) {
        console.log("User is signed in, navigating to dashboard");
        navigate("/dashboard");
      } else {
        console.log("No user is signed in");
      }
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div>
      <h1>Sign In</h1>
      <div id="firebaseui-auth-container"></div>
    </div>
  );
}
