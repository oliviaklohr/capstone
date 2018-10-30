import { connect } from 'react-redux';
import { actions } from '../../state/actions';

import SignUpModule from './SignUpModule';

const mapStateProps = () => ({});

const mapDispatchToProps = {
  createNewUser: actions.createNewUser,
};


export default connect(mapStateProps, mapDispatchToProps)(SignUpModule);
