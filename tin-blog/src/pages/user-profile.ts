import { Router } from '@reach/router';
import PrivateRoute from '../components/PrivateRoute/PrivateRoute';
import Profile from '../components/Profile/Profile';
import Layout from '../components/layout';

const UserProfile = (props) => {
  return (
  <Layout>
  <Router>
  <PrivateRoute path="/user/profile" component = { Profile } >
        </PrivateRoute>
    </Router>
        < /Layout>
  );
};

export default UserProfile;
