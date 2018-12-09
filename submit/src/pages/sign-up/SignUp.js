import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import SnackbarNotification from '../../components/snackbar-notification/SnackbarNotification';
import SignUpModule from '../../components/sign-up-module/SignUpModule-container';
import PageWrapper, { Position } from '../../components/page-wrapper/PageWrapper';
import WidthConstraints from '../../components/width-constraints/WidthConstraints';
import { NOTEBOOKS } from '../../utils/routes';

const SIGN_UP_STATUSES = {
  awaitingSignup: 'awaitingSignup',
  signedUpAndLoggedIn: 'signedUpAndLoggedIn',
  error: 'error',
  isLoading: 'isLoading',
};

const propTypes = {
  signUpStatus: PropTypes.oneOf(Object.values(SIGN_UP_STATUSES)).isRequired,
};

const SignUp = ({ signUpStatus }) => {
  const notebooksRedirect = (signUpStatus === SIGN_UP_STATUSES.signedUpAndLoggedIn)
    ? ( <Redirect to={NOTEBOOKS} /> )
    : null;

  const errorSnackbar = (
    <SnackbarNotification isCloseable isOpen message="Unable to Sign Up in. Please try again." />
  );

  return (
    <PageWrapper
      snackbar={signUpStatus === SIGN_UP_STATUSES.error && errorSnackbar}
      isLoading={signUpStatus === SIGN_UP_STATUSES.isLoading}
      verticalPosition={Position.center}
      horizontalPosition={Position.center}
    >
      {notebooksRedirect}
      <WidthConstraints.Login>
        <SignUpModule />
      </WidthConstraints.Login>
    </PageWrapper>
  );
};

SignUp.propTypes = propTypes;

export default SignUp;
export { SIGN_UP_STATUSES as Status };

