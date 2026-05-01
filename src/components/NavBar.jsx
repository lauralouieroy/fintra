import logo from "../assets/fintra-icon.png";

function Navbar({ role }) {
  return (
    <div className="navbar">
      {/* LEFT: LOGO */}
      <div className="logo">
        <img src={logo} alt="FinTra Logo"  />
        <h2>
          <span className="fin">Fin</span>
          <span className="tra">Tra</span>
        </h2>
      </div>

      {/* RIGHT: ACTIONS */}
      <div className="nav-actions">
        <span className="role-badge">
          {role === "admin" ? "Administrator" : "Viewer"}
        </span>

        <button className="btn-outline">
          Profile
        </button>

        <button className="btn-primary">
          Logout
        </button>
      </div>
    </div>
  );
}

export default Navbar;