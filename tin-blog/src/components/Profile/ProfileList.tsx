import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, Link, graphql } from "gatsby"
import { ReactNode } from 'react';

function profileFunction(data): ReactNode {
  return <ProfileList profiles={data.allUserUser.nodes} />;
}

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
    render={data => profileFunction(data)}
  />
);

const ProfileList = ({profiles}) => (
  <ul>
    {
      profiles.map(profile => (
        <li key={profile.display_name}>
          <Link to={profile.display_name}>
            {profile.field_first_name + ' ' + profile.field_last_name}
          </Link>
        </li>
      ))
    }
  </ul>
);

ProfileList.propTypes = {
  profiles: PropTypes.arrayOf(
    PropTypes.shape({
        id: PropTypes.string,
        display_name: PropTypes.string,
        field_first_name: PropTypes.string,
        field_last_name: PropTypes.string
      }).isRequired
  )};

export default ProfileListWrapper;
