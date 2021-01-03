import React from 'react';
import ReactDOM from 'react-dom';
import {Slide} from "@material-ui/core";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

const Modal = props => {
    const [open, setOpen] = React.useState(props.show);

    const handleClose = () => {
        setOpen(false);
    };

    return ReactDOM.createPortal(
        <div>
            <Dialog
                open={open}
                TransitionComponent={Transition}
                keepMounted
                onClose={handleClose}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="alert-dialog-slide-title">{props.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {props.description}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <div onClick={handleClose}>
                        {props.cancel}
                    </div>
                    {props.actions}
                </DialogActions>
            </Dialog>
        </div>,
        document.querySelector('#modal')
    );
};

export default Modal;