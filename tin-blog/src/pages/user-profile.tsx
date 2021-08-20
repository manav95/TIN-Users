import { Router } from '@reach/router';
import React from 'react';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Profile from '../components/Profile/Profile';
import Layout from '../components/layout';

const UserProfile = (props) => {
  return (
    <Layout>
    <Router>
      <PrivateRoute path="/user/profile" component={Profile} />
    </Router>
  </Layout>
  );
};

export default UserProfile;
