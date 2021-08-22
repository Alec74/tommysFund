import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import two from '../../images/IMG_1542.JPG';


const useStyles = makeStyles({
  root: {
    maxWidth: 245,
  },
  media: {
    height: 300,
  },
});

export default function Card1() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={two}
          title="Contemplative Reptile"
        />
      </CardActionArea>
    </Card>
  );
}
