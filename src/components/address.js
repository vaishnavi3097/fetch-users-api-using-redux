import React from 'react';
import { useSelector } from 'react-redux'


function Address(props){
  const user = useSelector(state => state);
  return (
    <div class="table">
      <h4>Address</h4>
      <h5>Street:{user.particularUserData && user.particularUserData.address? user.particularUserData.address.street:''}</h5>
      <h5>Suite:{user.particularUserData && user.particularUserData.address? user.particularUserData.address.suite:''}</h5>
      <h5>City:{user.particularUserData && user.particularUserData.address? user.particularUserData.address.city:''}</h5>
      <h5>Zipcode:{user.particularUserData && user.particularUserData.address? user.particularUserData.address.zipcode:''}</h5>
    </div>
  );
}


export default Address;
