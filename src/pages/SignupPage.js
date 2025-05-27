import React, { useState } from 'react';
import './signstyle.css';
import { useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    otp: ''
  });

  const [showOTP, setShowOTP] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // TODO: Backend API call to send OTP can be added here
    console.log("Signup details:", formData);
    setShowOTP(true); // show OTP input
  };

  const handleVerify = () => {
    // TODO: Backend OTP verification logic here
    console.log("OTP entered:", formData.otp);

    // Dummy OTP check
    if (formData.otp.length === 6) {
      alert("OTP verified successfully!");
      navigate('/login'); // redirect to login
    } else {
      alert("Please enter a valid 6-digit OTP.");
    }
  };

  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2>Create Your Account</h2>
        <form className="signup-form" onSubmit={handleSignup}>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Create Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          {!showOTP && <button type="submit">Sign Up</button>}
        </form>

        {showOTP && (
          <div className="otp-section">
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              maxLength={6}
              value={formData.otp}
              onChange={handleChange}
            />
            <button onClick={handleVerify}>Verify</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
