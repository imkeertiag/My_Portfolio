import "./Skills.css";
import React, { useState } from "react";

export const Skills = () => {
  const [skills, setSkills] = useState([
    {
      domain: "Front End Development",
      skills: [
        { name: "HTML", proficiency: 90 },
        { name: "CSS", proficiency: 85 },
        { name: "JS", proficiency: 80 },
        { name: "PHP", proficiency: 75 },
        { name: "WordPress", proficiency: 85 },
      ],
    },
    {
      "domain": "DevOps",
      "skills": [
        { "name": "Docker", "proficiency": 85 },
        { "name": "Kubernetes", "proficiency": 80 },
        { "name": "CI/CD", "proficiency": 85 },
        { "name": "AWS", "proficiency": 90 },
        { "name": "Terraform", "proficiency": 75 }
      ]
    },
    {
      "domain": "Quality Assurance",
      "skills": [
        { "name": "Selenium", "proficiency": 85 },
        { "name": "TestNG", "proficiency": 75 },
        { "name": "Automation Testing", "proficiency": 80 }
      ]
    },
    {
      "domain": "Data Analyst",
      "skills": [
        { "name": "SQL", "proficiency": 85 },
        { "name": "Python", "proficiency": 80 },
        { "name": "Tableau", "proficiency": 85 },
        { "name": "Power BI", "proficiency": 80 }
      ]
    },
    {
      domain: "Languages",
      skills: [
        { name: "Hindi", proficiency: 90 },
        { name: "English", proficiency: 85 },
      ],
    },
    {
      domain: "Back End Development",
      skills: [
        { name: "NodeJS", proficiency: 90 },
        { name: "SSR", proficiency: 85 },
      ],
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [domain, setDomain] = useState("");
  const [newSkills, setNewSkills] = useState([
    { name: "", proficiency: 0 },
    { name: "", proficiency: 0 },
    { name: "", proficiency: 0 },
    { name: "", proficiency: 0 },
    { name: "", proficiency: 0 },
  ]);

  const addSkill = () => {
    if (domain && newSkills.length > 0) {
      setSkills([...skills, { domain, skills: newSkills }]);
      setShowModal(false);
      setDomain("");
      setNewSkills([
        { name: "", proficiency: 0 },
        { name: "", proficiency: 0 },
        { name: "", proficiency: 0 },
        { name: "", proficiency: 0 },
        { name: "", proficiency: 0 },
      ]);
    }
  };

  const handleSkillChange = (index, field, value) => {
    const updatedSkills = [...newSkills];
    updatedSkills[index][field] = value;
    setNewSkills(updatedSkills);
  };

  return (
    <>
      <div className="skills">
        <div className="skill-heading">
          <h1>Skills & Languages</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem in non vitae?</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </div>
        <div className="skill-grid">
          <div className="skills-container">
            {skills.map((skillSet, index) => (
              <div key={index} className="skill-set">
                <h3>{skillSet.domain}</h3>
                {skillSet.skills.map((skill, i) => (
                  <div key={i} className="skill">
                    <span>{skill.name}</span>
                    <span style={{ float: "right" }}>{skill.proficiency}%</span>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        style={{ width: `${skill.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <button className="add-skill-btn" onClick={() => setShowModal(true)}>
            ADD SKILL
          </button>

          {showModal && (
            <div className="modal">
              <div className="modal-content">
                <h2>Add Skill</h2>
                <label>
                  Domain
                  <br />
                  <input
                  className="domain-area"
                    type="text"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                  />
                </label>
                <div className="modal-skill-heading">
                  <h3>Skills</h3>
                  <h4>Skill<span className="modal-pro-heading">Proficiency (%)</span></h4>
                </div>
                

                
                <div className="skill-inputs-row">
                  {newSkills.map((skill, index) => (
                    <div key={index} className="skill-input-inline">
                      <label>
                        <input
                        className="skill-name"
                          type="text"
                          value={skill.name}
                          onChange={(e) =>
                            handleSkillChange(index, "name", e.target.value)
                          }
                        />
                      </label>
                      <label>
                        <input
                        className="skill-value"
                          type="number"
                          value={skill.proficiency == 0 ? '' : skill.proficiency}
                          onChange={(e) =>
                            handleSkillChange(index, "proficiency", e.target.value)
                          }
                          max="100"
                          min="0"
                        />
                      </label>
                    </div>
                  ))}
                </div>

                <div className="modal-buttons">
                  <button className="modal-button" onClick={addSkill}>Add Skill</button>
                  <button className="btn-cancel" onClick={() => setShowModal(false)}>Cancel</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
