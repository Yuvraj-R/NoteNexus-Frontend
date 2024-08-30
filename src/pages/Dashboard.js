import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";

function Dashboard() {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  if (loading) return <p>Loading...</p>;
  if (!user) return navigate("/signin"); // Redirect to sign-in if not authenticated

  return <div>Welcome to the Dashboard</div>;
}

export default Dashboard;
