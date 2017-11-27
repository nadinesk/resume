import React from 'react';


const ProjectItem = props => {

	const projectObj = props.projectItemData;
  let projectGit; 
  let projectDem; 

  const projectGithub_map = (projectObj.github.length > 1) ? (
      projectGit = projectObj.github.map((gitlink, key) => (           
              (key === 0) ? 
              <span><a href={gitlink}>Frontend</a>, </span> 
              : 
              <span><a href={gitlink}>Backend</a> </span>         
        ))      
    ) : 
  (
     projectGit= projectObj.github.map((gitlink, key) => (                             
              <span><a href={gitlink}>Github </a></span>  
    ))
    )
  
  
const projectDemo_map = (projectObj.demo.length > 1) ? (
      projectDem= projectObj.demo.map((demolink, key) => (           
              (key === 0) ? 
              <span><a href={demolink}>Package</a>, </span> 
              : 
              <span><a href={demolink}>Usage</a> </span>         
        ))      
    ) : 
  (
     projectDem= projectObj.demo.map((demolink, key) => (                             
              <span><a href={demolink}>Demo</a></span>  
    ))
    )
    
    return (
        <div>
          <h4>{props.projectItemData.title}</h4>
          <div>Code: {projectGithub_map} &nbsp;</div> 
          <div>{projectDemo_map}</div>     
          
          <div>
           {props.projectItemData.description}
          </div>
          <div> 
           {props.projectItemData.summary}
          </div>
          
        </div>
    )
};

export default ProjectItem;