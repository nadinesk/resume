import React from 'react';


const Education = props => {
    const getEducation = props.educationData.map(function(item, index) {
  		
  		return (
          <div>
            <div>{item.studyType} {item.area}</div>
  				  <div>{item.institution}</div>
  				  <div>Studied: {item.startDate} - {item.endDate}</div>
  				</div>
        )
  	});

  	return (
  	  <section className="education">
        <div>Education</div>
        {getEducation}
      </section>
  	)
};

export default Education;