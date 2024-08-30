import { getAuth, signOut } from "firebase/auth";

export function handleGetStartedClick(isSignedIn) {
  if (isSignedIn) {
    window.location.href = "/dashboard";
  } else {
    window.location.href = "/signin"; // Redirect to sign-in page
  }
}

export function signOutUser() {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("User signed out successfully.");
      window.location.href = "/"; // Redirect to the home page after signing out
    })
    .catch((error) => {
      console.error("Error signing out: ", error);
    });
}
