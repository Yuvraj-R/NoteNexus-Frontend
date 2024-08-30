import React from "react";
import "../css/Home.css";
import { handleGetStartedClick } from "../utils/navigationUtils"; // Import the utility function

export default function Home({ isSignedIn }) {
  return (
    <div className="home">
      <header className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            Your <span className="highlight">AI-Powered</span> Notetaker for Smarter, More Efficient
            Conversations
          </h1>
          <p className="hero-description">
            Transform your conversations into actionable insights with our cutting-edge transcription and
            summarization platform.
          </p>
          <button className="cta-button" onClick={() => handleGetStartedClick(isSignedIn)}>
            Get Started
          </button>
        </div>
      </header>
    </div>
  );
}
