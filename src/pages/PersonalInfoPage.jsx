import React, { useState } from "react";
import Card from "../components/Card";
import "../style.css";

const PersonalInfoPage = ({ formData, setFormData, setUser, setView, allSkills, allInterests }) => {
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleMultiSelect = (type, value) => {
    setFormData(prev => ({
      ...prev,
      [type]: prev[type].includes(value)
        ? prev[type].filter(item => item !== value)
        : [...prev[type], value]
    }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.sgpa && formData.academicYear) {
      setUser(formData);
      setView("skillGap");
    } else {
      setError("⚠️ Please fill in all required fields.");
    }
  };

  const handleReset = () => {
    setFormData({ name: "", sgpa: "", academicYear: "", skills: [], interests: [] });
    setError("");
  };

  return (
    <div className="center">
      <Card>
        <h2>Enter Your Information</h2>

        <input id="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
        <select id="academicYear" value={formData.academicYear} onChange={handleInputChange}>
          <option value="">Select Academic Year</option>
          <option value="FY">First Year</option>
          <option value="SY">Second Year</option>
          <option value="TY">Third Year</option>
        </select>
        <input id="sgpa" type="number" step="0.01" placeholder="SGPA/CGPA" value={formData.sgpa} onChange={handleInputChange} />
        <input id="email" placeholder="Email (optional)" value={formData.email || ""} onChange={handleInputChange} />
        <input id="phone" placeholder="Phone (optional)" value={formData.phone || ""} onChange={handleInputChange} />

        <h3>Skills (select all)</h3>
        <div className="select-grid">
          {allSkills.map(skill => (
            <button
              key={skill}
              className={formData.skills.includes(skill) ? "toggle-btn active" : "toggle-btn"}
              type="button"
              onClick={() => handleMultiSelect("skills", skill)}
            >{skill}</button>
          ))}
        </div>

        <h3>Interests (select all)</h3>
        <div className="select-grid">
          {allInterests.map(interest => (
            <button
              key={interest}
              className={formData.interests.includes(interest) ? "toggle-btn active" : "toggle-btn"}
              type="button"
              onClick={() => handleMultiSelect("interests", interest)}
            >{interest}</button>
          ))}
        </div>

        {error && <p className="error">{error}</p>}

        <div className="form-actions">
          <button className="btn primary" onClick={handleSubmit}>Submit & Analyze</button>
          <button className="btn secondary" onClick={handleReset}>Reset</button>
        </div>

        <div className="preview">
          <h4>📋 Live Preview</h4>
          <p><strong>Name:</strong> {formData.name || "Not provided"}</p>
          <p><strong>Year:</strong> {formData.academicYear || "Not selected"}</p>
          <p><strong>SGPA:</strong> {formData.sgpa || "Not entered"}</p>
          <p><strong>Skills:</strong> {formData.skills.join(", ") || "None"}</p>
          <p><strong>Interests:</strong> {formData.interests.join(", ") || "None"}</p>
        </div>
      </Card>
    </div>
  );
};

export default PersonalInfoPage;
