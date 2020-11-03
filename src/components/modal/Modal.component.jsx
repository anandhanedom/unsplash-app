import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

//Components
import ModalForm from '../modalForm/ModalForm.component';

//Selectors
import {
  selectModalType,
  selectModalOpen,
} from '../../redux/modal/modal.selectors.js';

//Actions
import { toggleModal } from '../../redux/modal/modal.actions.js';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    borderRadius: '24px',
    outline: 'none',
  },
}));

const TransitionsModal = (props) => {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={props.isModalOpen}
      onClose={props.toggleModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={props.isModalOpen}>
        <div className={classes.paper}>
          <ModalForm type={props.modalType} />
        </div>
      </Fade>
    </Modal>
  );
};

const mapStateToProps = createStructuredSelector({
  isModalOpen: selectModalOpen,
  modalType: selectModalType,
});

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(TransitionsModal);
