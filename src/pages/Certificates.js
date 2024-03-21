import React from 'react';
import './Certificates.css'; // Assuming you have a CSS file for styling
import ReactjsCertificate from '../assets/certificates/REACTJS.png';
import AwsCertificate from '../assets/certificates/AWS.png';

const Certificates = () => {
    const certificates = [
        {
            title: "AWS Fundamentals : Going Cloud-Native",
            description: "Amazon Web Services",
            file: AwsCertificate
        },
        {
            title: "Frontend Development with ReactJs",
            description: "The Hong Kong University of Science and Technology",
            file: ReactjsCertificate
        },
        // Add more certificate objects here
    ];

    return (
        <div id="certificates" className='container-fluid' style={{ minHeight: "100vh", marginTop: "5rem" }}>
            <h1 className='row justify-content-center p-5 text-decoration-underline'>Certificates</h1>
            <div className="row">
                {certificates.map((certificate, index) => (
                    <div key={index} className="col-md-4 mb-4">
                        <div className="card shadow">
                            <img src={certificate.file} className="card-img-top" width="100%" height="300px" />
                            <div className="card-body">
                                <h5 className="card-title">{certificate.title}</h5>
                                <p className="card-text text-success">{certificate.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;
