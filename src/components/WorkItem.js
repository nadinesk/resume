import React from 'react';


const WorkItem = props => {

	const workObj = props.workItemData;
	console.log(workObj.summary) 
	const workSummary_map = workObj.summary.map((summaryItem) => (                   
            <li>{summaryItem}</li>
        ))  	
    
    return (
        <div>
          <h4 className="work-company">{props.workItemData.company}</h4>
          <span className="reg-text">{props.workItemData.position}, &nbsp;
          {props.workItemData.startDate} - {props.workItemData.endDate} </span>       
          
          <ul className="reg-text"> 
           {workSummary_map}
          </ul>
          
        </div>
    )
};

export default WorkItem;