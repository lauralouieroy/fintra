function Bank() {
  return (
    <section className="section">
      <h2 className="section-title">Bank Transfers</h2>

      <div className="cards">
        <div className="glass-card">
          <h3>BDO</h3>
          <p>QR + Transfer Tracking</p>
        </div>

        <div className="glass-card">
          <h3>BPI</h3>
          <p>QR + Transfer Tracking</p>
        </div>
      </div>

      <div className="glass-card full">
        <h3>Transfer Status</h3>
        <p>Monitor completed and pending transfers</p>
      </div>
    </section>
  );
}

export default Bank;