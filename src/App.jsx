import React, { useState } from "react";
import HomePage from "./pages/HomePage";
import PersonalInfoPage from "./pages/PersonalInfoPage";
import SkillGapAnalysisPage from "./pages/SkillGapAnalysisPage";
import RecommendationsPage from "./pages/RecommendationsDashboard";
import RoadmapPage from "./pages/RoadmapPage";
import "./style.css";

function App() {
  const [view, setView] = useState("home");
  const [theme, setTheme] = useState("light");
  const [user, setUser] = useState({
    name: "",
    academicYear: "",
    sgpa: "",
    skills: [],
    interests: []
  });

  const allSkills = ["JavaScript", "Python", "React", "NodeJS", "CSS"];
  const allInterests = ["Web Development", "AI", "Mobile Apps", "Data Science"];
  const industrySkills = ["JavaScript", "React", "NodeJS", "Python", "SQL"];
  const opportunities = [
    { id: 1, title:"React Internship", platform:"Internshala", description:"Learn React with real projects", skills:["React"], category:"Internship" },
    { id: 2, title:"AI Hackathon", platform:"MLH", description:"Participate in AI Hackathon", skills:["Python","AI"], category:"Hackathon" },
    { id: 3, title:"Fullstack Course", platform:"Coursera", description:"Learn fullstack development", skills:["NodeJS","React"], category:"Course" },
  ];
  const careerRoadmap = [
    { milestone:"Learn Basics", progress:100 },
    { milestone:"Build Projects", progress:60 },
    { milestone:"Apply for Internship", progress:0 },
    { milestone:"Get Placement", progress:0 },
  ];

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <div className={`app ${theme}`}>
      <div className="theme-toggle">
        <button onClick={toggleTheme}>
          {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </button>
      </div>

      {view === "home" && <HomePage theme={theme} setView={setView} />}
      {view === "personalInfo" && (
        <PersonalInfoPage
          theme={theme}
          formData={user}
          setFormData={setUser}
          setUser={setUser}
          setView={setView}
          allSkills={allSkills}
          allInterests={allInterests}
        />
      )}
      {view === "skillGap" && (
        <SkillGapAnalysisPage
          theme={theme}
          user={user}
          industrySkills={industrySkills}
          setView={setView}
        />
      )}
      {view === "dashboard" && (
        <RecommendationsPage
          theme={theme}
          opportunities={opportunities}
          user={user}
          setView={setView}
        />
      )}
      {view === "roadmap" && (
        <RoadmapPage theme={theme} careerRoadmap={careerRoadmap} setView={setView} />
      )}
    </div>
  );
}

export default App;