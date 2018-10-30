import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './UserLoginWidthConstraint.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node.isRequired,
};

const UserLoginWidthConstraint = ({ children }) => (
  <div className={cx('user-login-width-constraint')}>
    {children}
  </div>
);

UserLoginWidthConstraint.propTypes = propTypes;

export default UserLoginWidthConstraint;

