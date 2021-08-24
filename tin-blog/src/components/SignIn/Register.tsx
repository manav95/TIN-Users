import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContentText from '@material-ui/core/DialogContentText';
import { withDrupalOauthConsumer } from '../drupal-oauth/withDrupalOauthConsumer';

class PropertyType {
  drupalOauthClient: any;
  updateAuthenticatedUserState: (state: boolean) => void;
}

class Register extends React.Component<PropertyType, {}, any> {
  state = {
    open: false,
    processing: false,
    username: '',
    password: '',
    error: null,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleCancel = () => {
    this.setState({ open: false });
  };

  handleClose = () => {
    this.setState({ open: false, processing: false });
  };

  handleSubmit = () => {
    this.setState({ processing: true });
    const { username, password } = this.state;

    this.props.drupalOauthClient.handleLogin(username, password, '').then(() => {
      this.setState({ open: false, processing: false });
      this.props.updateAuthenticatedUserState(true)
    }).catch((err: Error) => {
       console.log(err);
       this.setState({ error: err });
    });
  };

  render() {
    const { error, processing } = this.state;
    return (
      <>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
        <DialogContentText>
              Enter your username and password below to log in.
            </DialogContentText>
        </Dialog>
        </>
    );
  }
}

export default withDrupalOauthConsumer(Register);

