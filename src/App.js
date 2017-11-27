import React, { PropTypes } from 'react';
import Profile from './components/Profile.js'; 
import Work from './components/Work.js'; 
import Education from './components/Education.js'; 
import Skills from './components/Skills.js'; 
import Projects from './components/Projects.js'; 
import { Col, Grid, Row } from 'react-bootstrap'

const App = props => {
    const profileData = props.jsonObj.basics; 
    const projectsData = props.jsonObj.projects; 
    const workData = props.jsonObj.work; 
    const educationData = props.jsonObj.education; 
    const skillsData = props.jsonObj.skills; 
    return (
      <div className="container"> 
        <div className="row"> 
          <Profile profileData={profileData} /> 
          <Projects projectsData={projectsData} /> 
          <Work workData={workData} /> 
          <Skills skillsData={skillsData} /> 
          <Education educationData={educationData} /> 
          
        </div>
      </div> 
    );
};



export default App;