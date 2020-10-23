import React from 'react';
import { connect } from 'react-redux';

//Actions
import { toggleModal } from '../../Redux/header/header.actions.js';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      width: '50vw',
    },
  },

  btnSpace: {
    '& > *': {
      margin: theme.spacing(1),
    },
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: '30px',
  },
}));

const ModalForm = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-secondary"
          label="Label"
          variant="outlined"
          color="primary"
          fullWidth={true}
        />
      </div>
      <div style={{ marginTop: '30px' }}>
        <TextField
          id="outlined-secondary"
          label="Photo URL"
          variant="outlined"
          color="primary"
          fullWidth={true}
        />
      </div>
      <div className={classes.btnSpace}>
        <Button
          variant="contained"
          style={{ textTransform: 'none', borderRadius: '24px' }}
          onClick={props.toggleModal}
          size="large"
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ textTransform: 'none', borderRadius: '24px' }}
          size="large"
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
});

export default connect(null, mapDispatchToProps)(ModalForm);
