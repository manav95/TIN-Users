import React from 'react'
import { graphql } from 'gatsby'
import ProfileCard from '../components/Profile/ProfileCard';
import Layout from '../components/layout'
import { Box, Card, CardActions, CardContent, Grid, Paper, Typography } from '@material-ui/core';

const UserPage = (props) => {
  return (
    <Layout>
      <Box mt={3}>
        <Grid container={true} spacing={1}>
        {
            props.data.allUserUser.nodes.map(profile => {
              console.log(profile);
              let theName = (profile.field_first_name ? profile.field_first_name : '') + (profile.field_last_name ? profile.field_last_name : '');
              return <Grid item key={profile.display_name} xs={6} md={4}>
                <ProfileCard
                  name={theName}
                  picture={profile.relationships ? profile.relationships.user_picture : undefined}
                  path={profile.display_name ? profile.display_name : ''}
                />
              </Grid>
            })
        }
        </Grid>
      </Box>
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
