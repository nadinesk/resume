import React from 'react' 

const Profile = props => {
	const profileObj = props.profileData; 
	console.log(profileObj.name)
	return (
		<div> 
			<div> {profileObj.name} </div>
			<div> {profileObj.label} </div>
			<div> {profileObj.email} </div>
			<div> {profileObj.website} </div>
			<div> {profileObj.summary} </div>
		</div> 
		)
};

export default Profile;