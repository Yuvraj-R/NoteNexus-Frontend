import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebaseConfig";
import { ui, uiConfig } from "../firebaseUI";
import { onAuthStateChanged } from "firebase/auth";
import "../css/SignIn.css"; // Import the CSS for sign-in styling

export default function SignIn() {
  const navigate = useNavigate();

  useEffect(() => {
    // Initialize FirebaseUI
    ui.start(".signin-container", uiConfig); // Directly target the signin-container

    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Auth state changed, user:", user);
      if (user) {
        navigate("/dashboard"); // Redirect to dashboard if user is signed in
      }
    });

    // Clean up the listener on component unmount
    return () => unsubscribe();
  }, [navigate]);

  return (
    <div className="signin-container">
      <h1 className="signin-header">Sign In</h1>
      {/* FirebaseUI will inject the sign-in UI into this container */}
    </div>
  );
}
