import React from 'react';
import WorkItem from './WorkItem';

const Work = props => {
    const workExperience = props.workData.map((work) => (
    	<div><WorkItem workItemData={work} /></div>
    	))

    return (
      <div>
        <h3> Work experience</h3>
        {workExperience}
      </div>
    );
};

export default Work;

