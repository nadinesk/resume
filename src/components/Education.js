import React from 'react';


const Education = props => {
    const getEducation = props.educationData.map(function(item, index) {
  		
  		return (
          <div>
            <h5>{item.institution}, {item.endDate}</h5>
            <div>{item.studyType} </div>  				    				
            <div>{item.honors} </div>                      
  				</div>
        )
  	});

  	return (
  	  <section className="education">
        <h3>Education</h3>
        {getEducation}
      </section>
  	)
};

export default Education;