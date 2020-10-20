import React from 'react';

//Components
import ImageCard from '../ImageCard/ImageCard.component';

//Material UI
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const Gallery = (props) => (
  <Container style={{ marginTop: '60px', maxWidth: '90vw' }}>
    <Grid container spacing={3} justify="flex-start" alignItems="flex-start">
      {props.images.map((img) => (
        <Grid
          item
          flexGrow={1}
          key={img.id}
          xs={12}
          sm={4}
          md={4}
          lg={4}
          style={{ borderRadius: '24px' }}
        >
          <ImageCard imgSrc={img.url} />
        </Grid>
      ))}
    </Grid>
  </Container>
);

export default Gallery;
