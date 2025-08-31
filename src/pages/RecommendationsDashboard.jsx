import React, { useState } from "react";
import Card from "../components/Card";
import Tag from "../components/Tag";
import "../style.css";

const RecommendationsPage = ({ opportunities, user, setView }) => {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Internship", "Hackathon", "Course", "Placement"];

  const filteredOpportunities =
    filter === "All"
      ? opportunities
      : opportunities.filter((opp) => opp.category === filter);

  return (
    <div className="container">
      {/* Progress Indicator */}
      <div className="progress-bar">
        <div className="progress">1. Personal Info</div>
        <div className="progress">2. Skill Gap</div>
        <div className="progress active">3. Opportunities</div>
      </div>

      <h2>🎯 Smart Recommendations for {user.name}</h2>

      {/* Filter Buttons */}
      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${filter === cat ? "active" : ""}`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Recommendation Cards */}
      <div className="grid">
        {filteredOpportunities.map((opp) => (
          <Card key={opp.id} className="recommend-card">
            <h3>{opp.title}</h3>
            <p className="platform">{opp.platform}</p>
            <p className="desc">{opp.description}</p>
            <div className="tag-list">
              {opp.skills.map((skill) => (
                <Tag key={skill} text={skill} />
              ))}
            </div>
            <div className="card-actions">
              <button className="btn primary">Apply 🚀</button>
              <button className="btn secondary">Save ❤️</button>
            </div>
          </Card>
        ))}
      </div>

      {/* Motivation Section */}
      <div className="quote center">
        <blockquote>
          🌟 "Opportunities don't happen, you create them." – Chris Grosser
        </blockquote>
      </div>

      {/* Navigation */}
      <div className="form-actions">
        <button className="btn secondary" onClick={() => setView("skillGap")}>
          ⬅ Back
        </button>
        <button className="btn primary" onClick={() => setView("roadmap")}>
          View Roadmap ➡
        </button>
      </div>
    </div>
  );
};

export default RecommendationsPage;
