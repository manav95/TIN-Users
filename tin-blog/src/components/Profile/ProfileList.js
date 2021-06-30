import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, Link, graphql } from "gatsby"

const ProfileListWrapper = () => (
  <StaticQuery
    query={graphql`
      query {
        allUserUser(limit: 3) {
          nodes {
            id
            display_name
            field_first_name
            field_last_name
          }
        }
      }
    `}
    render={data => <ProfileList profiles={data.allUserUser.nodes} />}
  />
);

const ProfileList = ({profiles}) => (
  <ul>
    {
      profiles.map(({ node: profile }) => (
        <li key={profile.display_name}>
          <Link to={profile.display_name}>
            {profile.field_first_name+profile.field_last_name}
          </Link>
        </li>
      ))
    }
  </ul>
);

ProfileList.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        display_name: PropTypes.string.isRequired,
        field_first_name: PropTypes.string.isRequired,
        field_last_name: PropTypes.string.isRequired
      }).isRequired,
    }))
};

export default ProfileListWrapper;
