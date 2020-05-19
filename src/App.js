import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {Card,CardGroup} from 'react-bootstrap'
import{fetchUsers} from './statemanagement/action';
import UserList from './components/userList'
import Company from './components/company'
import Address from './components/address'
import Profile from './components/profile'


function App(){
  const dispatch = useDispatch()
   const users = useSelector(state => state.users_data);
console.log("sel",users)
  useEffect(() => {
    dispatch(fetchUsers())
  }, [dispatch])
  

  return (
    <div>
     
  <Card>
     <Card.Body>
      <UserList/>
      </Card.Body>
    
      </Card>
      <CardGroup>
      <Card>
     <Card.Body>
      <Profile/>
      </Card.Body>
      </Card>
      <Card>
     <Card.Body>
      <Address/>
      </Card.Body>
      </Card>
      <Card>
     <Card.Body>
      <Company/>
      </Card.Body>
    
      </Card>

</CardGroup>
</div>
  );
}


export default App;
