import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@material-ui/core/Link';
import GoogleAuth from './GoogleAuth';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';
import logo from '../logo5.png';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  logo: {
    marginTop: 8
  }
}));

const Header = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar color="inherit" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link component={RouterLink} to="/" color="inherit">
              <img className={classes.logo} src={logo} alt="logo" width="100" height="40"/>
            </Link>
          </Typography>
          <GoogleAuth />
        </Toolbar>
      </AppBar>
    </div>
  );
}


const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut })(Header);