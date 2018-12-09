import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Redirect } from 'react-router';
import SnackbarNotification from '../../components/snackbar-notification/SnackbarNotification';
import LoginModule from '../../components/login-module/LoginModule-container';
import PageWrapper, { Position } from '../../components/page-wrapper/PageWrapper';
import WidthConstraints from '../../components/width-constraints/WidthConstraints';
import { NOTEBOOKS } from '../../utils/routes';
import styles from './Login.module.css';

const cx = classNames.bind(styles);


const LOGIN_STATUSES = {
  awaitingLogin: 'awaitingLogin',
  loggedIn: 'loggedIn',
  error: 'error',
  isLoading: 'isLoading',
};

const propTypes = {
  loginStatus: PropTypes.oneOf(Object.values(LOGIN_STATUSES)).isRequired,
};

const LoginPage = ({ loginStatus }) => {
  const notebooksRedirect = (loginStatus === LOGIN_STATUSES.loggedIn)
    ? ( <Redirect to={NOTEBOOKS} /> )
    : null;

  const errorSnackbar = (
    <SnackbarNotification isCloseable isOpen message="Unable to log in. Please try again." />
  );

  return (
    <PageWrapper
      snackbar={loginStatus === LOGIN_STATUSES.error && errorSnackbar}
      isLoading={loginStatus === LOGIN_STATUSES.isLoading}
      verticalPosition={Position.center}
      horizontalPosition={Position.center}
    >
      {notebooksRedirect}
      <span className={cx('title')}>Remarque</span>
      <WidthConstraints.Login>
        <LoginModule />
      </WidthConstraints.Login>
    </PageWrapper>
  );
};

LoginPage.propTypes = propTypes;

export default LoginPage;
export { LOGIN_STATUSES as Status };
