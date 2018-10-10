import { connect } from 'react-redux';
import { actions } from '../../state/actions';

import WhiteBoard from './WhiteBoard';

const mapStateToProps = (state) => {
  const { byDocumentId, documentOpen, openDocumentId } = state.documents;
  
  const openDocument = (documentOpen && !!(openDocumentId) && !!(byDocumentId))
    ? byDocumentId[openDocumentId]
    : null;

  return {
    openDocument
  };
};

const mapDispatchToProps = {
  createDocument: actions.createDocument,
  saveDocument: actions.saveDocument,
};

export default connect(mapStateToProps, mapDispatchToProps)(WhiteBoard);
