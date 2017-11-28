import React from 'react' 

const Profile = props => {
	const profileObj = props.profileData; 
	const profiles_map = profileObj.profiles.map((prof) => (       
           (prof.network === "LinkedIn") ? <a href={prof.url}><i class="fa fa-linkedin fa-lg" aria-hidden="true"></i></a> : 
      	<a href={prof.url}><i class="fa fa-github-alt fa-lg" aria-hidden="true"></i> </a> 
      	))
	return (
		<div> 
			<h1> {profileObj.name} </h1>			
			<span><a href={`mailto:${profileObj.email}`}><i class="fa fa-envelope-o fa-lg" aria-hidden="true"></i></a>
			<a href={profileObj.website}><i class="fa fa-pencil-square-o fa-lg" aria-hidden="true"></i></a>
			{profiles_map} </span> 
			<div>
				{profileObj.summary} 
			</div> 			
		</div> 
		)
};

export default Profile;