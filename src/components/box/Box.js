import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './Box.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  /** some child content to be displayed within the box */
  children: PropTypes.node,
  showChildren: PropTypes.bool,
};

const defaultProps = {
  children: undefined,
  showChildren: false,
};

const Box = ({ children, showChildren }) => (
  <div className={cx('box')}>
    Hello, World!
    {showChildren && children}
  </div>
);

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
