import React from 'react';
import './Projects.css';

// Work experience data
const workExperiences = [
    {
        title: "Software Engineer II",
        company: "ZScore Technology Private Limited, Bangalore",
        startDate: "May2023",
        endDate: "Present",
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
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-secondary">{company}</p>
                <p className="card-text text-success">Duration: {startDate} - {endDate}</p>
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
        <div id="projects" className='container-fluid' style={{ minHeight: '100vh' }}>
        <h1 className='row justify-content-center p-5 text-decoration-underline'>Work</h1>
       
            <div className="row">
                {workExperiences.map((experience, index) => (
                    <WorkExperienceCard key={index} {...experience} />
                ))}
            </div>
        </div>
    );
};

export default WorkPage;
