import React from 'react'
import js from '../assets/images/js.png'
import ts from '../assets/images/ts.png'
import java from '../assets/images/java.png'
import html from '../assets/images/html.png'
import css from '../assets/images/css.png'
import redux from '../assets/images/redux.png'
import rest from '../assets/images/rest.png'
import websocket from '../assets/images/websocket.png'
import oauth from '../assets/images/oauth.png'
import jwt from '../assets/images/jwt.png'
import nodejs from '../assets/images/nodejs.png'
import express from '../assets/images/express.png'
import SkillsImage from '../components/SkillsImage'
import react from '../assets/images/reactnative.png'
import vs from '../assets/images/vs.png'
import androidstudio from '../assets/images/androidstudio.png'
import git from '../assets/images/git.png'
import github from '../assets/images/github.png'
import gitlab from '../assets/images/gitlab.png'
import next from '../assets/images/nextjs.webp'
import ssl from '../assets/images/ssl.jpeg'
import nginx from '../assets/images/nginx.png'
import sonar from '../assets/images/sonar.png'
import jest from '../assets/images/jest.png'
import azure from '../assets/images/azure.png'
import aws from '../assets/images/aws.png'
import docker from '../assets/images/docker.png'
import cicd from '../assets/images/cicd.png'
import mongo from '../assets/images/mongodb.png'
import mui from '../assets/images/mui.png'
import styled from '../assets/images/styled.jpeg'
import scss from '../assets/images/scss.jpeg'
import app from '../assets/images/app.png'
import play from '../assets/images/play.png'
import webpack from '../assets/images/webpack.png'
import xcode from '../assets/images/xcode.jpeg'
import babel from '../assets/images/babel.png'
const Skills = () => {
  return (
      <div id="skills" className='container-fluid' style={{ minHeight: '100vh' ,background:"#f9f9f9"}}>
      <h1 className='row justify-content-center p-5 text-decoration-underline'>Skills</h1>
        <div
          className="row g-4"
        >
          <div className="col-md-3 ">
            <h4 style={{fontWeight:'bold'}}> Programing Languages</h4>
            <div className='card d-flex flex-column shadow '>
              <SkillsImage image={js} title={"JavaScript"} />
              <SkillsImage image={ts} title={"TypeScript"} />
              <SkillsImage image={java} title={"Java"} />
            </div>
            <h4 style={{fontWeight:'bold'}}className='mt-4'> IDE & Version Controler</h4>
            <div className='card d-flex flex-column shadow '>
              <SkillsImage image={vs} title={"Visual Studio Code"} />
              <SkillsImage image={androidstudio} title={"Android Studio"} />
              <SkillsImage image={git} title={"Git"} />
              <SkillsImage image={github} title={"GitHub"} />
              <SkillsImage image={gitlab} title={"GitLab"} />
            </div>
          </div>
          <div className="col-md-2 ">
          <h4 style={{fontWeight:'bold'}}> Frontend</h4>
            <div className='card d-flex flex-column shadow'>
              <SkillsImage image={html} title={"Html"} />
              <SkillsImage image={react} title={"Reactjs"} />
              <SkillsImage image={react} title={"React Native"} />
              <SkillsImage image={redux} title={"Redux"} />
              <SkillsImage image={next} title={"Nextjs"} />
              <SkillsImage image={rest} title={"REST"} />
              <SkillsImage image={websocket} title={"Websockets"} />
              <SkillsImage image={oauth} title={"OAuth"} />
              <SkillsImage image={jwt} title={"JWT"} />
            </div>
          </div>
          <div className="col-md-2">
          <h4 style={{fontWeight:'bold'}}> Backend</h4>
            <div className='card d-flex flex-column shadow'>
              <SkillsImage image={nodejs} title={"Nodejs"} />
              <SkillsImage image={express} title={"Expressjs"} />
              <SkillsImage image={nginx} title={"Nginx"} />
              <SkillsImage image={ssl} title={"SSl"}/>
            </div>
            <h4 style={{fontWeight:'bold'}} className='mt-4'> Build</h4>
            <div className='card d-flex flex-column shadow'>
              <SkillsImage image={webpack} title={"Webpack"} />
              <SkillsImage image={babel} title={"Babel"} />
              <SkillsImage image={xcode} title={"Xcode"} />
              <SkillsImage image={androidstudio} title={"Android studio"} />
            </div>
           
          </div>
          
          <div className="col-md-2 ">
          <h4 style={{fontWeight:'bold'}} > Testing</h4>
            <div className='card d-flex flex-column shadow'>
              <SkillsImage image={jest} title={"Jest"} />
              <SkillsImage image={sonar} title={"SonarQube"} />
             

            </div>
            <h4 style={{fontWeight:'bold'}}className='mt-4'>Deployment</h4>
            <div className='card d-flex flex-column shadow'>
              <SkillsImage image={azure} title={"Microsoft Azure"} />
              <SkillsImage image={docker} title={"Docker"} />
              <SkillsImage image={aws} title={"AWS"} />
              <SkillsImage image={cicd} title={"CI/CD Pipeline"} />
              <SkillsImage image={play} title={"Play store"} />
              <SkillsImage image={app} title={"App Store"} />
            </div>
          </div>
          <div className="col-md-2 ">
           <h4 style={{fontWeight:'bold'}}>Styling</h4>
            <div className='card d-flex flex-column shadow'>
            <SkillsImage image={css} title={"Css"} />
              <SkillsImage image={styled} title={"Styled Components"} />
              <SkillsImage image={scss} title={"Scss"} />
              <SkillsImage image={mui} title={"Material UI"} />

            </div>
            <h4 style={{fontWeight:'bold'}} className='mt-4'> Database</h4>
            <div className='card  d-flex flex-column shadow'>
              <SkillsImage image={mongo} title={"Mongodb"} />
            </div>
          </div>
        </div>
      </div>

  )
}

export default Skills