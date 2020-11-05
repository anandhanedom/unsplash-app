import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//Selectors
import { selectUser } from '../../redux/auth/auth.selectors.js';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const accessToken = localStorage.getItem('access_token');
  return (
    <Route
      {...rest}
      render={(props) =>
        !accessToken ? <Redirect to="/auth" /> : <Component {...props} />
      }
    />
  );
};

const mapStateToProps = createStructuredSelector({
  user: selectUser,
});

export default connect(mapStateToProps, null)(PrivateRoute);
