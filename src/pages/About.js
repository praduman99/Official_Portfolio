import React from 'react'
import Image from '../assets/images/Aboutme.jpg'
const About = () => {
    return (
            <div id="about" className='container-fluid' style={{ minHeight: "100vh",marginTop:"5rem"}}>
            <h1 className='row justify-content-center text-decoration-underline'>About</h1>
                <div className='row flex-row justify-content-center p-5 '>

                    <div className='col-md-4 '>
                        <img src={Image} class="img-fluid" />
                    </div>
                    <div className='col-md-5'>
                        <div className='container'>
                            <div className='row'>
                                <h3 style={{fontWeight:'bold'}}>
                                    A dedicated Front-end Developer
                                    based in India. </h3>
                            </div>
                            <div className='row'>
                                <p className='text-secondary'>
                                Experienced senior frontend developer with<b> 4 years </b> of expertise in <b>React Native and React JS </b>. Proven track record of crafting high-quality, responsive web and mobile applications. Adept at collaborating with cross-functional teams to deliver robust, user-friendly solutions. Passionate about staying updated with emerging technologies and optimizing user experiences.
                                </p>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
    )
}

export default About