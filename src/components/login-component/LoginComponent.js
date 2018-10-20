import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import styles from './LoginComponent.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
};

const LoginComponent = ({ children }) => {

  return(
    <div className={cx('login-component')}>
      {children}
    </div>
  );
};

LoginComponent.propTypes = propTypes;
LoginComponent.defaultProps = defaultProps;

export default LoginComponent;
