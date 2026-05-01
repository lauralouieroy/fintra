import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import RoleModal from "./components/RoleModal";
import PasswordModal from "./components/PasswordModal";

import Dashboard from "./components/sections/Dashboard";
import PaymentQR from "./components/sections/PaymentQR";
import Bank from "./components/sections/Bank";
import Credit from "./components/sections/Credit";

function App() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  const [role, setRole] = useState(null);
  const [showRoleModal, setShowRoleModal] = useState(false);
  const [showPasswordModal, setShowPasswordModal] = useState(false);

  /* PRELOADER */
  useEffect(() => {
    let current = 0;

    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 3;

      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);

        setTimeout(() => {
          setLoading(false);
          setShowRoleModal(true); // 👈 trigger modal after loading
        }, 600);
      } else {
        setProgress(current);
      }
    }, 80);

    return () => clearInterval(interval);
  }, []);

  /* ROLE SELECT */
  const handleRoleSelect = (selected) => {
    if (selected === "admin") {
      setShowRoleModal(false);
      setShowPasswordModal(true);
    } else {
      setRole("viewer");
      setShowRoleModal(false);
    }
  };

  /* PASSWORD CHECK */
  const handlePasswordSubmit = (password) => {
    if (password === "password") {
      setRole("admin");
      setShowPasswordModal(false);
    } else {
      alert("Incorrect password");
    }
  };

return (
  <>
    {/* PRELOADER (ONLY FIRST LOAD) */}
    {loading ? (
      <div className="preloader">
        <div className="preloader-content">
          <div className="preloader-logo">
            <img src="/fintra-icon.png" className="logo-img" />
          </div>

          <h1 className="preloader-name">
            <span className="fin">Fin</span>
            <span className="tra">Tra</span>
          </h1>

          <p className="preloader-subtext">
            Smart Financial Tracker
          </p>

          <div className="preloader-progress">
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="progress-text">
              Loading... {progress}%
            </p>
          </div>
        </div>
      </div>
    ) : (
      <>
        {/* ROLE MODAL */}
        {showRoleModal && (
          <RoleModal onSelect={handleRoleSelect} />
        )}

        {/* PASSWORD MODAL */}
        {showPasswordModal && (
          <PasswordModal onSubmit={handlePasswordSubmit} />
        )}

        {/* MAIN APP */}
        {role && (
          <div className="app">
            <Navbar role={role} />

            <div className="container">
              <Dashboard />
              <PaymentQR />
              <Bank />
              <Credit />
            </div>
          </div>
        )}
      </>
    )}
  </>
);
}

export default App;