import React, { PropTypes } from 'react';
import Profile from './components/Profile.js'; 
import Work from './components/Work.js'; 
import Education from './components/Education.js'; 
import Skills from './components/Skills.js'; 
import Projects from './components/Projects.js'; 
import {Grid, Row, Col } from 'react-bootstrap'

const App = props => {
    const profileData = props.jsonObj.basics; 
    const projectsData = props.jsonObj.projects; 
    const workData = props.jsonObj.work; 
    const educationData = props.jsonObj.education; 
    const skillsData = props.jsonObj.skills; 
    return (
      <Grid>
          <Profile profileData={profileData} /> 
          <Projects projectsData={projectsData} /> 
          <Work workData={workData} /> 
          <Skills skillsData={skillsData} /> 
          <Education educationData={educationData} /> 
          <hr/> 
          <Row> 
            <Col md={12} className="other-stuff" >
              The code for this resume, built with React, is on Github <a href="https://github.com/nadinesk/resume">here</a>.
            </Col>
          </Row>
        </Grid>
      
    );
};



export default App;