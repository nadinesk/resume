import React, { PropTypes } from 'react';
import Profile from './components/Profile.js'; 
import Work from './components/Work.js'; 
import Education from './components/Education.js'; 
import Skills from './components/Skills.js'; 
import { Col, Grid, Row } from 'react-bootstrap'

const App = props => {
    const profileData = props.jsonObj.basics; 
    const workData = props.jsonObj.work; 
    const educationData = props.jsonObj.education; 
    const skillsData = props.jsonObj.skills; 
    return (
      <div className="container"> 
        <div className="row"> 
          <Profile profileData={profileData} /> 
          <Work workData={workData} /> 
          <Education educationData={educationData} /> 
          <Skills skillsData={skillsData} /> 
        </div>
      </div> 
    );
};



export default App;