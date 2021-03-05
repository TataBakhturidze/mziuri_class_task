import { GET_USERS, GET_POSTS, GET_COMMENTS, GET_TODOS, GET_CATEGORIES, GET_PRODUCTS } from './constants';

const initialState = {
    Users : [],
    Posts: [],
    Comments: [],
    Todos: [],
    Categories: [],
    Products: [],
}

const Reducer = (state=initialState, action) =>{
    switch(action.type) {
        case GET_USERS : return {
            ...state,
            Users: action.payload,
        }
        case GET_POSTS : return {
            ...state,
            Posts: action.payload
        }
        case GET_COMMENTS : return {
            ...state,
            Comments: action.payload
        }
        case GET_TODOS : return {
            ...state,
            Todos: action.payload
        }
        case GET_CATEGORIES : return {
            ...state,
            Categories: action.payload
        }
        case GET_PRODUCTS : return {
            ...state,
            Products: action.payload
        }
        default: return state;
    }
}

export default Reducer;