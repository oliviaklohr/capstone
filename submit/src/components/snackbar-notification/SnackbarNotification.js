import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';


const propTypes = {
  isCloseable: PropTypes.bool,
  isOpen: PropTypes.bool,
  message: PropTypes.string.isRequired,
  duration: PropTypes.number,
};

const defaultProps = {
  isCloseable: false,
  isOpen: false,
  duration: 6000,
};

class SnackbarNotification extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: props.isOpen,
    };

    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    this.setState({
      isOpen: false,
    });
  }

  render() {
    const { isCloseable, message, duration } = this.props;
    const { isOpen } = this.state;

    const closeAction = (
      <IconButton
        key="close"
        aria-label="Close"
        color="inherit"
        onClick={this.handleClose}
      >
        <CloseIcon />
      </IconButton>
    );

    return(
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        open={isOpen}
        autoHideDuration={duration}
        onClose={this.handleClose}
        message={<span>{message}</span>}
        action={[
          isCloseable && closeAction
        ]}
      />
    );
  }  
}  


SnackbarNotification.propTypes = propTypes;
SnackbarNotification.defaultProps = defaultProps;

export default SnackbarNotification;




