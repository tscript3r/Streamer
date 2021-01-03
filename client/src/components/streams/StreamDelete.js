import React from 'react';
import Modal from "../Modal";
import Button from "@material-ui/core/Button";
import ThumbDownIcon from "@material-ui/icons/ThumbDown";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import { connect } from 'react-redux';
import { streamDelete } from '../../actions';

const StreamDelete = (props) => {

    const renderCancel = () => {
        return (
            <Button color="secondary" startIcon={<ThumbDownIcon />}>
                Disagree
            </Button>
        )
    }

    const renderActions = () => {
        return (
            <Button color="primary" startIcon={<ThumbUpIcon />} onClick={handleConfirmation}>
                Agree
            </Button>
        );
    }

    const handleConfirmation = () => {
        props.streamDelete(props.streamId);
    }

    return (
            <Modal
                show={props.show}
                title="Confirmation"
                description="Are you sure to delete this stream?"
                cancel={renderCancel()}
                actions={renderActions()}
            />
    );

};

export default connect(null, { streamDelete })(StreamDelete);