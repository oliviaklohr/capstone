import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Button from '@material-ui/core/Button/Button';
import Input from '@material-ui/core/Input';

import styles from './LoginModule.module.css';

const cx = classNames.bind(styles);

class LoginModule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      usernameValue: '',
      passwordValue: '',
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
    const { usernameValue, passwordValue } = this.state;

    const usernameError = !(typeof usernameValue === 'string' && usernameValue.length > 0);
    const passwordError = !(typeof passwordValue === 'string' && passwordValue.length > 0);

    const canSubmit = !usernameError && !passwordError;

    this.setState({
      usernameError,
      passwordError,
    });

    return canSubmit;
  }

  render() {
    const { usernameError, passwordError } = this.state;

    return(
      <div className={cx('log-in')}>
        <Input
          name='username'
          error={usernameError}
          onChange={(event) => this.handleValueChange(event, 'username')}
          placeholder='Username'
          type='text'
        />
        <Input
          name='password'
          error={passwordError}
          onChange={(event) => this.handleValueChange(event, 'password')}
          placeholder='Password'
          type='password'
        />
        <div className={cx('log-in-button')}>
          <Button color='primary' onClick={this.handleSubmit} value='Submit'>Login</Button>
        </div>
      </div>
    );
  }
};

export default LoginModule;
