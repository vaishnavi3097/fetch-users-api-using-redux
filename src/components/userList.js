import React from 'react';
import{select} from '../statemanagement/action';
import { useDispatch, useSelector } from 'react-redux'
import "bootstrap/dist/css/bootstrap.min.css";


function UserList(props){
  const user = useSelector(state => state);
  const dispatch = useDispatch();
  
  return (
   <div>
    <h4>Userlist</h4>
      <table>
        <thead>
          <td>ID</td>
          <td>Name</td>
          <td>Phone</td>
          <td>Website</td>
        </thead>
        <tbody>
          {
            user.users_data.map((user,index)=>{
              return(
                <tr onClick={() => dispatch(select(index))}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  </tr>
              )
            })
          }
        </tbody>
      </table>
      </div>
    
  );
}

  export default UserList;
