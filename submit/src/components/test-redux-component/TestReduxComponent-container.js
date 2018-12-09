import { connect } from 'react-redux';
import { actions } from '../../state/actions';
import TestReduxComponent from './TestReduxComponent';


const mapStateToProps = (state) => ({
  openDocumentId: state.documents.openDocumentId,
});

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(TestReduxComponent);
