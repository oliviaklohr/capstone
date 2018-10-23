import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '@material-ui/core/Button/Button';
import Input from '@material-ui/core/Input';

import styles from './SignUpComponent.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  children: PropTypes.node.isRequired,
};

const SignUpComponent = ({ children }) => {

  return(
    <div>
      <form action={() => window.alert('red')} >
        <div>
          <Input className={cx('names')} placeholder='First Name' type='text' name='fname' />
          <Input className={cx('names')} placeholder='Last Name' type='text' name='lname' />
        </div>
        <div>
          <Input placeholder='Email' type='text' name='email' />
        </div>
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

SignUpComponent.propTypes = propTypes;

export default SignUpComponent;
