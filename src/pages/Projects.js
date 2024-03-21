import React from 'react';
import './Projects.css';

// Work experience data
const workExperiences = [
    {
        title: "Senior Frontend Developer",
        company: "ZScore Technology Private Limited, Bangalore",
        startDate: "2019-06",
        endDate: "2022-01",
        responsibilities: [
            "Driving data management & governance by combining Machine Learning, Contextual Intelligence, and NLP.",
            "Develop interactive features and user controls for efficient data handling.",
            "Create dashboards to monitor and enhance data quality in real-time.",
            "Work closely with cross-functional teams, including data engineers, data scientists, and product managers."
        ], 
    },
    
];

const WorkExperienceCard = ({ title, company, startDate, endDate, responsibilities, technologies }) => (
    <div className="col-md-6">
        <div className="card mb-4 shadow fadeIn">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{company}</p>
                <p className="card-text">Duration: {startDate} - {endDate}</p>
                <ul >
                    {responsibilities.map((responsibility, index) => (
                        <li key={index} className="list-group-item">{responsibility}</li>
                    ))}
                </ul>
                
            </div>
        </div>
    </div>
);

const WorkPage = () => {
    return (
        <div className="container" id="projects">
            <h1 className="page-title">Work Experience</h1>

            <div className="row">
                {workExperiences.map((experience, index) => (
                    <WorkExperienceCard key={index} {...experience} />
                ))}
            </div>
        </div>
    );
};

export default WorkPage;
