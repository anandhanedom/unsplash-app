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
  let form;

  if (!props.type) {
    form = (
      <form>
        <div>
          <h2 id="transition-modal-title">Are you sure?</h2>

          <div>
            <TextField
              id="outlined-secondary"
              label="Password"
              type="password"
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
              color="secondary"
              style={{ textTransform: 'none', borderRadius: '24px' }}
              size="large"
            >
              Delete
            </Button>
          </div>
        </div>
      </form>
    );
  } else {
    form = (
      <form>
        <div>
          <h2 id="transition-modal-title">Add a new photo</h2>

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
        </div>
      </form>
    );
  }

  return (
    <form className={classes.root} noValidate autoComplete="off">
      {form}
    </form>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
});

export default connect(null, mapDispatchToProps)(ModalForm);
