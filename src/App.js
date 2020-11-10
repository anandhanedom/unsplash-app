import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PrivateRoute from './components/privateRoute/privateRoute.component.jsx';

import './App.css';

//Pages
import AuthenticationPage from './pages/auth/auth.component.jsx';
import ImagesPage from './pages/images/images.component.jsx';

//Selectors
import { selectUser } from './redux/auth/auth.selectors';

//Actions
import { loginWithRefreshToken } from './redux/auth/auth.actions';

//Material UI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

class App extends Component {
  theme = createMuiTheme({
    palette: {
      primary: {
        main: '#3DB46D',
        contrastText: '#fff',
      },
      secondary: {
        main: '#EB5757',
        contrastText: '#fff',
      },
    },
  });

  shouldTokenRefresh = (token) => {
    const parsedToken = JSON.parse(atob(token.split('.')[1]));
    // const username = parsedToken.username;
    const tokenExpiry = parsedToken.exp;
    const currentTimeStamp = Math.floor(Date.now() / 1000);
    // console.log(tokenExpiry < currentTimeStamp);
    return tokenExpiry < currentTimeStamp ? true : false;
  };

  componentDidMount() {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    if (accessToken && this.shouldTokenRefresh(accessToken)) {
      // console.log('Logging with refresh token');
      loginWithRefreshToken(refreshToken); //add refresh condition
    }
  }

  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <div className="App">
          <Switch>
            <PrivateRoute exact path="/" component={ImagesPage} />
            <Route
              exact
              path="/auth"
              render={() => {
                return localStorage.getItem('access_token') ? (
                  <Redirect to="/" />
                ) : (
                  <AuthenticationPage />
                );
              }}
            />
            <Route path="*" component={() => <h1>404 Not Found !</h1>} />
          </Switch>
        </div>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

const mapDispatchToProps = (dispatch) => ({
  loginWithRefreshToken: (refresh_token) =>
    dispatch(loginWithRefreshToken(refresh_token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
