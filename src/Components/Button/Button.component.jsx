import React from 'react';
import Button from '@material-ui/core/Button';

const CustomButton = (props) => {
  let button;

  const styles = {
    borderRadius: '20px',
    textTransform: 'initial',
  };

  if (props.primary) {
    button = (
      <Button variant="contained" color="primary" style={styles}>
        {props.children}
      </Button>
    );
  } else if (props.secondary) {
    button = (
      <Button variant="contained" color="secondary" style={styles}>
        {props.children}
      </Button>
    );
  } else {
    button = (
      <Button variant="contained" style={styles}>
        {props.children}
      </Button>
    );
  }

  return button;
};

export default CustomButton;
