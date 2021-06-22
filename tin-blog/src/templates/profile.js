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
  console.log(props)
  const { nodeProfile: profile } = props.data;
  return (
    <Layout>
      <Helmet
        displayName={`Name: ${profile.display_name}`}
      />
      <Paper className={classes.root}>
        <Profile
          displayName={profile.display_name}
        />
      </Paper>
    </Layout>
  )
};

export default ProfileTemplate;

export const query = graphql`
  query ProfileTemplate($drupal_id: String!) {
    userUser(drupal_id: {eq: $drupal_id}) {
        id
        display_name
        drupal_id
        field_address
        field_birthday
        field_contributions { processed }
        field_first_name
        field_last_name
        field_notes
        field_phone
    }
  }
`;
