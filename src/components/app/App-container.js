import { connect } from 'react-redux';
import App from './App';
import { actions } from '../../state/actions';

const mapStateToProps = (state) => ({
  openDocumentId: state.documents.openDocumentId
});

const mapDispatchToProps = {
  createSession: actions.createSession,
  createDocument: actions.createDocument,
};

export default connect(mapStateToProps, mapDispatchToProps)(App)

