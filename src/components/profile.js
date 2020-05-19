import React from 'react';
import { useSelector } from 'react-redux'


function Profile(props){
  
  const user = useSelector(state => state);
  console.log("cou",user);
  return (
    <div class="table">
        <h4>Profile</h4>
      <h5>Id:{user.particularUserData ? user.particularUserData.id : ''}</h5>
       <h5>Name:{user.particularUserData ? user.particularUserData.name : ''}</h5>
       <h5>Username:{user.particularUserData ? user.particularUserData.username : ''}</h5>
       <h5>Phone:{user.particularUserData ? user.particularUserData.phone : ''}</h5>
       <h5>Email:{user.particularUserData ? user.particularUserData.email : ''}</h5>
       <h5>Website:{user.particularUserData ? user.particularUserData.website : ''}</h5>
    </div>
  );
}

export default Profile;