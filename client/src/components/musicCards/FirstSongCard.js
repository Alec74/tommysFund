import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
// import Song1 from '../playButtons/Song1'
// import Song2 from '../playButtons/Song2'



const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

export default function FirstSongCard() {
  const classes = useStyles();
  const theme = useTheme();

//   const handlePlay = () => {
//     let songs = [
//         Song1,
//         Song2
//     ];

//   }

  return (
    <Card id="song1" style={{textAlign: "center", justifyContent: "center"}} className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            My Brain
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Thomas McGlone
          </Typography>
        </CardContent>
        {/* <div className={classes.controls}>
          <Song1></Song1>
        </div> */}
      </div>
    </Card>
  );
}
