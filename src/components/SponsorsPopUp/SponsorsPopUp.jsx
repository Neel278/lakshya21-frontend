import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import './SponsorsPopUp.scss';

function SponsorsPopUp(props) {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      padding: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      // maxWidth: '80%',
      // marginRight: 'auto',
      // marginLeft: 'auto',
    },
  }));

  const classes = useStyles();
  return (
    <div className="sponsors-wrapper">
      <div className="sponsored-by__logo-box">
        <div className="sponsored-by__logo-item">
          <p>
            <i>{props.sponsorshipText}</i>
          </p>

          <img
            src={props.source}
            alt={props.sponsorAlt}
            className="sponsored-by__logo"
            onMouseOver={props.imgHover}
            onClick={props.clicked}
            style={{
              backgroundColor: `${props.imgBg}`,
              padding: `${props.imgPadding}`,
              borderRadius: `${props.imgBorderRadius}`,
            }}
          />
        </div>
      </div>
      <Modal
        open={props.open}
        onClose={props.close}
        aria-labelledby="simple-dialog-title"
        className={classes.modal}
      >
        <Zoom in={props.open}>
          <img
            src={props.SponsorsBanner}
            className="sponsors-banner"
            alt={props.sponsorAlt}
          />
        </Zoom>
      </Modal>
    </div>
  );
}

export default SponsorsPopUp;
