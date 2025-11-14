import React, { useState } from "react";
import "./index.css";

function App() {
  const [finalPrice, setFinalPrice] = useState(200);
  const [code, setCode] = useState("");
  const [paymentConfirmed, setPaymentConfirmed] = useState(false);

  const applyDiscount = () => {
    if (code === "SAVE40") {
      setFinalPrice(120);
    }
  };

  const confirmPayment = () => {
    setPaymentConfirmed(true);
  };

  return (
    <div className="app">
      {/* Header */}
      <header className="header glass-card">
        <img src="assets/profile/rituraj_photo.png" alt="Rituraj" className="profile-pic" />
        <h1>Rituraj - United Mod</h1>
        <img src="assets/icons/app_icon.png" alt="App Icon" className="app-icon" />
      </header>

      {/* Price Section */}
      <section className="glass-card">
        <p className="price">Price: ₹{finalPrice}</p>
        <input
          type="text"
          placeholder="Enter discount code"
          onChange={(e) => setCode(e.target.value)}
        />
        <button onClick={applyDiscount}>Apply</button>
      </section>

      {/* Payment Section */}
      <section className="glass-card">
        <img src="assets/payment/payment_qr.png" alt="UPI QR Code" className="qr" />
        <p>UPI ID: rituraj@upi</p>
        <p>Amount: ₹{finalPrice}</p>
        <button onClick={confirmPayment}>Confirm Payment</button>
      </section>

      {/* Download Section */}
      {paymentConfirmed && (
        <section className="download-section glass-card">
          <p className="success">Payment Successful ✅</p>
          <a href="https://drive.google.com/your-app-link" target="_blank" rel="noreferrer">
            <button>Open Google Drive Link</button>
          </a>
        </section>
      )}

      {/* About Section */}
      <section className="glass-card">
        <h2>About Rituraj - United Mod</h2>
        <p>
          Rituraj - United Mod is designed by Rituraj to provide secure and innovative features.
        </p>
        <img src="assets/visuals/web_dev.png" alt="Web Development Visual" />
        <p>Contact: +91-XXXXXXXXXX | rituraj@example.com</p>
      </section>
    </div>
  );
}

export default App;
    
