import React from 'react'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import Layout from '../components/layout'
import ProfileCard from '../components/Profile/ProfileCard';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const IndexPage = (props) => {
  const classes = useStyles();

  return (
    <Layout>
      <Paper className={classes.root}>
        <Typography variant="h2">Hi people</Typography>
        <Typography variant="s`123ubtitle1" paragraph>
          Welcome to your new Gatsby site using <a href="https://material-ui.com">Material UI</a> for the UI.
        </Typography>
        <Typography variant="subtitle1" paragraph>
          Now go build something great.
        </Typography>
      </Paper>
      <Box mt={3}>
        <Grid container spacing={1}>
        {
          props.data.allUserUser.nodes.map(({ node: profile }) => (
            <Grid item key={profile.display_name} xs={6} md={4}>
              <ProfileCard
                name={profile.field_first_name+profile.field_last_name}
                photo='Placeholder Photo'
                path={profile.display_name}
              />
            </Grid>
          ))
        }
        </Grid>
      </Box>
    </Layout>
  );
};

IndexPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default IndexPage;

// The result of this GraphQL query will be injected as props.data into the
// IndexPage component.
export const query = graphql`
  query {
    allUserUser(sort: {fields: [changed], order:DESC}) {
      nodes {
        id
        display_name
        field_first_name
        field_last_name
      }
    }
  }
`;
