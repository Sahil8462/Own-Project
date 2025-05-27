import React from 'react';
import './healthsummary.css';

const HealthSummaryCard = () => {
  return (
    <section className="summary-section">
      <h2>📊 Health Summary</h2>
      <div className="summary-cards">
        <div className="summary-card">
          <h4>Total Predictions</h4>
          <p>12</p>
        </div>
        <div className="summary-card">
          <h4>Last Diagnosis</h4>
          <p>Fever + Body Ache</p>
        </div>
        <div className="summary-card">
          <h4>Skin Report</h4>
          <p>Oily Skin Detected</p>
        </div>
        <div className="summary-card">
          <h4>BMI Calculator</h4>
          <button className="bmi-btn">Check BMI</button>
        </div>
      </div>
    </section>
  );
};

export default HealthSummaryCard;
