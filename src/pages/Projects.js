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
    {
        title: "Software Engineer I",
        company: "Coders Brain Technology Private Limited, Bengaluru",
        startDate: "April 2022",
        endDate: "May 2023",
        responsibilities: [
            "Driving data management & governance by combining Machine Learning, Contextual Intelligence, and NLP.",
            "Develop interactive features and user controls for efficient data handling.",
            "Create dashboards to monitor and enhance data quality in real-time.",
            "Work closely with cross-functional teams, including data engineers, data scientists, and product managers."
        ], 
    },
    {
        title: "Software Engineer",
        company: "Coders Brain Technology Private Limited, Bengaluru",
        startDate: "April 2021",
        endDate: "March 2022",
        responsibilities: [
            "Driving data management & governance by combining Machine Learning, Contextual Intelligence, and NLP.",
            "Develop interactive features and user controls for efficient data handling.",
            "Create dashboards to monitor and enhance data quality in real-time.",
            "Work closely with cross-functional teams, including data engineers, data scientists, and product managers."
        ], 
    },
    {
        title: "Associate Software Engineer",
        company: "Coders Brain Technology Private Limited, Bengaluru",
        startDate: "oct 2020",
        endDate: "March 2021",  
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
                <div className="d-flex justify-content-between">
                <h4 className="card-title">{title}</h4>
                <p className="card-text text-success">{startDate} - {endDate}</p>
                </div>
                <p className="card-text text-secondary">{company}</p>
                <ul >
                    {responsibilities.map((responsibility, index) => (
                        <li key={index} className="text-secondary" >{responsibility}</li>
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
