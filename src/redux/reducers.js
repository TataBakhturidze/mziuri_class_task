import { GET_USERS } from './constants';

const initialState = {
    Users : [],
    Photos: [],
    News:[]
}

const Reducer = (state=initialState, action) =>{
    switch(action.type) {
        case GET_USERS : return {
            ...state,
            Users: action.payload
        }
        default: return state;
    }
}

export default Reducer;