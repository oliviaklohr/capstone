import React from 'react';
import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import styles from './Box.css';

const cx = classNames.bind(styles);

const propTypes = {
  /** some child content to be displayed within the box */
  children: PropTypes.node,
  /** some foo prop */
  foo: PropTypes.string.isRequired,
};

const defaultProps = {
  children: undefined,
};

const Box = ({ children }) => (
  <div className={cx('box')}>
    Hello, World!
    {children}
  </div>
);

Box.propTypes = propTypes;
Box.defaultProps = defaultProps;

export default Box;
