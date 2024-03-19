import React from 'react';
import './Projects.css';

// Work experience data
const workExperiences = [
    {
        projectName: "Project Alpha",
        title: "Senior Frontend Developer",
        company: "ZScore Technology Private Limited, Bangalore",
        responsibilities: [
            "Driving data management & governance by combining Machine Learning, Contextual Intelligence, and NLP.",
            "Develop interactive features and user controls for efficient data handling.",
            "Create dashboards to monitor and enhance data quality in real-time.",
            "Work closely with cross-functional teams, including data engineers, data scientists, and product managers."
        ],
        technologies: "Javascript, Reactjs, Websockets, Redux, gitlab, Nginx, mongoDB"
    },
    {
        projectName: "Project Beta",
        title: "Fullstack Developer",
        company: "Coders Brain Technology Private Limited, Bangalore",
        responsibilities: [
            "Reviewed code, debugged problems, and corrected issues.",
            "Consulted with engineering team members to determine system loads and develop improvement plans.",
            "Developed unit test cases for testing and automation.",
            "Worked with back-end developers to design APIs."
        ],
        technologies: "Javascript, Typescript, ReactJs, React Native, Redux, gitlab, REST, Expressjs, Mongodb"
    },
    {
        projectName: "Project Gamma",
        title: "Frontend Developer",
        company: "Coders Brain Technology Private Limited, Bangalore",
        responsibilities: [
            "Design and develop intuitive, user-friendly interfaces that enhance accessibility for parents seeking ECCE options.",
            "Implement features for verifying and showcasing the credibility of preschools/daycares, such as reviews and accreditation information.",
            "Create flexible scheduling and enrollment options, enabling parents to find and manage ECCE services that suit their needs.",
            "Ensure seamless mobile responsiveness to accommodate parents accessing Proeves on various devices."
        ],
        technologies: "Javascript, Typescript, ReactNative, Redux, xcode, Android studio, REST, jest, firebase, gitlab"
    },
    {
        projectName: "Project Delta",
        title: "Frontend Developer",
        company: "Coders Brain Technology Private Limited, Bangalore",
        responsibilities: [
            "Feature development, API integrations, R&D, Bug Fixing.",
            "Manage build optimization and code optimization."
        ],
        technologies: "Javascript, Typescript, ReactJs, Redux, ElectronJs, REST"
    },
    {
        projectName: "Project Epsilon",
        title: "Associate Software Engineer",
        company: "Coders Brain Technology Private Limited, Bangalore",
        responsibilities: [
            "Feature development, API integration, Bug fixes."
        ],
        technologies: "Javascript, ReactNative, Redux, github"
    }
];

const WorkExperienceCard = ({ projectName, title, company, responsibilities, technologies }) => (
    <div className="col-md-6">
        <div className="card mb-4 shadow fadeIn">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                {projectName && <p className="project-name">{projectName}</p>}
                <p className="card-text">{company}</p>
                <ul className="list-group">
                    {responsibilities.map((responsibility, index) => (
                        <li key={index} className="list-group-item">{responsibility}</li>
                    ))}
                </ul>
                <p className="card-text"><small className="text-muted">Technologies: {technologies}</small></p>
                {/* <a href="#" className="btn">Learn More</a> */}
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
