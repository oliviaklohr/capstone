import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './CommandPalette.css';

const cx = classNames.bind(styles);

const propTypes = {

};

const defaultProps = {

};

const CommandPalette = () => {
  return(
    <div className={cx('command-palette')}>
      Hello, world!
    </div>
  );
};

CommandPalette.propTypes = propTypes;
CommandPalette.defaultProps = defaultProps;

export default CommandPalette;
