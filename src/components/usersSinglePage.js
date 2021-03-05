import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import React from 'react'
import {Link,useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'

function UsersSinglePage() {
    const params = useParams()
    console.log(params)
    const UserSingle = useSelector(state => state.Users.find(item=>item.id === params.id))
    console.log(UserSingle)
    return (
            <Card style={{width: "600px",gridColumn: "2/3",}} >
                <CardActionArea>
                    <CardMedia
                    // image={Photo}
                    title="Contemplative Reptile"
                    style={{height: "140px", background: "#a882a8"}}
                    />
                    <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {UserSingle.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {UserSingle.email}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {UserSingle.gender}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {UserSingle.status}
                    </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button  variant="contained" color="primary" component={Link} to='/users' >Back</Button>
                </CardActions>
            </Card>  
    )
}

export default UsersSinglePage
