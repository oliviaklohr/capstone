import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './Login.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node.isRequired,
};

const Login = ({ children }) => (
  <div className={cx('login')}>
    {children}
  </div>
);

Login.propTypes = propTypes;

export default Login;
