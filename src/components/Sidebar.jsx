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

function Sidebar({ isOpen, activePage, setActivePage }) {
  return (
    <div className={`sidebar ${isOpen ? "" : "collapsed"}`}>

      <div className="sidebar-inner">

        {/* LOGO */}
        <div className="sidebar-logo">
          <img src={logo} className="sidebar-logo-img" />
          {isOpen && (
            <h2>
              <span className="fin">Fin</span>
              <span className="tra">Tra</span>
            </h2>
          )}
        </div>

        {/* MENU */}
<div className="sidebar-menu">

  <div
    className={`menu-item ${activePage === "dashboard" ? "active" : ""}`}
    onClick={() => setActivePage("dashboard")}
  >
    <FaHome />
    {isOpen && <span>Dashboard</span>}
  </div>

  <div
    className={`menu-item ${activePage === "credits" ? "active" : ""}`}
    onClick={() => setActivePage("credits")}
  >
    <FaCreditCard />
    {isOpen && <span>Credits</span>}
  </div>

  <div
    className={`menu-item ${activePage === "payments" ? "active" : ""}`}
    onClick={() => setActivePage("payments")}
  >
    <FaMoneyBillWave />
    {isOpen && <span>Payments</span>}
  </div>

  <div
    className={`menu-item ${activePage === "bank" ? "active" : ""}`}
    onClick={() => setActivePage("bank")}
  >
    <FaUniversity />
    {isOpen && <span>Bank Transfers</span>}
  </div>

  <div
    className={`menu-item ${activePage === "reports" ? "active" : ""}`}
    onClick={() => setActivePage("reports")}
  >
    <FaChartBar />
    {isOpen && <span>Reports</span>}
  </div>

  <div
    className={`menu-item ${activePage === "users" ? "active" : ""}`}
    onClick={() => setActivePage("users")}
  >
    <FaUsers />
    {isOpen && <span>Users</span>}
  </div>

  <div
    className={`menu-item ${activePage === "settings" ? "active" : ""}`}
    onClick={() => setActivePage("settings")}
  >
    <FaCog />
    {isOpen && <span>Settings</span>}
  </div>

</div>

        {/* FOOTER CARD */}
        {isOpen && (
          <div className="sidebar-card">
            <div className="wallet-icon">💼</div>
            <p>
              Stay on top of your finances and never miss a payment.
            </p>
            <div className="progress-line"></div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Sidebar;