import USER_ACTION from '../statemanagement/action'
const initialstate={
    users_data:[],
    particularUserData:{},
    loading:false,
    error:''
};
const mainReducer=(state=initialstate,action)=>{
    switch(action.type){
        case USER_ACTION.USERS_REQUEST_INIT:
            return{
                ...state,
                loading:true
            }
            case USER_ACTION.USERS_REQUEST_SUCCESS:
                    return{
                        ...state,
                        loading:false,
                        users_data:action.payload
                    }
            case USER_ACTION.SELECT_USERS:
                return{
                    ...state,
                    particularUserData:state.users_data[action.payload]
                }
             case USER_ACTION.USERS_REQUEST_ERROR:
                            return{
                                ...state,
                                loading:false,
                                error:action.payload
                            }
                    
        default:return{...state}
    }
}

export default mainReducer;