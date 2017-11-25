import React from 'react' 

const Profile = props => {
	const profileObj = props.profileData; 
	const profiles_map = profileObj.profiles.map((prof) => (       
            <div><a href={prof.url}>{prof.network}</a></div>
        ))  	
	return (
		<div> 
			<div> {profileObj.name} </div>
			<div> {profileObj.label} </div>
			<div><a href={`mailto:${profileObj.email}`}>{profileObj.email}</a></div>
			<div><a href={profileObj.website}>website</a></div>
			<div>{profiles_map}</div>			
			<div> {profileObj.summary} </div>
		</div> 
		)
};

export default Profile;