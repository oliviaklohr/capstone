import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './CommandPalette.module.css';

const cx = classNames.bind(styles);

const propTypes = {

};

const defaultProps = {

};

const CommandPalette = () => {
  return(
    <div className={cx('command-palette')}>
      I don't understand what you want from dis bullsheeeeet.
    </div>
  );
};

CommandPalette.propTypes = propTypes;
CommandPalette.defaultProps = defaultProps;

export default CommandPalette;
