import React from 'react';


const ProjectItem = props => {

	const projectObj = props.projectItemData;
	
	const projectGithub_map = projectObj.summary.map((gitlink) => (                   
            <li>{gitlink}</li>
        ))  	
    
    return (
        <div>
          <h4>{props.workItemData.company}</h4>
          <span><h5>{props.workItemData.position}, &nbsp;
          {props.workItemData.startDate} - {props.workItemData.endDate}</h5> </span>       
          
          <ul> 
           {workSummary_map}
          </ul>
          
        </div>
    )
};

export default WorkItem;