import React from 'react';
import { connect } from 'react-redux';
import { streamFetchSingle, streamEdit } from "../../actions";
import StreamForm from "./StreamForm";
import _ from 'lodash';

class StreamEdit extends React.Component {

    componentDidMount() {
        this.props.streamFetchSingle(this.props.match.params.id);
    }

    onSubmit = formValues => {
        this.props.streamEdit(this.props.match.params.id, formValues);
    }

    render() {
        if(this.props.stream)
            return (
                <div>
                    <StreamForm
                        initialValues={_.pick(this.props.stream, 'title', 'description')}
                        onSubmit={this.onSubmit}
                    />
                </div>
            );
        else
            return (
                <div>
                    Loading
                </div>
            )
    }

}

const mapStateToProps = (state, own) => {
    return {stream: state.streams[own.match.params.id]}
}

export default connect(mapStateToProps, { streamFetchSingle, streamEdit })(StreamEdit);