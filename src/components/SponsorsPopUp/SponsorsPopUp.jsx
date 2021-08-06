import React from 'react';
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';
import Zoom from '@material-ui/core/Zoom';
import './SponsorsPopUp.scss';
import { useMediaQuery } from 'react-responsive';

function SponsorsPopUp(props) {
  const useStyles = makeStyles((theme) => ({
    modal: {
      display: 'flex',
      padding: theme.spacing(1),
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
    },
  }));

  const classes = useStyles();
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' });
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
      {props.SponsorsBanner && (
        <Modal
          open={props.open}
          onClose={props.close}
          aria-labelledby="simple-dialog-title"
          className={classes.modal}
        >
          <Zoom in={props.open}>
            {isTabletOrMobile ? (
              <div>
                <a href="https://forms.gle/mHaHATiT1Mw38AGF7">
                  <img
                    src={props.SponsorsBanner}
                    className="sponsors-banner-popup"
                    alt={props.sponsorAlt}
                    style={{ width: '40rem', backgroundColor: 'white' }}
                  />
                </a>
              </div>
            ) : (
              <div>
                <a href="https://forms.gle/mHaHATiT1Mw38AGF7">
                  <img
                    src={props.SponsorsBanner}
                    className="sponsors-banner-popup"
                    alt={props.sponsorAlt}
                    style={{
                      width: '600px',
                      height: 'auto',
                      backgroundColor: 'white',
                    }}
                  />
                </a>
              </div>
            )}
          </Zoom>
        </Modal>
      )}
    </div>
  );
}

export default SponsorsPopUp;
