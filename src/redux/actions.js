import axios from 'axios'
import { GET_USERS } from "./constants"

export const getUsers = () => async dispatch => {
    await axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_HOST}public-api/users`,
    }).then(response => {
        if(response.status === 200){
            dispatch({
                type: GET_USERS,
                payload: response.data
            })
        }
    })
}