import logo from "../assets/fintra-icon.png";
import { FaBars, FaBell, FaUserCircle } from "react-icons/fa";

function Navbar({ role, toggleSidebar }) {
  return (
    <div className="navbar">
      <div className="nav-left">
        <div className="menu-icon" onClick={toggleSidebar}>
          <FaBars />
        </div>

        <div className="search-bar">
          <input placeholder="Search anything..." />
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="nav-right">
        <div className="role-dropdown">
          {role === "admin" ? "Administrator" : "Viewer"}
        </div>

        <div className="icon-btn">
          <FaBell />
          <span className="notif-badge">3</span>
        </div>

        <button className="btn-outline">
          <FaUserCircle />
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

