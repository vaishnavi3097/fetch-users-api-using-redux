import {getAllUsers} from '../utils/api';

const USER_ACTION={
  'USERS_REQUEST_INIT':'users api init',//start
  'USERS_REQUEST_SUCCESS':'User api success',//success
  'USERS_REQUEST_ERROR':' User api error',//error
  'SELECT_USERS':'selected user data'//select user data
}
 
export const select=(ind)=>{
    return{
        type:USER_ACTION.SELECT_USERS,
        payload:ind
    }
}
export const initApi=()=>{
	return{
    type: USER_ACTION.USERS_REQUEST_INIT,
  }
}

export const successApi=(data)=>{
   return{
    type: USER_ACTION.USERS_REQUEST_SUCCESS,
    payload:data
  }
}

export const errorApi=(error)=>{
  return{
    type: USER_ACTION.USERS_REQUEST_ERROR,
    payload:error
  }
}

// export function fetchUsers() {
//   return async dispatch => {
//     dispatch(initApi())

//     try {
//       const response = await fetch('https://jsonplaceholder.typicode.com/users')
//       const data = await response.json()
//       dispatch(successApi(data))
//     } catch (error) {
//       dispatch(errorApi(error));
//     }
//   }
// }

export const fetchUsers =  () => {
  return(dispatch) => {
    dispatch(initApi())
    getAllUsers().then((response) => {
        dispatch(successApi(response.data)) 
      }).catch((er) => {
        dispatch(errorApi(er.error))
      })
  }
}

export default USER_ACTION;