import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Photo from '../img/user.png'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

function Userscomponent({gender,name,email}) {
    return (
            <Card style={{maxWidth: "345px"}} >
                <CardActionArea>
                    <CardMedia
                    // image={Photo}
                    title="Contemplative Reptile"
                    style={{height: "140px", background: "#a882a8"}}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {email}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {gender}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">
                    View full profile
                    </Button>
                </CardActions>
            </Card>
    )
}

export default Userscomponent
