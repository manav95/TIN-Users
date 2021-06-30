import React from 'react';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ProfileListWrapper from '../Profile/ProfileList';

const Profile = (props) => (
  <>
    <Typography variant="h2" paragraph>{props.displayName}</Typography>
    <GridList cols={10} cellHeight="auto">
      <ListItem>
      <ListItemText primary="First Name" secondary={props.firstName} />
    </ListItem>
    <ListItem>
      <ListItemText primary="Last Name" secondary={props.lastName} />
      </ListItem>
      <ListItem>
        <ListItemText primary="Address" secondary={props.address} />
      </ListItem>
      <ListItem>
      <ListItemText primary="Phone" secondary={props.phone} />
    </ListItem>
    <ListItem>
      <ListItemText primary="Birthday" secondary={props.birthday}/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Bio" secondary={props.bio}/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Notes" secondary={props.notes}/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Talent" secondary={props.talent}/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Gender" secondary={props.gender}/>
    </ListItem>
    <ListItem>
      <ListItemText primary="Contribution" secondary={props.contribution}/>
    </ListItem>
    </GridList>
   <ProfileListWrapper>Additional User Profiles</ProfileListWrapper>
  </>
);

Profile.propTypes = {
  displayName: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  bio: PropTypes.string,
  address: PropTypes.string,
  phone: PropTypes.string,
  birthday: PropTypes.object,
  notes: PropTypes.string,
  talent: PropTypes.object,
  gender: PropTypes.string,
  contribution: PropTypes.object,
};

export default Profile;
