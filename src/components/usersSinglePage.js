import { Button } from '@material-ui/core'
import React from 'react'
import {Link,useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'

function UsersSinglePage({}) {
    const params = useParams()
    console.log(params)
    const UserSingle = useSelector(state => state.Users.find(item=>item.id == params.id))
    console.log(UserSingle)
    return (
        <div>
            <Button  variant="contained" color="primary" component={Link} to='/' >Back</Button>
            <p>{UserSingle.name}</p>
        </div>
    )
}

export default UsersSinglePage
