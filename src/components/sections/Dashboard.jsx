function Dashboard() {
  return (
    <section className="section">
      {/* HEADER */}
      <div className="section-header">
        <h2 className="section-title">Dashboard</h2>
        <p className="section-subtitle">
          Overview of your financial activity
        </p>
      </div>

      {/* STATS CARDS */}
      <div className="stats">
        <div className="card">
          <p>Total Credits</p>
          <h2>₱12,723.44</h2>
          <span className="card-note">All recorded credits</span>
        </div>

        <div className="card green">
          <p>Completed</p>
          <h2>₱5,049.99</h2>
          <span className="card-note">Paid successfully</span>
        </div>

        <div className="card orange">
          <p>Pending</p>
          <h2>₱7,673.45</h2>
          <span className="card-note">Awaiting payment</span>
        </div>
      </div>

      {/* BILLING TRACKER */}
      <div className="glass-card">
        <div className="card-header">
          <h3>Billing Due Tracker</h3>
          <span className="badge">Upcoming</span>
        </div>

        <div className="billing-list">
          <div className="billing-item">
            <div>
              <p className="billing-name">Juan Dela Cruz</p>
              <span className="billing-date">Due: May 10</span>
            </div>
            <span className="billing-amount">₱1,200</span>
          </div>

          <div className="billing-item">
            <div>
              <p className="billing-name">Maria Santos</p>
              <span className="billing-date">Due: May 12</span>
            </div>
            <span className="billing-amount">₱800</span>
          </div>

          <div className="billing-empty">
            No overdue payments 🎉
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dashboard;