import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//Selectors
import { selectIsAuthenticated } from '../../redux/auth/auth.selectors.js';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = rest.isAuthenticated;
  return (
    <Route
      {...rest}
      render={(props) =>
        !isAuthenticated ? <Redirect to="/auth" /> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = createStructuredSelector({
  isAuthenticated: selectIsAuthenticated,
});

export default connect(mapStateToProps, null)(PrivateRoute);
