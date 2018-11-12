import { connect } from 'react-redux';
import { actions } from '../../state/actions';
import Notebook from './Notebook';

const mapDispatchToProps = (dispatch, { notebookId }) => ({
  openNotebook: () => dispatch(actions.setActiveNotebookId({ notebookId })),
});

export default connect(null, mapDispatchToProps)(Notebook);
