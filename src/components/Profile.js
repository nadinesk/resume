import React from 'react' 
import { Row, Col } from 'react-bootstrap'

const Profile = props => {
	const profileObj = props.profileData; 
	const profiles_map = profileObj.profiles.map((prof) => (       
           (prof.network === "LinkedIn") ? <a href={prof.url}><i class="fa fa-linkedin fa-lg" aria-hidden="true"></i></a> : 
      	<a href={prof.url}><i class="fa fa-github-alt fa-lg" aria-hidden="true"></i> </a> 
      	))
	return (
		<div>
    		<Row >
    		 	<Col md={4} />
    		 	<Col md={4} className="center-text">
					<h1> {profileObj.name} </h1>			
				</Col>
				<Col md={4}/>
			</Row>
			<Row >
				<Col md={4} />
				<Col md={4} className="center-text">					
					<span><a href={`mailto:${profileObj.email}`}><i class="fa fa-envelope-o fa-lg" aria-hidden="true"></i></a>
					<a href={profileObj.website}><i class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></a>
						{profiles_map} </span> 
				</Col>
				<Col md={4}></Col>
			</Row>
			<Row className="make-margins">	
				<Col md={12} className="reg-text">
					{profileObj.summary} 
				</Col>				
			</Row> 
		</div>
	)
};

export default Profile;