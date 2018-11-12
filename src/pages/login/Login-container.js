import { connect } from 'react-redux';

import LoginPage, { Status } from './Login';

const mapStateToProps = state => {
  const { user } = state;

  let loginStatus;

  if (user.isFetching) { 
    loginStatus = Status.isLoading;
  }
  else if (!user.isFetching && !user.lastFetchStatus) {
    loginStatus = Status.awaitingLogin;
  }
  else if (!user.isFetching && user.lastFetchStatus === 200) {
    loginStatus = Status.loggedIn;
  }
  else {
    loginStatus = Status.error;
  }

  return {
    loginStatus,
  };
};



export default connect(mapStateToProps)(LoginPage);
