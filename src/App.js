import React, { PropTypes } from 'react';
import Profile from './components/Profile.js'; 
import { Col, Grid, Row } from 'react-bootstrap'

const App = props => {
    const profileData = props.jsonObj.basics; 
    return (
      <div className="container"> 
        <div className="row"> 
          <Profile profileData={profileData} /> 
        </div>
      </div> 
    );
};



export default App;