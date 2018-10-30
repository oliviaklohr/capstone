import { connect } from 'react-redux';

import SignUpPage, { Status } from './SignUp';

const mapStateToProps = state => {
  const { user } = state;

  let signUpStatus;

  if (user.isFetching) { 
    signUpStatus = Status.isLoading;
  }
  else if (!user.isFetching && user.lastFetchStatus === -1) {
    signUpStatus = Status.awaitingSignup;
  }
  else if (!user.isFetching && user.lastFetchStatus === 200) {
    signUpStatus = Status.signedUpAndLoggedIn;
  }
  else {
    signUpStatus = Status.error;
  }

  return {
    signUpStatus,
  };
};


export default connect(mapStateToProps)(SignUpPage);
