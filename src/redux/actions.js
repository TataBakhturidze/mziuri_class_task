import axios from 'axios'
import { 
    GET_USERS, 
    GET_POSTS,
    GET_COMMENTS,
    GET_TODOS,
    GET_CATEGORIES,
    GET_PRODUCTS,
} from "./constants"

export const getUsers = () => async dispatch => {
    await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_HOST}public-api/users`,
    }).then(response => {
        
        if(response.status === 200){
            dispatch({
                type: GET_USERS,
                payload: response.data.data
            })
        }
    })
}
export const getPosts = () => async dispatch => {
    await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_HOST}public-api/posts`,
    }).then(response => {
        console.log(response)
        if(response.status === 200){
            dispatch({
                type: GET_POSTS,
                payload: response.data.data
            })
        }
    })
}
export const getComments = () => async dispatch => {
    await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_HOST}public-api/comments`,
    }).then(response => {
        if(response.status === 200){
            dispatch({
                type: GET_COMMENTS,
                payload: response.data.data
            })
        }
    })
}
export const getTodos = () => async dispatch => {
    await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_HOST}public-api/todos`,
    }).then(response => {
        if(response.status === 200){
            dispatch({
                type: GET_TODOS,
                payload: response.data.data
            })
        }
    })
}
export const getCategories = () => async dispatch => {
    await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_HOST}public-api/categories`,
    }).then(response => {
        if(response.status === 200){
            dispatch({
                type: GET_CATEGORIES,
                payload: response.data.data
            })
        }
    })
}
export const getProducts = () => async dispatch => {
     await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_HOST}public-api/products`,
    }).then(response => {
        if(response.status === 200){
            dispatch({
                type: GET_PRODUCTS,
                payload: response.data.data
            })
        }
    })
}
