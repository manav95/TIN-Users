import React from 'react';
import { Link } from 'gatsby';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Navigation(props) {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <img src={"../../images/tin-icon.png"} alt="website logo"/>
        <Typography
          variant="h6"
          className={classes.title}
        >
          {props.siteTitle}
        </Typography>
        <div>
            <Button
              component={Link}
              to="/"
              color="inherit"
            >
              Home
            </Button>
        </div>
        <div>
            <Button
              component={Link}
              to="/calendar"
              color="inherit"
            >
              Calendar
            </Button>
        </div>
        <div>
            <Button
              component={Link}
              to="/marketplace"
              color="inherit"
            >
              Marketplace
            </Button>
        </div>
        <div>
            <Button
              component={Link}
              to="/users"
              color="inherit"
            >
              Users
            </Button>
        </div>
        <div>
            <Button
              component={Link}
              to="/projects"
              color="inherit"
            >
              Projects
            </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navigation;
