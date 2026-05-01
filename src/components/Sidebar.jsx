import logo from "../assets/fintra-icon.png";
import {
  FaHome,
  FaCreditCard,
  FaMoneyBillWave,
  FaUniversity,
  FaChartBar,
  FaUsers,
  FaCog
} from "react-icons/fa";

function Sidebar({ isOpen }) {
  return (
    <div className={`sidebar ${isOpen ? "open" : "collapsed"}`}>

      {/* LOGO */}
      <div className="sidebar-logo">
        <img src={logo} alt="FinTra Logo" className="sidebar-logo-img" />
        {isOpen && (
          <h2>
            <span className="fin">Fin</span>
            <span className="tra">Tra</span>
          </h2>
        )}
      </div>

      {/* MENU */}
      <div className="sidebar-menu">
        <div className="menu-item active">
          <FaHome /> {isOpen && "Dashboard"}
        </div>

        <div className="menu-item">
          <FaCreditCard /> {isOpen && "Credits"}
        </div>

        <div className="menu-item">
          <FaMoneyBillWave /> {isOpen && "Payments"}
        </div>

        <div className="menu-item">
          <FaUniversity /> {isOpen && "Bank Transfers"}
        </div>

        <div className="menu-item">
          <FaChartBar /> {isOpen && "Reports"}
        </div>

        <div className="menu-item">
          <FaUsers /> {isOpen && "Users"}
        </div>

        <div className="menu-item">
          <FaCog /> {isOpen && "Settings"}
        </div>
      </div>

      {/* FOOTER */}
      <div className="sidebar-footer">
        {isOpen && <p>Stay on top of your finances</p>}
      </div>
    </div>
  );
}

export default Sidebar;