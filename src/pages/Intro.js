import React from 'react'
import Navbar from '../components/Navbar'
import './Intro.css'

const Intro = () => {
    return (
        <div id="top" className='' style={{ minHeight: "100vh" ,background:"#f9f9f9"}}>
            <div className='container-fluid p-5 mt-5'>
                <div className="row flex-row justify-content-center">
                    <div className="col-md-3 profile-pic">
                    </div>
                    <div className="col-md-7 text-center p-5 ">
                        <h1 className='h1 row justify-content-center'>Frontend Developer</h1>
                        <p className='text-secondary mt-4 text-center'> I am Praduman Sharma, a <b>Front-end Developer </b> based in India 🇮🇳, with over <b> 4 years </b>of expertise in turning ideas into reality through code. </p>

                        <div className='d-flex flex-row justify-content-center ' >
                         <i className="bi bi-github  m-3"></i>
                           <i className="bi bi-linkedin  m-3"></i>
                             <i className="bi bi-envelope-at-fill  m-3"></i>
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