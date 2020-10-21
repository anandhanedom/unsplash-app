import React from 'react';

//CSS
import styles from './ImageCard.module.css';

const ImageCard = (props) => {
  return (
    <div className={styles.card}>
      <img className={styles.img} src={props.imgSrc} alt="" />
    </div>
  );
};

export default ImageCard;
