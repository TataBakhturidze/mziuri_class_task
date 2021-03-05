import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      width: 345,
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: '#a882a8',
    },
  });

    
  

function CommentsComponent({ name, email, body, created})

{
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
            avatar={
                <Avatar aria-label="recipe" className={classes.avatar}>
                {name.slice(0,1)}
                </Avatar>
            }
            title={name}
            subheader={created}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
                {body}
                </Typography>
                <Typography variant="caption" color="textSecondary" component="p">
                    <b>
                        {email}
                    </b>
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CommentsComponent






