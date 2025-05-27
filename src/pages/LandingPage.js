import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';


const LandingPage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleSignupClick = () => {
    navigate('/signup');
  };
   return (
        <div className="landing-container">
            <div className="main-content">
                {/* Header */}
                <header className="header">
                    <div className="header-left">
                        <div className="logo-icon">
                            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M36.7273 44C33.9891 44 31.6043 39.8386 30.3636 33.69C29.123 39.8386 26.7382 44 24 44C21.2618 44 18.877 39.8386 17.6364 33.69C16.3957 39.8386 14.0109 44 11.2727 44C7.25611 44 4 35.0457 4 24C4 12.9543 7.25611 4 11.2727 4C14.0109 4 16.3957 8.16144 17.6364 14.31C18.877 8.16144 21.2618 4 24 4C26.7382 4 29.123 8.16144 30.3636 14.31C31.6043 8.16144 33.9891 4 36.7273 4C40.7439 4 44 12.9543 44 24C44 35.0457 40.7439 44 36.7273 44Z"
                                    fill="currentColor" />
                            </svg>
                        </div>
                        <h2 className="logo-text">HealthAI</h2>
                    </div>
                    <div className="header-right">
                        <div className="nav-links">
                            <a href="#">About</a>
                            <a href="#">Features</a>
                            <a href="#">Help/Support</a>
                        </div>
                        <div className="auth-buttons">
                             <button className="signup-btn" onClick={handleSignupClick}>Sign up</button>
              <button className="login-btn" onClick={handleLoginClick}>Login</button>
                        </div>
                    </div>
                </header>

                {/* Body */}
                <div className="body-content">
                    <div className="intro-section">
                        <h1 className="headline">Your personal AI health advisor</h1>
                        <p className="subtext">
                            Get personalized health insights and recommendations tailored to your unique needs. Start your journey to better health today.
                        </p>
                        <div className="cta-buttons">
                           <button className="login-main" onClick={handleLoginClick}>Login</button>
              <button className="signup-main" onClick={handleSignupClick}>Signup</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
