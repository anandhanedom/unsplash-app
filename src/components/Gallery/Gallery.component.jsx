import React from 'react';

//Components
import ImageCard from '../ImageCard/ImageCard.component';

//Material UI
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const Gallery = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} justify="flex-start">
        {props.images.map((img) => (
          <Grid key={img.id} item xs={4}>
            <ImageCard imgSrc={img.download_url} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Gallery;
