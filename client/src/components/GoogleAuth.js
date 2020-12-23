import React from 'react';
import getGoogleAuthApiKey from '../apiKeys';
import Button from '@material-ui/core/Button';

class GoogleAuth extends React.Component {

    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: getGoogleAuthApiKey(),
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    }

    onSignIn = () => {
        this.auth.signIn();
    }

    onSignOut = () => {
        this.auth.signOut();
    }

    render() {
        return (
            <div>
                {this.state.isSignedIn ? 
                    <Button variant="outlined" onClick={this.onSignOut}>LOGOUT</Button> 
                        : 
                    <Button variant="outlined" onClick={this.onSignIn}>LOG IN / SIGN UP</Button>}
            </div>
        )
    }

}

export default GoogleAuth;