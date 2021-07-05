import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  tabLabel: {
    fontSize: '1.4rem',
    fontFamily: 'Helvetica',
    fontWeight: '700',
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    '& > div': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
}));
