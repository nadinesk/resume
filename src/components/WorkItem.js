import React from 'react';


const WorkItem = props => {

	const workObj = props.workItemData;
	console.log(workObj.summary) 
	const workSummary_map = workObj.summary.map((summaryItem) => (                   
            <li>{summaryItem}</li>
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