import React from 'react';
import './Certificates.css'; // Assuming you have a CSS file for styling
import ReactjsCertificate from '../assets/certificates/reactjs.pdf';
import AwsCertificate from '../assets/certificates/aws.pdf';

const Certificates = () => {
    const certificates = [
        {
            title: "Certificate 1",
            description: "Description of Certificate 1",
            file: AwsCertificate
        },
        {
            title: "Certificate 2",
            description: "Description of Certificate 2",
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
                        <div className="card">
                            <embed src={certificate.file} className="card-img-top" width="100%" height="400px" />
                            <div className="card-body">
                                <h5 className="card-title">{certificate.title}</h5>
                                <p className="card-text">{certificate.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificates;
