import React from 'react'
import Navbar from '../components/Navbar'
import './Intro.css'

const Intro = () => {
    return (
        <div className='' style={{ minHeight: "100vh" ,background:"#f9f9f9"}}>
            <Navbar />
            <div className='container-fluid p-5 mt-5'>
                <div className="row flex-row justify-content-center">
                    <div className="col-md-3 profile-pic">
                    </div>
                    <div className="col-md-7 p-5 ">
                        <h1 className='text-lg'>Fullstack Developer</h1>
                        <p className='text-secondary mt-4 text-center'> I am Praduman Sharma, a <b>Full Stack Developer </b> based in India 🇮🇳, with over <b> 4 years </b>of expertise in turning ideas into reality through code. </p>

                        <div className='d-flex flex-row justify-content-center ' >
                         <i className="bi bi-github text-secondary m-3"></i>
                           <i className="bi bi-linkedin text-secondary m-3"></i>
                             <i className="bi bi-envelope-at-fill text-secondary m-3"></i>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Intro