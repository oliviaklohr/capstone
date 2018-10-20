import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '@material-ui/core/Button/Button';
import Input from '@material-ui/core/Input';

import styles from './LoginModule.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node.isRequired,
};

const defaultProps = {
};

const LoginModule = ({ children }) => {

  return(
    <div className={cx('login-module')}>
      <form action={() => window.alert('red')} >
        <div>
          <Input placeholder='Username' type='text' name='username' />
        </div>
        <div>
          <Input placeholder='Password' type='password' name='password' />
        </div>
        <div>
          <Button type="submit" value="Submit">Login</Button>
        </div>
      </form>
    </div>
  );
};

LoginModule.propTypes = propTypes;
LoginModule.defaultProps = defaultProps;

export default LoginModule;
