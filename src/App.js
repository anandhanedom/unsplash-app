import React from 'react';
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

//Material UI
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

function App(props) {
  const theme = createMuiTheme({
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

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Switch>
          <PrivateRoute exact path="/" component={ImagesPage} />
          <Route
            exact
            path="/auth"
            render={() =>
              props.isAuthenticated ? (
                <Redirect to="/" />
              ) : (
                <AuthenticationPage />
              )
            }
          />
          <Route path="*" component={() => <h1>404 Not Found !</h1>} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps, null)(App);
