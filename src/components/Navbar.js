import "../css/Navbar.css";
import { handleGetStartedClick, signOutUser } from "../utils/navigationUtils"; // Import the utility functions

export default function Navbar({ isSignedIn }) {
  return (
    <div className="navbar">
      <div className="navbar-left">
        {/* Logo and Brand Name as Link to Homepage */}
        <a href="/" className="navbar-home-link">
          <img src="NoteNexusLogo.png" alt="logo" className="navbar-logo" />
          <span className="navbar-brand">NoteNexus</span>
        </a>
      </div>
      <div className="navbar-center">
        {/* Navigation Links */}
        <a href="#platform" className="navbar-link">
          Platform
        </a>
        <a href="#demo" className="navbar-link">
          Try it!
        </a>
      </div>
      <div className="navbar-right">
        {/* Call-to-action Button */}
        <button
          className="navbar-cta-button"
          onClick={isSignedIn ? signOutUser : () => handleGetStartedClick(isSignedIn)}
        >
          {isSignedIn ? "Sign Out" : "Get Started"}
        </button>
      </div>
    </div>
  );
}
