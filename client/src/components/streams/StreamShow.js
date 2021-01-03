import React from 'react';
import {connect} from 'react-redux';
import {streamFetchSingle} from "../../actions";

class StreamShow extends React.Component {

    componentDidMount() {
        this.props.streamFetchSingle(this.props.match.params.id);
    }

    render() {
        if(!this.props.stream)
            return <h1>Loading...</h1>
    }

}

const mapStateToProps = (state, props) =>  {
    return { stream: state.streams[props.match.params.id] }
}


export default connect(mapStateToProps, { streamFetchSingle })(StreamShow);