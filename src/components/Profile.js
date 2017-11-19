import React from 'react' 

const Profile = props => {
	const profileObj = props.profileData; 
	console.log(profileObj.name)
	return (
		<div> 
			<div> {profileObj.name} </div>
			<div> {profileObj.label} </div>
			<div><a href={`mailto:${profileObj.email}`}>{profileObj.email}</a></div>
			<div><a href={profileObj.website}>website</a></div>
			<div><a href={profileObj.profiles[0].url}>{profileObj.profiles[0].network}</a></div>
			<div><a href={profileObj.profiles[1].url}>{profileObj.profiles[1].network}</a></div>
			<div> {profileObj.summary} </div>
		</div> 
		)
};

export default Profile;