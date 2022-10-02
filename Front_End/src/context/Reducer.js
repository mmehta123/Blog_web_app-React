const Reducer=(state,action)=>{
    switch(action.type){
        case "LOGIN_START":
            return {
                isFetching: true,
                user:null,
                error:false
            }
        case "LOGIN_SUCCESS":
            return {
                isFetching: false,
                user:action.payload,
                error:false
            }
        case "LOGIN_FAILURE":
            return {
                isFetching: false,
                user:null,
                error:true
            }
        case "LOGOUT":
            return {
                isFetching: false,
                user: null,
                error: false
            }
        case "UPDATE_START":
            return {
                ...state
                ,isFetching: true,
                
            }
        case "UPDATE_SUCCESS":
            return {
                isFetching: false,
                user: action.payload,
                error: false
            }
        case "UPDATE_FAILURE":
            return {
                isFetching: false,
                user: state.user,
                error: true
            }
            default:
                return state;
    }
}
export default Reducer;