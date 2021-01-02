import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import {Collapse, Grid} from "@material-ui/core";
import clsx from "clsx";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import history from "../../history";

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth: 200,
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
    expand: {
        float: "right",
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    expandedContent: {
        padding: 0,
        alignItems: "center",
        justifyContent: "center"
    }
}));

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

const MediaCard = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [imgId] = React.useState(getRandomInt(50, 100));

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const handleEditClick = () => {
        history.push(`/streams/edit/${props.stream.id}`)
    }

    return (
        <Grid item xs={12} sm={3}>
            <Card className={classes.root}>
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={`https://picsum.photos/id/${imgId}/200?random=3`}
                        title="Random pic"
                    />
                </CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {props.stream.title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.stream.description}
                        {props.userId && props.userId === props.stream.userId && (
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show actions"
                                size={"small"}>
                                <ExpandMoreIcon/>
                            </IconButton>)}
                    </Typography>
                </CardContent>
                {props.userId && props.userId === props.stream.userId && (
                    <CardActions className={classes.expandedContent}>
                        <Collapse in={expanded} timeout="auto" unmountOnExit>
                            <IconButton aria-label="delete" className={classes.margin}>
                                <DeleteIcon/>
                            </IconButton>
                            <IconButton aria-label="edit" className={classes.margin} onClick={handleEditClick}>
                                <EditIcon />
                            </IconButton>
                        </Collapse>
                    </CardActions>)
                }
            </Card>
        </Grid>
    );
}

export default MediaCard;