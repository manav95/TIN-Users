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
        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FLos_Angeles&amp;src=bWFuYXYuZHV0dGExOTk1QGdtYWlsLmNvbQ&amp;src=cmdhNTU1OG1iMHAxdWdnOXVsNXBsZDBqdW9AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=Y19jbGFzc3Jvb203OTBjYjY0MkBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%23F09300&amp;color=%2333B679&amp;color=%23202124" style={{ border: "solid 1px #777"}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
      </Paper>
     </Layout>
  );
};


export default CalendarPage;
