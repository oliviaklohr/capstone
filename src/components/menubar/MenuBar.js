import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconButton from '@material-ui/core/IconButton/IconButton';
import ArrowBack from '@material-ui/icons/ArrowBack';

import styles from './MenuBar.css';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * Callback function triggered when the left toolbar item is clicked
   */
  onLeftElementPress: PropTypes.func,
  /**
   * Callback function triggered when the right toolbar item is clicked
   */
  // Need to handle each of these elements differently....
  onRightElementPress: PropTypes.func,
};

const defaultProps = {
  onLeftElementPress: () => {},
  onRightElementPress: () => {},
};

const Menubar = ({
  onLeftElementPress,
  onRightElementPress
}) => {

  return (
    <IconButton><ArrowBack /></IconButton>
  );
};

Menubar.propTypes = propTypes;
Menubar.defaultProps = defaultProps;

export default Menubar;
