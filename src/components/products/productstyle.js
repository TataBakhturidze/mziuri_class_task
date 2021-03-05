import {makeStyles} from '@material-ui/core/styles';

export default makeStyles(() => ({
    root: {
      maxWidth: '90%',
      height: '100%',
      backgroundColor: '#a882a8',
      color: 'white',
    },
    media: {
      height: 0,
      paddingTop: '56.25%', 
      backgroundSize: '440px',
      backgroundColor: 'white',
    },
    cardActions: {
      display: 'flex',
      justifyContent: 'flex-end',
    },
    cardContent: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    cardHeight: {
      height: '100%',
    },
    iconButton: {
      color: 'white',
      '&:hover': {
        backgroundColor: 'rgb(191 215 234 / 27%)',
     },
    },
    description: {
      color: '#ffffffb0',
    }
  }));