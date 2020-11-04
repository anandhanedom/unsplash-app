import React from 'react';
import { connect } from 'react-redux';

//CSS
import styles from './ImageCard.module.css';

//Actions
import {
  changeModalType,
  toggleModal,
} from '../../redux/modal/modal.actions.js';

import { setDeleteId } from '../../redux/images/images.actions.js';

const ImageCard = (props) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardOverlay}></div>
      <img className={styles.cardImg} src={props.imgSrc} alt="" />

      <div className={styles.cardDelete}>
        <div
          className={styles.deleteBtn}
          onClick={() => {
            props.setDeleteId(props.id);
            props.changeModalType(true);
            props.toggleModal();
          }}
        >
          Delete
        </div>
      </div>
      <div className={styles.cardTitle}>
        <p>{props.title}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleModal: () => dispatch(toggleModal()),
  changeModalType: (type) => dispatch(changeModalType(type)),
  setDeleteId: (id) => dispatch(setDeleteId(id)),
});

export default connect(null, mapDispatchToProps)(ImageCard);
