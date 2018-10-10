import { connect } from 'react-redux';
import { actions } from '../../state/actions';
import TestReduxComponent from './TestReduxComponent';


const mapStateToProps = (state) => ({
  openDocumentId: state.documents.openDocumentId,
});

const mapDispatchToProps = {
  createNewUser: actions.createNewUser,
  changeOpenDocument: actions.changeOpenDocument,
  closeOpenDocument: actions.closeOpenDocument,
  fetchDocument: actions.fetchDocument,
};

export default connect(mapStateToProps, mapDispatchToProps)(TestReduxComponent);
