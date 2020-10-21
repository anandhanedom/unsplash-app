import React from 'react';

//Components
import ImageCard from '../ImageCard/ImageCard.component';

//Material UI
import Container from '@material-ui/core/Container';

//CSS
import styles from './Gallery.module.css';

const Gallery = (props) => (
  <Container style={{ marginTop: '60px', maxWidth: '90vw' }}>
    <div className={styles.container}>
      {props.images.map((img) => (
        <ImageCard imgSrc={img.url} />
      ))}
    </div>
  </Container>
);

export default Gallery;
