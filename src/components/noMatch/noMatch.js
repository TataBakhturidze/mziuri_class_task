import { Button } from '@material-ui/core';
import React from 'react'
import {useLocation,Link} from 'react-router-dom'
import './noMatch.css';

function NoMatch() {
    let location = useLocation();
    return (
        <div className='noMatch'>
            <p className='noMatchP'>No match for <code>{location.pathname}</code></p>
            <Button component={Link} to='/' variant="contained" color="primary">Back</Button>
        </div>
    )
}

export default NoMatch
