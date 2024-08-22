import "../css/Navbar.css";

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
        <a href="#features" className="navbar-link">
          Platform
        </a>
        <a href="#pricing" className="navbar-link">
          Try it!
        </a>
      </div>
      <div className="navbar-right">
        {/* Call-to-action Button */}
        <button className="navbar-cta-button">Get Started</button>
      </div>
    </div>
  );
}
