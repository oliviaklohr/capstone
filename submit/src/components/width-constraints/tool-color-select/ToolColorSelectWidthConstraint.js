import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './ToolColorSelectWidthConstraint.module.css'

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node.isRequired,
};

const ToolColorSelectWidthConstraint = ({ children }) => (
  <div className={cx('tool-color-select-width-constraint')}>{children}</div>
);

ToolColorSelectWidthConstraint.propTypes = propTypes;

export default ToolColorSelectWidthConstraint;
