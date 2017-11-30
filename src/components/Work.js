import React from 'react';
import WorkItem from './WorkItem';
import { Row, Col } from 'react-bootstrap'

const Work = props => {
    const workExperience = props.workData.map((work) => (
    	<div><WorkItem workItemData={work} /></div>
    	))

    return (
      <Row>
      	<Col md={12}>
        	<h3> Work experience</h3>
        		{workExperience}
       	</Col>
      </Row>
    );
};

export default Work;

