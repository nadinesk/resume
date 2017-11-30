import React from 'react';
import ProjectItem from './ProjectItem';
import { Row, Col } from 'react-bootstrap'

const Projects = props => {
    const projectsExp = props.projectsData.map((project) => (
    	<div className="reg-text"><ProjectItem projectItemData={project} /></div>
    	))

    return (
      <Row>
      	<Col md={12}>
        	<h3>Technical Projects</h3>
        	{projectsExp}
        </Col> 
        
      </Row>
    );
};

export default Projects;

