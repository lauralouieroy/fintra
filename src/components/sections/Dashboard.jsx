import { FaWallet, FaCheckCircle, FaClock } from "react-icons/fa";

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

      {/* ===== STATS ===== */}
      <div className="stats">

        <div className="card premium">
          <div className="card-top">
            <FaWallet className="card-icon blue" />
            <span className="trend">+12%</span>
          </div>
          <p>Total Credits</p>
          <h2>₱12,723.44</h2>
          <div className="mini-graph blue"></div>
        </div>

        <div className="card premium">
          <div className="card-top">
            <FaCheckCircle className="card-icon green" />
            <span className="trend">+8%</span>
          </div>
          <p>Completed</p>
          <h2>₱5,049.99</h2>
          <div className="mini-graph green"></div>
        </div>

        <div className="card premium">
          <div className="card-top">
            <FaClock className="card-icon orange" />
            <span className="trend negative">-3%</span>
          </div>
          <p>Pending</p>
          <h2>₱7,673.45</h2>
          <div className="mini-graph orange"></div>
        </div>

      </div>

      {/* ===== GRID ===== */}
      <div className="dashboard-grid">

        {/* BILLING */}
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

        {/* BANK */}
        <div className="glass-card">
          <h3>Bank Transfers</h3>

          <div className="bank-list">
            <div className="bank-item">
              <strong>BDO</strong>
              <span>₱5,000 Completed</span>
            </div>

            <div className="bank-item">
              <strong>BPI</strong>
              <span>₱2,300 Pending</span>
            </div>
          </div>
        </div>

        {/* DONUT SUMMARY */}
        <div className="glass-card">
          <h3>Total Distribution</h3>

          <div className="donut">
            <div className="donut-center">
              ₱12,723
              <span>Total</span>
            </div>
          </div>
        </div>

      </div>

      {/* TABLE */}
      <div className="glass-card full">
        <h3>Credit List</h3>

        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Amount</th>
                <th>Status</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Juan Dela Cruz</td>
                <td>₱1,200</td>
                <td className="status completed">Completed</td>
                <td>May 1</td>
              </tr>

              <tr>
                <td>Maria Santos</td>
                <td>₱800</td>
                <td className="status pending">Pending</td>
                <td>May 3</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
}

export default Dashboard;