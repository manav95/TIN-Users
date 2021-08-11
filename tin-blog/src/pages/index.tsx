import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Layout from '../components/layout'
import Seo from '../components/seo';
import { siteMetadata } from '../../gatsby-config';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    color: "black"
  },
}));

const IndexPage = (props) => {
  const classes = useStyles();
  return (
    <Layout>
      <Seo title={siteMetadata.title} description={siteMetadata.description} />
      <Paper className={classes.root}>
      <Typography variant="body1" paragraph>
          As a nonprofit organization, our mission to equip and empower communities with the tools and conducive environment vital to achieving the highest level of human potential in today’s time. We aim to fix
          the issues and challenges of the world from the bottom up, not through top-down processes or divisive politics. We bring people together to harness their potential and become their highest selves
          through service to humanity, through art, through culture, through fostering peace and unity.
      </Typography>
      </Paper>
    </Layout>
  );
};


export default IndexPage;
