import React from 'react'
import Navbar from '../components/Navbar'
import js from '../assets/images/js.png'
import ts from '../assets/images/ts.png'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import redux from '../assets/images/redux.png'
import SkillsImage from '../components/SkillsImage'
import react from '../assets/images/reactnative.png'
import vs from '../assets/images/vs.png'
import androidstudio from '../assets/images/androidstudio.png'
import git from '../assets/images/git.png'
import github from '../assets/images/github.png'
import gitlab from '../assets/images/gitlab.png'

const Skills = () => {
  return (
      <div id="skills" className='container-fluid' style={{ minHeight: '100vh' }}>
      <h1 className='row justify-content-center p-5 text-decoration-underline'>Skills</h1>
        <div
          className="row g-4"
        >
          <div className="col-md-3 ">
            <h4 style={{fontWeight:'bold'}}> Programing Languages</h4>
            <div className='card d-flex flex-column '>
              <SkillsImage image={js} title={"JavaScript"} />
              <SkillsImage image={ts} title={"TypeScript"} />
            </div>
            <h4 style={{fontWeight:'bold'}}className='mt-4'> IDE & Version Controler</h4>
            <div className='card d-flex flex-column '>
              <SkillsImage image={vs} title={"Visual Studio Code"} />
              <SkillsImage image={androidstudio} title={"Android Studio"} />
              <SkillsImage image={git} title={"Git"} />
              <SkillsImage image={github} title={"GitHub"} />
              <SkillsImage image={gitlab} title={"GitLab"} />
            </div>
          </div>



          <div className="col-md-2 ">
          <h4 style={{fontWeight:'bold'}}> Frontend</h4>
            <div className='card d-flex flex-column'>
              <SkillsImage image={html} title={"Html"} />
              <SkillsImage image={css} title={"Css"} />
              <SkillsImage image={react} title={"Reactjs"} />
              <SkillsImage image={react} title={"React Native"} />
              <SkillsImage image={redux} title={"Redux"} />
              <SkillsImage image={redux} title={"Nextjs"} />
              <SkillsImage image={redux} title={"REST"} />
              <SkillsImage image={redux} title={"Websockets"} />
              <SkillsImage image={redux} title={"OAuth"} />
              <SkillsImage image={redux} title={"JWT"} />
              <SkillsImage image={redux} title={"Push Notification"} />
            </div>
          </div>
          <div className="col-md-2">
          <h4 style={{fontWeight:'bold'}}> Backend</h4>
            <div className='card d-flex flex-column'>
              <SkillsImage image={html} title={"Nodejs"} />
              <SkillsImage image={css} title={"Expressjs"} />
              <SkillsImage image={react} title={"Firebase"} />
              <SkillsImage image={react} title={"React Native"} />
            </div>
            <h4 style={{fontWeight:'bold'}} className='mt-4'> Database</h4>
            <div className=' d-flex flex-column '>
              <SkillsImage image={html} title={"Mongodb"} />
            </div>
          </div>
          <div className="col-md-2 ">
           <h4 style={{fontWeight:'bold'}}> More Styling</h4>
            <div className='card d-flex flex-column'>
              <SkillsImage image={html} title={"Styled Components"} />
              <SkillsImage image={html} title={"Scss"} />
              <SkillsImage image={html} title={"Material ui"} />
              <SkillsImage image={html} title={"Ant design"} />

            </div>
          </div>
          <div className="col-md-3 ">
          <h4 style={{fontWeight:'bold'}}> Build</h4>
            <div className='card d-flex flex-column'>
              <SkillsImage image={html} title={"Webpack"} />
              <SkillsImage image={html} title={"Babel"} />
              <SkillsImage image={html} title={"Xcode"} />
              <SkillsImage image={html} title={"Android studio"} />
            </div>
            <h4 style={{fontWeight:'bold'}}className='mt-4'>Deployment</h4>
            <div className='card d-flex flex-column'>
              <SkillsImage image={html} title={"Microsoft Azure"} />
              <SkillsImage image={html} title={"Github pages"} />
              <SkillsImage image={html} title={"Netlify"} />
              <SkillsImage  title={"Firebase"} />

            </div>
          </div>

        </div>
      </div>

  )
}

export default Skills