import { makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';
import Layout from '../components/layout';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const CalendarPage = (props) => {
  const classes = useStyles();
  return (
    <Layout>
    <Paper className={classes.root}>
    <Typography variant="h2" paragraph>{props.displayName}</Typography>
     <div data-tockify-component="calendar" data-tockify-calendar="timeisnow"></div>
     <script data-cfasync="false" data-tockify-script="embed" src="https://public.tockify.com/browser/embed.js"></script>
     </Paper>
     </Layout>
  );
};


export default CalendarPage;
