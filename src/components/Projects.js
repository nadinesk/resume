import React from 'react';
import ProjectItem from './ProjectItem';

const Projects = props => {
    const projectsExp = props.projectsData.map((project) => (
    	<div><ProjectItem projectItemData={project} /></div>
    	))

    return (
      <div>
        <h3>Technical Projects</h3>
        {projectsExp}
      </div>
    );
};

export default Projects;

