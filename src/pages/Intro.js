import React from 'react'
import './Intro.css'

const Intro = () => {
    function calculateExperience(startDate) {
        const start = new Date(startDate);
        const today = new Date();
    
        // Calculate the difference in milliseconds
        let difference = today - start;
    
        // Convert milliseconds to years, months, and days
        const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
        difference -= years * (1000 * 60 * 60 * 24 * 365);
        const months = Math.floor(difference / (1000 * 60 * 60 * 24 * 30.4375));
        difference -= months * (1000 * 60 * 60 * 24 * 30.4375);
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    
        return { years, months, days };
    }
    
    const experience = calculateExperience("2020-10-20")
   
    return (
        <div id="top" className='' style={{ minHeight: "100vh" ,background:"#f9f9f9"}}>
            <div className='container-fluid p-5 mt-5'>
                <div className="row flex-row justify-content-center">
                    <div className="col-md-3 profile-pic">
                    </div>
                    <div className="col-md-7 text-center p-5 ">
                        <h1 className='h1 row justify-content-center'>Software Engineer II</h1>
                        <p className='text-secondary mt-4 text-center'> I am Praduman Sharma, a <b>Software Engineer </b> based in India 🇮🇳, with over <b> {experience.years} years {experience.months} months </b>of expertise in turning ideas into reality through code. </p>

                        <div className='d-flex flex-row justify-content-center ' >
                         <i className="bi bi-github  m-3" onClick={()=>{
                            window.open("https://github.com/praduman99", '_blank');
                         }}></i>
                           <i className="bi bi-linkedin  m-3" onClick={()=>{
                             window.open("https://www.linkedin.com/in/pradumansharma99/", '_blank');
                           }}></i>
                             <i className="bi bi-envelope-at-fill  m-3" onClick={()=>{
                                window.open("mailto:pradumanvats.000@gmail.com",'_blank')
                             }}></i>
                        </div>
                        <div className='d-flex flex-row justify-content-center ' >
                            <button className='btn btn-dark'>&nbsp;My  Resume</button>
                            </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Intro