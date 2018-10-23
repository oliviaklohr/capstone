import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './UserLoginWidthControl.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node.isRequired,
};

const UserLoginWidthControl = ({ children }) => (
  <div className={cx('user-login-width-control')}>
    {children}
  </div>
);

UserLoginWidthControl.propTypes = propTypes;

export default UserLoginWidthControl;

