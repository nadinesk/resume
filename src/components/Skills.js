import React from 'react';


const Skills = props => {
    
    const skills_map = props.skillsData.map((skill) => (                   
            <span>{skill} * </span>
        ))  

  		return (
          <div>
            <div>{skills_map} </div>  				  
  				</div>
        )
  	};

  	
export default Skills;