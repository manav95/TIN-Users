import React from 'react';
import Helmet from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Layout from '../components/layout';
import Profile from '../components/Profile/Profile';
import { graphql } from 'gatsby';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
}));

const ProfileTemplate = (props) => {
  const classes = useStyles();
  console.log("Props")
  return (
    <Layout>
      <Helmet
        displayName={`Name: ${props.data.display_name}`}
      />
      <Paper className={classes.root}>
        <Profile
          displayName={props.data.display_name}
        />
      </Paper>
    </Layout>
  )
};

export default ProfileTemplate;

export const query = graphql`
  query ProfileTemplate($id: String!) {
    userUser(id: {eq: $id}) {
      id
      display_name
      drupal_id
      field_address
      field_first_name
      field_last_name
    }
  }
`;
