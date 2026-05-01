import { useState } from "react";

function PasswordModal({ onSubmit }) {
  const [password, setPassword] = useState("");

  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h2>Admin Access</h2>

        <input
          type="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="primary"
          onClick={() => onSubmit(password)}
        >
          Enter
        </button>
      </div>
    </div>
  );
}

export default PasswordModal;