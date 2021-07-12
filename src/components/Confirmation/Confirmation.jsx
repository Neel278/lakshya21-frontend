import './Confirmation.scss';
import bg from './PopUp.png';
import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'fixed',
    width: '80%',
    height: '60%',
    backgroundColor: '#232A67',
    backdropFilter: 'blur(40px)',
    borderRadius: '20px',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    boxShadow: theme.shadows[5],
    display: 'flex',
    border: 'none',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export default function Confirmation(props) {
  const classes = useStyles();

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.close}
        aria-labelledby="simple-dialog-title"
        className="modal"
      >
        <Zoom in={props.open}>
          <div className={classes.paper}>
            <p className="success-msg">{props.message}</p>
            <br></br>
            <button className="back-btn" onClick={props.close}>
              Back
            </button>
          </div>
        </Zoom>
      </Modal>
    </div>
  );
}
