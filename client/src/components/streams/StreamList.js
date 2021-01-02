import React from 'react';
import { connect } from 'react-redux';
import { streamFetchAll } from "../../actions";
import SingleStreamCard from './SingleStreamCard';
import {Grid, withStyles} from "@material-ui/core";

const useStyles = theme => ({
    root: {
        flexGrow: 1
    },
    container: {
        paddingTop: '30px',
        paddingLeft: '25px',
        paddingRight: '25px'
    }
});

class StreamList extends React.Component {

    componentDidMount() {
        this.props.streamFetchAll();
    }

    renderStreams() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container
                      direction="row"
                      spacing={2}
                      className={classes.container}
                      justify="center"
                      alignItems="center"
                      style={{ minHeight: '50vh' }}>
                    {this.props.streams.map((stream, id) =>
                        <SingleStreamCard stream={stream} userId={this.props.userId} key={id} />)
                    }
                </Grid>
            </div>
        )
    }

    render() {
        return (<Grid container spacing={2}>{this.renderStreams()}</Grid>)
    }

}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams),
        userId: state.auth.userId
    }
}

export default withStyles(useStyles)(connect(mapStateToProps, { streamFetchAll })(StreamList));