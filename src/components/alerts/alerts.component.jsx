import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//Selectors
import { selectAlerts } from '../../redux/alert/alert.selectors.js';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const SimpleAlerts = (props) => {
  const classes = useStyles();

  // return (
  //   <div className={classes.root}>
  //     <Alert variant="filled" severity={}></Alert>

  //     <Alert variant="filled" severity="error">
  //       This is an error alert — check it out!
  //     </Alert>
  //     <Alert variant="filled" severity="warning">
  //       This is a warning alert — check it out!
  //     </Alert>
  //     <Alert variant="filled" severity="info">
  //       This is an info alert — check it out!
  //     </Alert>
  //     <Alert variant="filled" severity="success">
  //       This is a success alert — check it out!
  //     </Alert>
  //   </div>
  // );

  return (
    <div className={classes.root}>
      {props.alerts.length > 0 &&
        props.alerts.map((alert) => (
          <Alert key={alert.id} severity={`${alert.type}`}>
            {alert.msg}
          </Alert>
        ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  alerts: selectAlerts,
});

export default connect(mapStateToProps, null)(SimpleAlerts);
