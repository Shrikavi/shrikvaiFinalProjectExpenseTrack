import React from 'react';
import '../resources/about.css'; // Import the CSS file
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';


function About() {
  return (
    <div>
      <Navbar />
      <div className="about-container">
        <header className="about-header">
          <h1>About Us</h1>
          <p>
            Learn more about ExTi and what we offer to make your financial life easier.
          </p>
        </header>
        
        <section className="about-section control-overview">
          <h2>Why We Created This App</h2>
          <div className="control-grid">
            <div className="control-item">
              <img src="/images/perfect-control-icon.png" alt="Perfect Control" className="control-icon" />
              <h3>Perfect Control</h3>
              <p>Over all your cash expenses, bank accounts, E-Wallets, and crypto wallets.</p>
            </div>
            <div className="control-item">
              <img src="/images/quick-overview-icon.jpg" alt="Quick Overview" className="control-icon" />
              <h3>Quick Overview</h3>
              <p>About your total incomes and expenses at a glance and in one place.</p>
            </div>
            <div className="control-item">
              <img src="/images/smart-budgets-icon.jpg" alt="Smart Budgets" className="control-icon" />
              <h3>Smart Budgets</h3>
              <p>To save money for a new car, dreamy vacation, or top university.</p>
            </div>
          </div>
        </section>
        
        <section className="about-section step">
          <h2>Step 1</h2>
          <h3>Track your spending effortlessly</h3>
          <ul>
            <li>Connect your bank accounts to automatically track your spending.</li>
            <li>Manually add expenses and income for complete accuracy.</li>
            <li>Organize your transactions into categories for better insights.</li>
          </ul>
          
        </section>

        <section className="about-section step">
          <h2>Step 2</h2>
          <h3>Visualize your financial health</h3>
          <ul>
            <li>View your spending patterns with easy-to-read charts and graphs.</li>
            <li>Compare your expenses over time to identify trends.</li>
            <li>Use insights to make informed financial decisions.</li>
          </ul>
          
        </section>

        <section className="about-section step">
          <h2>Step 3</h2>
          <h3>Make your spending stress-free</h3>
          <ul>
            <li>Set smart budgets to help you not to overspend in chosen category.</li>
            <li>Know how much you can spend daily in order to stick to your budget.</li>
            <li>Save money for your future dreams.</li>
          </ul>
          
        </section>

        <section className="about-section features">
          <h2>Features our users love</h2>
          <div className="feature-grid">
            <div className="feature-item">
              <img src="/images/shared-wallets.png" alt="Shared Wallets" />
              <h3>Shared wallets</h3>
              <p>Are popular among couples, families, and roommates who handle their finances in ExTi.</p>
            </div>
            <div className="feature-item">
              <img src="/images/connecting-bank-accounts.jpg" alt="Connecting Bank Accounts" />
              <h3>Connecting bank accounts</h3>
              <p>To ExTi is preferred by people paying mostly by card.</p>
            </div>
            <div className="feature-item">
              <img src="/images/customize-ExTi.jpg" alt="Customize ExTi" />
              <h3>Customize ExTi</h3>
              <p>Customize your categories, add a picture or a location to every expense.</p>
            </div>
            <div className="feature-item">
              <img src="/images/multiple-currencies.jpg" alt="Multiple Currencies" />
              <h3>Multiple currencies</h3>
              <p>Are favored by travelers and digital nomads managing money in more currencies.</p>
            </div>
            <div className="feature-item">
              <img src="/images/alerts-reminders.jpg" alt="Alerts and Reminders" />
              <h3>Alerts and reminders</h3>
              <p>Will notify you to pay the bill or not to exceed the budget.</p>
            </div>
            
          </div>
        </section>

        <section className="about-section testimonials">
          <h2>Why people use ExTi</h2>
          <div className="testimonial-grid">
            <div className="testimonial-item">
              <p>The app works intuitively, it makes it super easy to control your money. It helps me to develop healthy spending habits.</p>
              <p className="author">Roy</p>
            </div>
            <div className="testimonial-item">
              <p>I am using this app for more than two years and I could not be happier with the service I got.</p>
              <p className="author">Marek</p>
            </div>
            <div className="testimonial-item">
              <p>I've tried other money tracking apps before ExTi, but I choose to stick to this because of its simplicity and intuitive design.</p>
              <p className="author">Harnet</p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default About;
