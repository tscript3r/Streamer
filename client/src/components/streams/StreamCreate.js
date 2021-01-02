import React from 'react';
import Layout from '../ContentLayout';
import { streamCreate } from "../../actions";
import { connect } from 'react-redux';
import StreamForm from "./StreamForm";

class StreamCreate extends React.Component {

    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    renderForm = () => {
        return <StreamForm onSubmit={this.onSubmit}/>
    }

    render() {
        return <Layout component={this.renderForm()} />
    }

}

export default connect(null, { createStream: streamCreate })(StreamCreate);
