import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//Components
import Alert from '../alerts/alerts.component';

//Actions
import { toggleModal } from '../../redux/modal/modal.actions.js';
import {
  addImageToDb,
  deleteImageFromDb,
} from '../../redux/images/images.actions.js';
import { addAlert } from '../../redux/alert/alert.actions.js';

//Selectors
import { selectModalType } from '../../redux/modal/modal.selectors.js';
import { selectDeleteId } from '../../redux/images/images.selectors';
import { selectUser } from '../../redux/auth/auth.selectors';

//Material UI
import { withStyles } from '@material-ui/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = (theme) => ({
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
});

class ModalForm extends Component {
  constructor() {
    super();
    this.state = {
      label: '',
      password: '',
      file: null,
    };
  }

  modalForm = null;

  handleLabelChange = (e) => {
    this.setState({ label: e.target.value });
  };

  handleUrlChange = (e) => {
    this.setState({ url: e.target.value });
  };

  handlePasswordChange = (e) => {
    this.setState({ password: e.target.value });
  };

  handleSelectedFile = (e) => {
    this.setState({ file: e.target.files[0] });
  };

  returnModalForm(type) {
    let modalForm;

    if (type) {
      modalForm = (
        <div>
          <h2 id="transition-modal-title">Are you sure?</h2>
          <Alert />
          <div style={{ marginTop: '30px' }}>
            <TextField
              id="outlined-secondary"
              label="Password"
              type="password"
              variant="outlined"
              color="primary"
              fullWidth={true}
              onChange={this.handlePasswordChange}
            />
          </div>

          <div className={this.props.classes.btnSpace}>
            <Button
              variant="contained"
              style={{ textTransform: 'none', borderRadius: '24px' }}
              onClick={this.props.toggleModal}
              size="large"
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={{ textTransform: 'none', borderRadius: '24px' }}
              size="large"
              onClick={async () => {
                if (this.state.password) {
                  await this.props.deleteImageFromDb(
                    this.props.deleteId,
                    this.props.userName,
                    this.state.password
                  );
                } else {
                  this.props.addAlert(
                    'Please enter your password',
                    'error',
                    3000
                  );
                }
              }}
            >
              Delete
            </Button>
          </div>
        </div>
      );
    } else {
      modalForm = (
        <div>
          <h2 id="transition-modal-title">Add a new photo</h2>
          <Alert />

          <div style={{ marginTop: '30px' }}>
            <TextField
              // id="outlined-secondary"
              label="Label"
              variant="outlined"
              color="primary"
              fullWidth={true}
              onChange={this.handleLabelChange}
            />
          </div>

          <div
            style={{
              marginTop: '30px',
            }}
          >
            <input
              type="file"
              onChange={this.handleSelectedFile}
              style={{ display: 'none' }}
              ref={(fileInput) => (this.fileInput = fileInput)}
            />
            <Button
              variant="contained"
              color={this.state.file ? 'primary' : 'default'}
              style={{ textTransform: 'none', borderRadius: '24px' }}
              size="small"
              onClick={() => this.fileInput.click()}
            >
              {this.state.file ? 'File chosen \u2714' : 'Choose File'}
            </Button>
          </div>
          <div className={this.props.classes.btnSpace}>
            <Button
              variant="contained"
              style={{ textTransform: 'none', borderRadius: '24px' }}
              onClick={this.props.toggleModal}
              size="large"
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              style={{ textTransform: 'none', borderRadius: '24px' }}
              size="large"
              onClick={async () => {
                if (this.state.label && this.state.file) {
                  await this.props.addImageToDb(
                    this.state.label,
                    this.state.url
                  );
                } else {
                  this.props.addAlert(
                    'Please fill all the fields',
                    'error',
                    3000
                  );
                }
              }}
            >
              Submit
            </Button>
          </div>
        </div>
      );
    }

    return modalForm;
  }

  render() {
    const modalForm = this.returnModalForm(this.props.type);

    return (
      <form className={this.props.classes.root} noValidate autoComplete="off">
        {modalForm}
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),

  addImageToDb: (title, url, userId) =>
    dispatch(addImageToDb(title, url, userId)),

  deleteImageFromDb: (id, userName, password) =>
    dispatch(deleteImageFromDb(id, userName, password)),

  addAlert: (msg, type, timeeout) => dispatch(addAlert(msg, type, timeeout)),
});

const mapStateToProps = createStructuredSelector({
  type: selectModalType,
  deleteId: selectDeleteId,
  userName: selectUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(useStyles)(ModalForm));
