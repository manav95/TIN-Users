import React from 'react';
import Button from '@material-ui/core/Button';

import withDrupalOauthConsumer from '../drupal-oauth/withDrupalOauthConsumer';

const LogoutLink = (props) => {
  if (props.drupalOauthClient) {
    return(
      <Button
        className={props.className}
        onClick={async () => {
          await props.drupalOauthClient.handleLogout();
          props.updateAuthenticatedUserState(false);
        }}
      >
        Log out
      </Button>
    );
  }

  return('');
};

export default withDrupalOauthConsumer(LogoutLink);
