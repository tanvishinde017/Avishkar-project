import React from "react";
import "../style.css";


const HomePage = ({ setView }) => {
  return (
    <div className="home-container">
      
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">🚀 Smart Student</div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><button className="nav-btn" onClick={() => setView("personalInfo")}>Get Started</button></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-left">
          <h1 className="title">
            🚀 Smart Student <span>Opportunity Recommender</span>
          </h1>
          <p className="subtitle">
            AI-powered guidance for <strong>internships</strong>, <strong>hackathons</strong>, <strong>courses</strong>, <strong>seminars</strong>, and <strong>placements</strong>.
          </p>
          <button className="cta-btn" onClick={() => setView("personalInfo")}>
            Start My Journey
          </button>
        </div>
        <div className="hero-right">
          <img src="/app.png" alt="students and AI" className="hero-img" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2>🌟 About Smart Student</h2>
        <p>
          Your personal AI career assistant. Analyze your skills, academic performance, and interests to connect you with the best <strong>learning paths</strong>, <strong>events</strong>, and <strong>career opportunities</strong>.
        </p>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <h2>✨ Why Choose Us?</h2>
        <div className="feature-grid">
          <div className="feature-box">
            <h3>🎯 Personalized Recommendations</h3>
            <p>AI-driven suggestions based on your skills and goals.</p>
          </div>
          <div className="feature-box">
            <h3>📊 Skill Gap Analysis</h3>
            <p>Identify missing skills and get actionable insights.</p>
          </div>
          <div className="feature-box">
            <h3>🚀 Career Roadmap</h3>
            <p>Step-by-step plan to reach your dream job faster.</p>
          </div>
          <div className="feature-box">
            <h3>🌍 Global Opportunities</h3>
            <p>Find hackathons, internships, and events worldwide.</p>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <h2>💬 What Students Say</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>"This app helped me land my first internship!"</p>
            <span>- Priya, TY BSc IT</span>
          </div>
          <div className="testimonial">
            <p>"I discovered amazing hackathons that boosted my skills."</p>
            <span>- Aarav, SY BCA</span>
          </div>
          <div className="testimonial">
            <p>"The skill gap analysis showed me exactly what to learn."</p>
            <span>- Neha, FY CS</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-footer">
        <h2>Ready to boost your career?</h2>
        <button className="cta-btn" onClick={() => setView("personalInfo")}>Get Started Now</button>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>© 2025 Smart Student Recommender | Built for Students, by Students 💜</p>
        <div className="footer-links">
          <a href="#about">About</a> | <a href="#features">Features</a> | 
          <a href="#testimonials">Testimonials</a>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
