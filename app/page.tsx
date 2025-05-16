export default function Home() {
  return (
    <main style={{ padding: "40px", fontFamily: "Arial", maxWidth: "700px", margin: "auto" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>Smartchain Tracker Portal - Prototype</h1>
      <section style={{ marginTop: "30px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Production Status</h2>
        <div style={{ height: "10px", backgroundColor: "#eee", borderRadius: "5px" }}>
          <div style={{ width: "50%", height: "100%", backgroundColor: "#4caf50" }}></div>
        </div>
        <p style={{ marginTop: "8px", fontSize: "14px", color: "#666" }}>Current Stage: Sample Shipped</p>
      </section>
      <section style={{ marginTop: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Sample Photo</h2>
        <img src="https://via.placeholder.com/400x250.png?text=Sample+Image" alt="Sample" style={{ width: "100%" }} />
      </section>
      <section style={{ marginTop: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Approve Sample</h2>
        <button style={{ marginRight: "10px", padding: "10px 20px", backgroundColor: "#4caf50", color: "#fff", border: "none", borderRadius: "5px" }}>✅ Approve</button>
        <button style={{ padding: "10px 20px", border: "1px solid #ccc", borderRadius: "5px" }}>✏️ Request Revision</button>
      </section>
      <section style={{ marginTop: "20px", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
        <h2>Messages</h2>
        <p style={{ fontSize: "14px", color: "#666" }}>Latest update: "Sample shipped on July 15. ETA: July 18."</p>
        <button style={{ marginTop: "10px", padding: "10px 20px", backgroundColor: "#2196f3", color: "#fff", border: "none", borderRadius: "5px" }}>📤 Send Message</button>
      </section>
    </main>
  );
}
