import { connect } from 'react-redux';
import { actions } from '../../state/actions';

import LoginModule from './LoginModule';

const mapStateProps = () => ({});

const mapDispatchToProps = {
  loginUser: actions.loginUser,
};

export default connect(mapStateProps, mapDispatchToProps)(LoginModule);
