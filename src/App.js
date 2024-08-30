import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import SignIn from "./pages/SignIn"; // Add SignIn component
import Navbar from "./components/Navbar";
import { auth } from "./firebaseConfig"; // Import Firebase auth
import { useAuthState } from "react-firebase-hooks/auth"; // Hook to manage auth state
import { setPersistence, browserLocalPersistence } from "firebase/auth";

function App() {
  const [user, loading] = useAuthState(auth); // Get user state

  if (loading) return <p>Loading...</p>; // Handle loading state

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isSignedIn={!!user} />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home isSignedIn={!!user} />} />
            <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/signin" />} />
            <Route path="/signin" element={<SignIn />} /> {/* Route for sign-in */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
