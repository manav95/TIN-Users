import React from 'react'
import { graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';

import Layout from '../components/layout'
import { Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const UserPage = (props) => {
  const classes = useStyles();
  return (
    <Layout>
      <Paper className={classes.root}>
        {
              props.data.allUserUser.nodes.map(profile => {
                let theName = (profile.field_first_name ? profile.field_first_name : '') + (profile.field_last_name ? profile.field_last_name : '');
                <div>{ theName }</div>
              })
        }
        </Paper>
    </Layout>
  );
};


export default UserPage;

// The result of this GraphQL query will be injected as props.data into the
// UserPage component.
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
