import React, { useContext } from 'react';
import './skills.css';
import { DataContext } from "../../context/DataContext";



function Skills() {
    const { content, theme } = useContext(DataContext);

    return (

        <div className={`skills ${theme === 'dark' ? 'skills-dark' : ''}`}>
        <h1 id='skills' className={`skills-title ${theme === 'dark' ? 'skills-title-dark' : ''}`}>
            {content.skill}</h1>
            <div className="skills-container">
                {content.skillsData.map((skill, index) => (
                    <div key={index} className="skill">
                        <h2 className={`skill-title ${theme === 'dark' ? 'skill-title-dark' : ''}`}>{skill.title}</h2>
                        <p className={`skill-description ${theme === 'dark' ? 'skill-description-dark' : ''}`}>{skill.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Skills;
