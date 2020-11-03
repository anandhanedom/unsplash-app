import React from 'react';

//Components
import ImageCard from '../imageCard/ImageCard.component';

//Material UI
import Container from '@material-ui/core/Container';

//CSS
import styles from './gallery.module.css';

const Gallery = (props) => {
  const images = props.images;

  return (
    <Container style={{ marginTop: '60px', maxWidth: '90vw' }}>
      <div className={styles.container}>
        {images.map((img) => (
          <ImageCard key={img.id} imgSrc={img.url} title={img.image_name} />
        ))}
      </div>
    </Container>
  );
};
export default Gallery;
