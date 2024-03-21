import React from 'react'
import university from '../assets/university/University.jpeg'
const Education = () => {
  return (
    <div id="education" className='container-fluid' style={{ minHeight: "100vh" ,background:"#f9f9f9"}}>
    <h1 className='row justify-content-center p-5 text-decoration-underline'>Education</h1>
  
    <div className="row">
      <div className="col-md-6 border">
        <img
          src={university}
          alt="College"
          className="img-fluid"
        />
      </div>
      <div className="col-md-6">
        <div className="card shadow border-0">
          <div className="card-body">
            <h5 className="card-title">Bachelor of Engineering in Computer Science </h5>
            <p className="card-text text-secondary">Chitkara University, Chandigarh</p>
            <p className="card-text text-success">Aug2017 - Aug2021</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Education