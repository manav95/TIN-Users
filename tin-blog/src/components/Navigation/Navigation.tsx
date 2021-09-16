import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import tinIcon from './tin-icon.png';
import withDrupalOauthConsumer from '../drupal-oauth/withDrupalOauthConsumer';
import SignIn from '../Authentication/SignIn';
import LogoutLink from '../LogoutLink/LogoutLink';


function Navigation(props) {
  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(5),
      fontSize: '20px',
      color: 'black'
    },
    title: {
      marginLeft: -25,
      marginRight: 190
    },
  }));

  const classes = useStyles();
  console.log(props.userAuthenticated);

  return (
    <AppBar position="relative" className={classes.root}>
      {props.userAuthenticated ?
      <Toolbar>
        <img src={tinIcon} alt={props.siteTitle} className={classes.title}/>
        <div>
            <Button
              component={Link}
              to="/"
              color="inherit"
              className={classes.menuButton}
            >
              Home
            </Button>
        </div>
        <div>
            <Button
              component={Link}
              to="/calendar"
              color="inherit"
              className={classes.menuButton}
            >
              Calendar
            </Button>
        </div>
        <div>
            <Button
              component={Link}
              to="/marketplace"
              color="inherit"
              className={classes.menuButton}
            >
              Marketplace
            </Button>
        </div>
        <div>
            <Button
              component={Link}
              to="/users"
              color="inherit"
              className={classes.menuButton}
            >
              Users
            </Button>
        </div>
        <div>
            <Button
              component={Link}
              to="/projects"
              color="inherit"
              className={classes.menuButton}
            >
              Projects
            </Button>
          </div>
          <div>
          <Button component={Link} className={classes.menuButton} to="/user-profile">My Account</Button>
          </div>
          <div>
          <LogoutLink className={classes.menuButton}/>
          </div>
      </Toolbar>
        :
         <div>
         <SignIn />
        </div>
      }
    </AppBar>
  );
}

export default withDrupalOauthConsumer(Navigation);
