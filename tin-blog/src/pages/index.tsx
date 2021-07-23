import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/layout'
import Seo from '../components/seo';
import { siteMetadata } from '../../gatsby-config';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    color: "gray"
  },
}));

const IndexPage = (props) => {
  const classes = useStyles();
  return (
    <Layout>
      <Seo title={siteMetadata.title} description={siteMetadata.description} />
      <Paper className={classes.root}>
      <Typography variant="body1" paragraph>
           As a nonprofit organization, our mission to equip and empower communities with the tools and conducive environment vital to achieving the highest level of human potential in today’s time.
      </Typography>
      </Paper>
    </Layout>
  );
};


export default IndexPage;
