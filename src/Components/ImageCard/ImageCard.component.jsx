import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    minHeight: 180,
  },
});

const ImageCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{ borderRadius: '24px' }}>
      <CardActionArea>
        <CardMedia className={classes.media} image={props.imgSrc} />
      </CardActionArea>
    </Card>
  );
};

export default ImageCard;
