import React from 'react';
import Helmet from 'react-helmet';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Layout from '../components/layout';
import Profile from '../components/Profile/Profile';
import { graphql } from 'gatsby';
import ProfileListWrapper from '../components/Profile/ProfileList';

const useStyles = makeStyles(theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.length * 2,
    paddingBottom: theme.spacing.length * 2,
  },
}));

const ProfileTemplate = (props) => {
  const classes = useStyles();
  console.log(props)
  return (
    <Layout>
      <Helmet
        displayName={`Name: ${props.pageContext.displayName}`}
      />
      <Paper className={classes.root}>
        <Profile
          displayName={props.pageContext.displayName}
          firstName={props.pageContext.firstName}
          lastName={props.pageContext.lastName}
          bio={props.pageContext.bio}
          address={props.pageContext.address}
          phone={props.pageContext.phone}
          birthday={props.pageContext.birthday}
          notes={props.pageContext.notes}
          talent={props.pageContext.talent}
          gender={props.pageContext.gender}
          contributions={props.pageContext.contributions}
          picture={props.pageContext.picture}
        />
      </Paper>
      <ProfileListWrapper></ProfileListWrapper>
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
      field_gender
      field_notes
      field_talents {
        processed
      }
      field_phone
      field_biography
      field_birthday
      relationships {
        user_picture {
           localFile {
            childImageSharp {
              fluid(maxWidth: 1100) {
                ...GatsbyImageSharpFluid
              }
            }
           }
         }
      }
      field_contributions {
        processed
      }
    }
  }
`;
