import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CircularProgress from '@material-ui/core/CircularProgress';
import tinIcon from './tin-icon.png';
import withDrupalOauthConsumer from '../drupal-oauth/withDrupalOauthConsumer';
import { Paper, Toolbar, Typography } from '@material-ui/core';
import Layout from "../layout";

class PropertyType {
  drupalOauthClient: any;
  updateAuthenticatedUserState: (state: boolean) => void;
}

class SignIn extends React.Component<PropertyType, {}, any> {
  state = {
    open: false,
    processing: false,
    username: '',
    password: '',
    error: null,
    registered: false
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

  handleRegisterSubmit = () => {
    this.setState({ processing: true });
    const { username, password } = this.state;

    this.props.drupalOauthClient.handle(username, password, '').then(() => {
      this.setState({ open: false, processing: false });
      this.props.updateAuthenticatedUserState(true)
    }).catch((err: Error) => {
       console.log(err);
       this.setState({ error: err });
    });
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

  handleClickRegister = () => {
    this.setState({ registered: true });
  }
  handleRegisterCancel = () => {
    this.setState({ registered: false, processing: false });
  };


  render() {
    const { error, processing } = this.state;
    return (
      <>
        <Toolbar>
        <img src={tinIcon} alt="TIN"/>
        <Button onClick={this.handleClickOpen} variant="contained" color="primary">Log in</Button>
        <Button onClick={this.handleClickRegister} variant="contained" color="primary">Register</Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Log in</DialogTitle>
          <DialogContent>
            {error && <p>{error.message}</p>}
            <DialogContentText>
              Enter your username and password below to log in.
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              name="username"
              label="Username"
              type="text"
              fullWidth
              onChange={event =>
                this.setState({ [event.target.name]: event.target.value })
              }
            />
            <TextField
              margin="dense"
              name="password"
              label="Password"
              type="password"
              fullWidth
              onChange={event =>
                this.setState({ [event.target.name]: event.target.value })
              }
            />
          </DialogContent>
          <DialogActions>
              <Button onClick={this.handleCancel} color="default">
                Cancel
              </Button>
              {
                processing ?
                  <CircularProgress />
                  :
                  <Button onClick={this.handleSubmit} color="primary" variant="contained">
                    Log in
                  </Button>
              }
          </DialogActions>
          </Dialog>
          <Dialog
          open={this.state.registered}
          onClose={this.handleRegisterCancel}
          aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Register</DialogTitle>
            <DialogContent>
          <iframe src="https://tin-users.ddev.site/user/register" style={{ border: "solid 1px #777"}} width="800" height="600" frameBorder="0" scrolling="no"></iframe>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleRegisterCancel} color="default">
                Cancel
              </Button>
              {
                processing ?
                  <CircularProgress />
                  :
                  <Button onClick={this.handleRegisterSubmit} color="primary" variant="contained">
                    Register
                  </Button>
              }
          </DialogActions>
          </Dialog>
          </Toolbar>
      </>
    );
  }
}

export default withDrupalOauthConsumer(SignIn);
