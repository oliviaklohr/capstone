import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ColorChooserWidthConstraint.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node.isRequired,
};

const ColorChooserWidthConstraint = ({ children }) => (
  <div className={cx('color-chooser-container')}>
    {children}
  </div>
);

ColorChooserWidthConstraint.propTypes = propTypes;

export default ColorChooserWidthConstraint;
