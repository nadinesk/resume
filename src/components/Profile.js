import React from 'react' 

const Profile = props => {
	const profileObj = props.profileData; 
	const profiles_map = profileObj.profiles.map((prof) => (       
            <a href={prof.url}>{prof.network} </a>
    ))  	
	return (
		<div> 
			<h1> {profileObj.name} </h1>			
			<span><a href={`mailto:${profileObj.email}`}>{profileObj.email} </a>
			<a href={profileObj.website}>Website </a>
			{profiles_map} </span> 
			<div>
				{profileObj.summary} 
			</div> 			
		</div> 
		)
};

export default Profile;