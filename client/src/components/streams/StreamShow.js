import React from 'react';
import {connect} from 'react-redux';
import {streamFetchSingle} from "../../actions";
import flv from 'flv.js';
import {Grid} from "@material-ui/core";

class StreamShow extends React.Component {

    constructor(props) {
        super(props);
        this.videoRef = React.createRef();
    }


    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.streamFetchSingle(id);
        this.buildPlayer(id);
    }

    componentDidUpdate() {
        this.buildPlayer(this.props.match.params.id);
    }

    buildPlayer(id) {
        if (this.player || !this.props.stream)
            return;
        console.log(this.props);
        this.player = flv.createPlayer({
            type: 'flv',
            isLive: true,
            url: `http://localhost:8000/live/${id}.flv`,
            config: {
            enableWorker: true,
                enableStashBuffer: false,
                stashInitialSize: 128,
            }
        });
        this.player.attachMediaElement(this.videoRef.current);
        this.player.load();
    }

    componentWillUnmount() {
        if(this.player)
            this.player.destroy();
    }

    render() {
        if(!this.props.stream)
            return <h1>Loading...</h1>

        return (
            <Grid container direction="column" spacing={0} justify="center" alignItems="center" >
                <br />
                <video ref={this.videoRef} style={{ width: '90%' }} controls />
            </Grid>
        );
    }

}

const mapStateToProps = (state, props) =>  {
    return { stream: state.streams[props.match.params.id] }
}

export default connect(mapStateToProps, { streamFetchSingle })(StreamShow);