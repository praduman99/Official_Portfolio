import React from 'react'
import Navbar from '../components/Navbar'
import Image from '../assets/images/Aboutme.jpg'
const About = () => {
    return (
        <div>
            <div className='container-fluid'>
                <div className='row flex-row justify-content-center p-5 '>

                    <div className='col-md-4 '>
                        <img src={Image} class="img-fluid"  />
                    </div>
                    <div className='col-md-5 border'>
                        <div className='container'>
                            <div className='row'>
                                <h4>About Me</h4>
                            </div>
                            <div className='row'>
                                <h3>
                                    A dedicated Front-end Developer
                                    based in Belgrade, Serbia </h3>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default About