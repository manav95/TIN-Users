import React from 'react'
import PropTypes from 'prop-types';
import { graphql } from 'gatsby'
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Layout from '../components/layout'
import ProfileCard from '../components/Profile/ProfileCard';
import Seo from '../components/seo';
import { siteMetadata } from '../../gatsby-config';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

const IndexPage = (props) => {
  return (
    <Layout>
      <Seo title={siteMetadata.title} description={siteMetadata.description} />
      <Box mt={3}>
        <Grid container spacing={1}>
        {
            props.data.allUserUser.nodes.map(profile => {
              console.log(profile);
              let theName = (profile.field_first_name ? profile.field_first_name : '') + (profile.field_last_name ? profile.field_last_name : '');
              <Grid item key={profile.display_name} xs={6} md={4}>
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
