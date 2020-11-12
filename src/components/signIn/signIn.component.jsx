import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

//Components
import Alerts from '../alerts/alerts.component';

//Actions
import { loginWithCredentialsAsync } from '../../redux/auth/auth.actions.js';
import { addAlert } from '../../redux/alert/alert.actions.js';

//Material UI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Fake Unsplash
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = (props) => {
  const classes = useStyles();

  const onSubmit = async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (email && password) {
      await props.loginWithCredentialsAsync(email, password);
      props.history.push('/');
    } else {
      props.addAlert('Please fill in both the fields', 'error', 3000);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          style={{ marginBottom: '30px' }}
        >
          Sign in
        </Typography>
        <Alerts />
        <form className={classes.form}>
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            id="email"
            label="Username"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={onSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link
                href="#"
                variant="body2"
                style={{ cursor: 'pointer', color: 'rgba(0, 0, 0, 0.54)' }}
              >
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <div
                style={{ cursor: 'pointer', color: 'rgba(0, 0, 0, 0.54)' }}
                onClick={props.toggleSignIn}
              >
                {"Don't have an account? Sign Up"}
              </div>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loginWithCredentialsAsync: (userName, password) =>
    dispatch(loginWithCredentialsAsync(userName, password)),

  addAlert: (msg, type, timeeout) => dispatch(addAlert(msg, type, timeeout)),
});

export default withRouter(connect(null, mapDispatchToProps)(SignIn));
