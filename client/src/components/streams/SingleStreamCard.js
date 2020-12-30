import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Grid} from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        minWidth: 200,
        maxWidth: 345,
    },
    media: {
        height: 140,
    }
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

export default function MediaCard(props) {
    const classes = useStyles();

    return (
        <Grid item xs={12} sm={3}>
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={`https://picsum.photos/id/${getRandomInt(100, 1000)}/200?random=3`}
                    title="Random pic"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.stream.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.stream.description}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
        </Grid>
    );
}
