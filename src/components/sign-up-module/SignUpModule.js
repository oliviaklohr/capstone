import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '@material-ui/core/Button/Button';
import Input from '@material-ui/core/Input';
import { LOGIN } from '../../utils/routes';

import styles from './SignUpModule.module.css';

const cx = classNames.bind(styles);

const propTypes = {
  createNewUser: PropTypes.func.isRequired,
};

class SignUpModule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstNameValue: '',
      lastNameValue: '',
      emailValue: '',
      passwordValue: '',
      firstNameError: false,
      lastNameError: false,
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
    const { createNewUser } = this.props;
    const { firstNameValue, lastNameValue, emailValue, passwordValue } = this.state;

    // TODO: remove these alerts and repalce with either dispatching to the redux store, or not
    if(!this.validator()) {
      window.alert('input is NOT valid!');
      return;
    }

    createNewUser({
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      password: passwordValue,
    });
  }

  validator() {
    const {
      firstNameValue,
      lastNameValue,
      emailValue,
      passwordValue,
    } = this.state;


    const firstNameError = !(typeof firstNameValue === 'string' && firstNameValue.length > 0);
    const lastNameError = !(typeof lastNameValue === 'string' && lastNameValue.length > 0);
    const emailError = !(typeof emailValue === 'string' && emailValue.length > 0);
    const passwordError = !(typeof passwordValue === 'string' && passwordValue.length > 0);

    const canSubmit = !firstNameError && !lastNameError && !emailError && !passwordError;

    this.setState({
      firstNameError,
      lastNameError,
      emailError,
      passwordError,
    });

    return canSubmit;
  }
  
  render() {
    const {
      firstNameError,
      lastNameError,
      emailError,
      passwordError,
    } = this.state;

    const inputClassNames = cx('input-row');
    const buttonClassNames = cx([
      'sign-up-button',
      'input-row',
      'left-margin-override',
    ]);

    return(
      <div className={cx('sign-up')}>
        <div className={cx(['names-container', 'input-row'])}>
          <div className={cx('name')}>
            <Input
              name='firstName'
              className={inputClassNames}
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
              className={inputClassNames}
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
          className={inputClassNames}
          error={emailError}
          onChange={(event) => this.handleValueChange(event, 'email')}
          fullWidth
          placeholder='Email'
          type='text'
        />
        <Input
          name='password'
          className={inputClassNames}
          error={passwordError}
          onChange={(event) => this.handleValueChange(event, 'password')}
          fullWidth
          placeholder='Password'
          type='password'
        />
        <div className={buttonClassNames}>
          <Link to={LOGIN}><Button color='primary' value='Submit'>User? Log In!</Button></Link>
          <Button color='primary' onClick={this.handleSubmit} variant='contained' value='Submit'>Sign Up</Button>
        </div>
      </div>
    );
  }
}


SignUpModule.propTypes = propTypes;

export default SignUpModule;
