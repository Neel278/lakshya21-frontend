import './PopUp.scss';
import React, { useEffect, useState } from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';

export default function PopUp(props) {
  const useStyles = makeStyles((theme) => ({
    paper: {
      position: 'fixed',
      width: `${props.paperWidth}`,
      height: `${props.paperHeight}`,
      backgroundColor: `${props.bgColor}`,
      backdropFilter: 'blur(40px)',
      borderRadius: `${props.paperRadius}`,
      backgroundImage: `url(${props.bg})`,
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
  const classes = useStyles();
  const [message, setMessage] = useState('');

  useEffect(() => {
    // console.log(props.message);
    setMessage(
      props.message === '' ? 'Message sent to admin. Thank You!' : props.message
    );
    return () => {
      setMessage('');
    };
  }, [props.message]);

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
            <p className="success-msg">{message}</p>
            <br></br>
            {props.button && (
              <button className="back-btn" onClick={props.close}>
                Back
              </button>
            )}
          </div>
        </Zoom>
      </Modal>
    </div>
  );
}
