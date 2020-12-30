import React from 'react';
import getGoogleAuthApiKey from '../apiKeys';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import CircularProgress from '@material-ui/core/CircularProgress';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Fab from '@material-ui/core/Fab';
import FingerprintIcon from '@material-ui/icons/Fingerprint';

class GoogleAuth extends React.Component {

    state = { isSignedIn: null };

    constructor(props) {
        super(props);
        this.state = { anchorEl: null, open: false }
    }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: getGoogleAuthApiKey(),
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = (isSignedIn) => {
        isSignedIn ? this.props.signIn(this.auth.currentUser.get().getId()) : this.props.signOut();
    }

    signIn = () => {
        this.auth.signIn();
    }

    signOut = () => {
        this.auth.signOut();
    }

    handleMenu = (event) => {
        this.setState({anchorEl: event.currentTarget, open: true});
    }

    handleMenuClose = () => {
        this.setState({anchorEl: null, open: false});
    }

    handleMenuSignOut = () => {
        this.signOut();
        this.handleMenuClose();
    }

    render() {
        return (
            <div>
                {this.props.isSignedIn === null ? 
                    <div><CircularProgress color="inherit" /></div> : this.props.isSignedIn ?
                        <div>
                            <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            >
                                <AccountCircle fontSize={"large"}/>
                            </IconButton>
                            <Menu
                            id="menu-appbar"
                            anchorEl={this.state.anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={this.state.open}
                            onClose={this.handleMenuClose}
                            >
                                <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
                                <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
                                <MenuItem onClick={this.handleMenuSignOut}>Logout</MenuItem>
                            </Menu>
                        </div>
                        : <Button size={"large"} onClick={this.signIn}><FingerprintIcon fontSize={"large"}/> </Button>
                    }

            </div>
        )
    }
// <Button variant="outlined" onClick={this.signIn}>LOG IN / SIGN UP</Button>

// <Fab aria-label="add" variant="extended" color={"secondary"} size={"small"}>
// Login
// </Fab>
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);