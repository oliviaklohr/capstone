import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '@material-ui/core/Button/Button';
import Input from '@material-ui/core/Input';
import { SIGN_UP } from '../../utils/routes';

import styles from './LoginModule.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  loginUser: PropTypes.func.isRequired,
};

class LoginModule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      emailValue: '',
      passwordValue: '',
      emailError: false,
      passwordError: false,
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.validator = this.validator.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleValueChange(event, stateLabel) {
    this.setState({
      [`${stateLabel}Value`]: event.target.value,
    });
  }

  handleSubmit() {
    const { loginUser } = this.props;
    const { emailValue, passwordValue } = this.state;

    if(!this.validator()) {
      window.alert('input is valid!')
      return;
    }

    loginUser({
      email: emailValue,
      password: passwordValue,
    });
  }

  validator() {
    const { emailValue, passwordValue } = this.state;

    const emailError = !(typeof emailValue === 'string' && emailValue.length > 0);
    const passwordError = !(typeof passwordValue === 'string' && passwordValue.length > 0);

    const canSubmit = !emailError && !passwordError;

    this.setState({
      emailError,
      passwordError,
    });

    return canSubmit;
  }

  render() {
    const { emailError, passwordError } = this.state;
    const inputClassNames = cx('log-in-row');

    const buttonClassNames = cx([
      'log-in-button',
      'log-in-row',
      'left-margin-override'
    ]);

    return(
      <div className={cx('log-in')}>
        <Input
          name='email'
          className={inputClassNames}
          error={emailError}
          onChange={(event) => this.handleValueChange(event, 'email')}
          placeholder='Email'
          type='text'
        />
        <Input
          name='password'
          className={inputClassNames}
          error={passwordError}
          onChange={(event) => this.handleValueChange(event, 'password')}
          placeholder='Password'
          type='password'
        />
        <div className={buttonClassNames}>
          <Link to={SIGN_UP}><Button color='primary' value='Submit'>Create Account</Button></Link>
          <Button color='primary' onClick={this.handleSubmit} variant='contained' value='Submit'>Login</Button>
        </div>
      </div>
    );
  }
};

LoginModule.propTypes = propTypes;

export default LoginModule;

