import React from 'react';
import { useSelector } from 'react-redux'


function Company(props){
  const user = useSelector(state => state);
  return (
   
    <div class="table">
        <h4>Company</h4>
      <h5>Name:{user.particularUserData && user.particularUserData.company? user.particularUserData.company.name:''}</h5>
      <h5>Bs:{user.particularUserData && user.particularUserData.company? user.particularUserData.company.bs:''}</h5>
      <h5>CatchPhrase:{user.particularUserData && user.particularUserData.company? user.particularUserData.company.catchPhrase:''}</h5>
    </div>
  );
}


export default Company;
