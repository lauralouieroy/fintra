function Credit() {
  return (
    <section className="section">
      <h2 className="section-title">Credit List</h2>

      {/* FILTERS */}
      <div className="filters">
        <input placeholder="Search name..." />
        <select>
          <option>All Status</option>
          <option>Completed</option>
          <option>Pending</option>
        </select>
        <button className="btn-primary">Add Credit</button>
      </div>

      {/* TABLE */}
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

      {/* SUMMARY */}
      <div className="summary">
        <div className="glass-card">
          <h3>Total Per Person</h3>
          <p>Juan: ₱1,200</p>
          <p>Maria: ₱800</p>
        </div>
      </div>
    </section>
  );
}

export default Credit;