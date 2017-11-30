import React from 'react';
import { Row, Col } from 'react-bootstrap'

const Education = props => {
    const getEducation = props.educationData.map(function(item, index) {
  		
  		return (
          <Row>
            <Col md={12} className="education-section reg-text">
              <div class="edu-institution">{item.institution}, {item.endDate}</div>
              <div>{item.studyType} </div>  				    				
              <div>{item.honors} </div>                      
            </Col>
  				</Row>
        )
  	});

  	return (
  	  <Row>
        <Col md={12}>
          <h3>Education</h3>
          {getEducation}
        </Col>
      </Row>
      
  	)
};

export default Education;