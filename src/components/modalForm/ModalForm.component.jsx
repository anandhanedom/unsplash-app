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

  onAdd = async (e) => {
    e.preventDefault();
    const url = document.getElementById('imageUrl');

    if (this.state.label && url.files[0]) {
      const file = url.files[0];
      let imageData = new FormData();

      imageData.append('label', this.state.label);
      imageData.append('imagename', file, file.name);

      await this.props.addImageToDb(imageData);
    } else {
      this.props.addAlert('Please fill all the fields', 'error', 3000);
    }
  };

  onDelete = async (e) => {
    e.preventDefault();

    if (this.state.password) {
      await this.props.deleteImageFromDb(
        this.props.deleteId,
        this.props.userName,
        this.state.password
      );
    } else {
      this.props.addAlert('Please enter your password', 'error', 3000);
    }
  };

  returnModalForm(type) {
    let modalForm;

    if (type) {
      modalForm = (
        <form
          onSubmit={this.onDelete}
          className={this.props.classes.root}
          noValidate
          autoComplete="off"
        >
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
              type="submit"
              variant="contained"
              color="secondary"
              style={{ textTransform: 'none', borderRadius: '24px' }}
              size="large"
            >
              Delete
            </Button>
          </div>
        </form>
      );
    } else {
      modalForm = (
        <form
          onSubmit={this.onAdd}
          className={this.props.classes.root}
          noValidate
          autoComplete="off"
        >
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
            <input type="file" id="imageUrl" />
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
              type="submit"
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
    }

    return modalForm;
  }

  render() {
    const modalForm = this.returnModalForm(this.props.type);

    return modalForm;
  }
}

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),

  addImageToDb: (fd) => dispatch(addImageToDb(fd)),

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
