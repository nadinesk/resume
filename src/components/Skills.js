import React from 'react';
import { Row, Col } from 'react-bootstrap'

const Skills = props => {
    
    const skills_map = props.skillsData.map((skill) => (                   
            <span>{skill} * </span>
        ))  

  		return (
          <Row>
            <Col md={12}>
              <h3>Skills</h3> 
              <div className="reg-text">{skills_map} </div>  				  
            </Col>
  				</Row>
        )
  	};
  	
export default Skills;