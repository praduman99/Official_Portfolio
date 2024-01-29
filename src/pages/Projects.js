import React from 'react'
import workCard from '../components/WorkCard'
const Projects = () => {
  return (

    <div id='projects' className='container-fluid' style={{ minHeight: '100vh', background: "#f9f9f9" }}>
      <h1 className='row justify-content-center p-5 text-decoration-underline'>Work</h1>

      <div
        class="container"
      >
        <WorkCard/>
      </div>

    </div>
  )
}

export default Projects