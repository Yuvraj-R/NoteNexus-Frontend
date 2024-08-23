import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";

// Pages
import Home from "./pages/Home";

// Components
import Navbar from "./components/Navbar.js";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(true);

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isSignedIn={isSignedIn} />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Catch-all route that redirects to Home */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
