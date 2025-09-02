import React, { useState } from "react";
import Card from "../components/Card";
import Tag from "../components/Tag";
import "../style.css";

const RecommendationsPage = ({ opportunities, user, setView }) => {
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("Relevance");

  const categories = ["All", "Internship", "Hackathon", "Course", "Placement"];

  const calculateMatch = (oppSkills) => {
    const matchCount = oppSkills.filter(skill => user.skills.includes(skill)).length;
    return Math.round((matchCount / oppSkills.length) * 100);
  };

  // Filter and sort logic
  let filteredOpportunities = filter === "All"
    ? opportunities
    : opportunities.filter((opp) => opp.category === filter);

  if (sortBy === "Relevance") {
    filteredOpportunities.sort((a, b) =>
      calculateMatch(b.skills) - calculateMatch(a.skills)
    );
  } else if (sortBy === "Newest") {
    filteredOpportunities.sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  return (
    <div className="container">

      {/* Progress Indicator */}
      <div className="progress-bar">
        <div className="progress">1. Personal Info</div>
        <div className="progress">2. Skill Gap</div>
        <div className="progress active">3. Opportunities</div>
      </div>

      <h2>🎯 Smart Recommendations for {user.name}</h2>

      {/* Filter + Sort */}
      <div className="controls-bar">
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

        <select
          className="sort-dropdown"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="Relevance">Sort by Relevance</option>
          <option value="Newest">Sort by Newest</option>
        </select>
      </div>

      {/* Recommendation Cards */}
      {filteredOpportunities.length > 0 ? (
        <div className="grid">
          {filteredOpportunities.map((opp) => {
            const match = calculateMatch(opp.skills);

            return (
              <Card key={opp.id} className="recommend-card">
                <h3>{opp.title}</h3>
                <p className="platform">{opp.platform}</p>
                <p className="desc">{opp.description}</p>

                <div className="match-bar">
                  <div className="match-fill" style={{ width: `${match}%` }}></div>
                </div>
                <p className="match-text">Skill Match: {match}%</p>

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
            );
          })}
        </div>
      ) : (
        <p className="empty-state">😔 No opportunities found for this category.</p>
      )}

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
