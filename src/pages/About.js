import React from 'react'
import Image from '../assets/images/Aboutme.jpg'
const About = () => {
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
        <div id="about" className='container-fluid' style={{ minHeight: '100vh' }}>
            <h1 className='row justify-content-center p-5 text-decoration-underline'>About</h1>
            <div className='row flex-row justify-content-center p-5 '>

                <div className='col-md-4 '>
                    <img src={Image} class="img-fluid" alt='image' />
                </div>
                <div className='col-md-5'>
                    <div className='container'>
                        <div className='row'>
                            <h3 style={{ fontWeight: 'bold' }}>
                                A dedicated Software Engineer
                                based in India. </h3>
                        </div>
                        <div className='row'>
                            <p className='text-secondary'>
                                Experienced senior frontend developer with<b> {experience.years} years {experience.months} months </b> of expertise in <b>React Native and React JS </b>. Proven track record of crafting high-quality, responsive web and mobile applications. Adept at collaborating with cross-functional teams to deliver robust, user-friendly solutions. Passionate about staying updated with emerging technologies and optimizing user experiences.
                            </p>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About