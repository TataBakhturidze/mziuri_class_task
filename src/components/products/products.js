import React from 'react'
import { Card, CardMedia, CardContent, Typography } from '@material-ui/core';
import useStyles from './productstyle';

function ProductsComponent({
    name,
    description,
    image,
    price
}) {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardMedia height={20} className={classes.media} image={image} title={name} />
            <CardContent className={classes.cardHeight}>
                <div className={classes.CardContent}>
                    <Typography variant='h5' gutterBottom>
                        {name}
                    </Typography>
                    <Typography variant='h5' gutterBottom>
                        {price}
                    </Typography>
                </div>
                <Typography  dangerouslySetInnerHTML={{__html: description}} variant='body2'  className={classes.description} gutterBottom/>
            </CardContent>
        </Card>
    )
}

export default ProductsComponent
