function RoleModal({ onSelect }) {
  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h2>Select Access</h2>
        <p>Choose how you want to use FinTra</p>

        <div className="modal-actions">
          <button onClick={() => onSelect("viewer")}>
            Continue as Viewer
          </button>

          <button
            className="primary"
            onClick={() => onSelect("admin")}
          >
            Administrator
          </button>
        </div>
      </div>
    </div>
  );
}

export default RoleModal;