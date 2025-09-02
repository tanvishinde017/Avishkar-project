import React from "react";
import Card from "../components/Card";
import "../style.css";

const SkillGapAnalysisPage = ({ user, industrySkills, setView }) => {
  // Calculate missing skills
  const missingSkills = industrySkills.filter(
    (skill) => !user.skills.includes(skill)
  );

  // Calculate readiness score
  const readinessScore =
    industrySkills.length > 0
      ? Math.round((user.skills.length / industrySkills.length) * 100)
      : 0;

  return (
    <div className="center">
      <Card>
        <h2>📊 Skill Gap Analysis</h2>
        <p>
          Hello <strong>{user.name}</strong>, here’s your analysis compared to
          industry expectations:
        </p>

        {/* User Skills */}
        <h3>✅ Your Skills</h3>
        <ul className="skill-list">
          {user.skills.length > 0 ? (
            user.skills.map((skill) => <li key={skill}>{skill}</li>)
          ) : (
            <li>No skills selected yet.</li>
          )}
        </ul>

        {/* Missing Skills */}
        <h3>⚠️ Missing Skills</h3>
        <ul className="skill-list missing">
          {missingSkills.length > 0 ? (
            missingSkills.map((skill) => <li key={skill}>{skill}</li>)
          ) : (
            <li>You are up-to-date with industry requirements 🎉</li>
          )}
        </ul>

        {/* Progress Bar */}
        <h3>📈 Overall Readiness</h3>
        <div className="progress-container">
          <div
            className="progress-fill"
            style={{ width: `${readinessScore}%` }}
          ></div>
        </div>
        <p>
          {user.skills.length} / {industrySkills.length} essential skills covered
        </p>

        {/* Readiness Score */}
        <h3>✅ Readiness Score</h3>
        <p className="score">{readinessScore}% Match</p>

        {/* Top Recommended Skills */}
        <h3>🔥 Top Skills to Learn</h3>
        <ul className="skill-list top-skills">
          {missingSkills.length > 0 ? (
            missingSkills.slice(0, 3).map((skill) => (
              <li key={skill}>
                {skill} <span className="suggestion">(Recommended)</span>
              </li>
            ))
          ) : (
            <li>You're already covering all key skills! 🔥</li>
          )}
        </ul>

        {/* Navigation Buttons */}
        <div className="form-actions">
          <button className="btn secondary" onClick={() => setView("personalInfo")}>
            ⬅ Back
          </button>
          <button className="btn primary" onClick={() => setView("dashboard")}>
            Next ➡ Recommendations
          </button>
        </div>
      </Card>
    </div>
  );
};

export default SkillGapAnalysisPage;
