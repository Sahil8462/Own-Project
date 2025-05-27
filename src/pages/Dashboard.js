import React, { useState } from 'react';
import './dashstyle.css';

const Dashboard = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);
  const toggleQuickActions = () => setShowQuickActions(!showQuickActions);

  const handleEmergency = () => {
    // Replace with actual emergency contact logic
    window.open('tel:112');
  };

  const handleHospitals = () => {
    // Replace with actual hospital map logic
    window.open('https://maps.google.com?q=hospitals+near+me');
  };

  const handleAppointment = () => {
    // Replace with actual appointment booking logic
    alert('Redirecting to doctor appointment booking...');
  };

  return (
    <div className={`dashboard-wrapper ${darkMode ? 'dark' : ''}`}>
      <aside className="sidebar">
        <h2>AI Health App</h2>
        <ul>
          <li>Disease Prediction</li>
          <li>Skin Care</li>
          <li>Profile</li>
          <li>Logout</li>
        </ul>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div className="left">
            <h1>Welcome, Maalik 👋</h1>
            <p>Your personal AI health companion</p>
          </div>
          <div className="right">
            <button onClick={toggleDarkMode}>
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </header>

        <section className="tools-section">
          <div className="tool-card">
            <h3>🩺 Disease Prediction</h3>
            <p>Click below to start predicting diseases based on symptoms.</p>
            <button>Open Predictor</button>
          </div>

          <div className="tool-card">
            <h3>💆 Skin Care Suggestions</h3>
            <p>Upload your image and get personalized care tips.</p>
            <button>Upload & Analyze</button>
          </div>

          <div className="tool-card">
            <h3>⚖️ BMI Calculator</h3>
            <p>Check your Body Mass Index for better health tracking.</p>
            <button>Go to BMI Page</button>
          </div>
        </section>

        {/* Quick Action Buttons */}
        <div className={`quick-actions ${showQuickActions ? 'expanded' : ''}`}>
          {showQuickActions && (
            <>
              <button className="quick-btn emergency" onClick={handleEmergency}>
                🚨 Emergency
              </button>
              <button className="quick-btn hospitals" onClick={handleHospitals}>
                🏥 Hospitals
              </button>
              <button className="quick-btn appointment" onClick={handleAppointment}>
                📅 Book Doctor
              </button>
            </>
          )}
          <button className="quick-btn-toggle" onClick={toggleQuickActions}>
            {showQuickActions ? '×' : '⚡ Quick Actions'}
          </button>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;