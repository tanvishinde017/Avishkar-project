import React from "react";
import Card from "../components/Card";
import ProgressBar from "../components/ProgressBar";
import "../style.css";

const RoadmapPage = ({ careerRoadmap, setView }) => {
  return (
    <div className="container">
      {/* Progress Indicator */}
      <div className="progress-bar">
        <div className="progress">1. Personal Info</div>
        <div className="progress">2. Skill Gap</div>
        <div className="progress">3. Opportunities</div>
        <div className="progress active">4. Roadmap</div>
      </div>

      <h2>🛤️ My Career Roadmap</h2>
      <p className="subtitle">
        Follow this personalized journey to achieve your career goals 🚀
      </p>

      <div className="timeline">
        {careerRoadmap.map((step, index) => (
          <div
            key={index}
            className={`timeline-step ${
              step.progress === 100 ? "completed" : ""
            }`}
          >
            <div className="circle">{index + 1}</div>
            <div className="timeline-content">
              <h3>{step.milestone}</h3>
              <ProgressBar value={step.progress} />
              <p className="status">
                {step.progress === 100
                  ? "✅ Completed"
                  : `In Progress (${step.progress}%)`}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Achievements Section */}
      <div className="achievements">
        <h3>🏆 Achievements Unlocked</h3>
        <ul>
          {careerRoadmap
            .filter((s) => s.progress === 100)
            .map((done, idx) => (
              <li key={idx}>✔ {done.milestone}</li>
            ))}
        </ul>
      </div>

      {/* Navigation */}
      <div className="form-actions">
        <button className="btn secondary" onClick={() => setView("dashboard")}>
          ⬅ Back to Dashboard
        </button>
        <button className="btn primary" onClick={() => setView("home")}>
          🔄 Restart
        </button>
      </div>
    </div>
  );
};

export default RoadmapPage;

