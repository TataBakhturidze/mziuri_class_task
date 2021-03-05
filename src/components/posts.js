import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../App.css';

function PostsComponent({body,title}) {
    return (
        <Card style={{width: "345px"}} >
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" style={{background: "#a882a8", padding:"12px", borderRadius: '2px'}}>
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {body}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>  
    )
}

export default PostsComponent
