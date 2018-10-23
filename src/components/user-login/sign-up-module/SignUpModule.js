import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Button from '@material-ui/core/Button/Button';
import Input from '@material-ui/core/Input';

import styles from './SignUpModule.module.css';

const cx = classNames.bind(styles);

class SignUpModule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNameValue: '',
      lastNameValue: '',
      emailValue: '',
      usernameValue: '',
      passwordValue: '',
      firstNameError: false,
      lastNameError: false,
      emailError: false,
      usernameError: false,
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
    // TODO: remove these alerts and repalce with either dispatching to the redux store, or not
    if(this.validator()) {
      window.alert('input is valid!')
    }
    else {
      window.alert('input is NOT valid!')
    }
  }

  validator() {
    const {
      firstNameValue,
      lastNameValue,
      emailValue,
      usernameValue,
      passwordValue,
    } = this.state;


    const firstNameError = !(typeof firstNameValue === 'string' && firstNameValue.length > 0);
    const lastNameError = !(typeof lastNameValue === 'string' && lastNameValue.length > 0);
    const emailError = !(typeof emailValue === 'string' && emailValue.length > 0);
    const usernameError = !(typeof usernameValue === 'string' && usernameValue.length > 0);
    const passwordError = !(typeof passwordValue === 'string' && passwordValue.length > 0);

    const canSubmit = !firstNameError && !lastNameError && !emailError && !usernameError && !passwordError;

    this.setState({
      firstNameError,
      lastNameError,
      emailError,
      usernameError,
      passwordError,
    });

    return canSubmit;
  }
  
  render() {
    const {
      firstNameError,
      lastNameError,
      emailError,
      usernameError,
      passwordError,
    } = this.state;

    return(
      <div className={cx('sign-up')}>
        <div className={cx('names-container')}>
          <div className={cx('name')}>
            <Input
              name='firstName'
              error={firstNameError}
              onChange={(event) => this.handleValueChange(event, 'firstName')}
              fullWidth
              placeholder='First Name'
              type='text'
            />
          </div>
          <div className={cx('name')}>
            <Input
              name='lastName'
              error={lastNameError}
              onChange={(event) => this.handleValueChange(event, 'lastName')}
              fullWidth
              placeholder='Last Name'
              type='text'
            />
          </div>
        </div>
        <Input
          name='email'
          error={emailError}
          onChange={(event) => this.handleValueChange(event, 'email')}
          fullWidth
          placeholder='Email'
          type='text'
        />
        <Input
          name='username'
          error={usernameError}
          onChange={(event) => this.handleValueChange(event, 'username')}
          fullWidth
          placeholder='Username'
          type='text'
        />
        <Input
          name='password'
          error={passwordError}
          onChange={(event) => this.handleValueChange(event, 'password')}
          fullWidth
          placeholder='Password'
          type='password'
        />
        <div className={cx('sign-up-button')}>
          <Button color='primary' onClick={this.handleSubmit} value='Submit'>Sign Up</Button>
        </div>
      </div>
    );
  }
}


export default SignUpModule;
