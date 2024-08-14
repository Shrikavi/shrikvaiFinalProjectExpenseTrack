import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../resources/landing.css';

function Landing() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="hero-container">
        <div className="hero-content">
          <h1 className="hero-headline">Take Control of Your Finances</h1>
          <p className="hero-subheadline">
            Track your expenses, plan your budget, and achieve your financial goals.
          </p>
          
          <div className="hero-buttons">
            <Link to="/register" className="cta-button">Get Started</Link>
            <Link to="/login" className="cta-button">Login</Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-section">
        <h2 className="features-headline">Why Choose Us?</h2>
        <div className="features-grid">
          <div className="feature-item">
            <h3>Easy to Use</h3>
            <p>Our app is simple and intuitive, making financial management a breeze.</p>
          </div>
          <div className="feature-item">
            <h3>Secure</h3>
            <p>Your data is protected with top-notch security measures.</p>
          </div>
          <div className="feature-item">
            <h3>Comprehensive Analytics</h3>
            <p>Get detailed insights into your spending habits.</p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <h2 className="cta-headline">Start Your Financial Journey Today</h2>
        <div className="hero-buttons">
        <Link to="/register" className="cta-button">Sign Up Now</Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
