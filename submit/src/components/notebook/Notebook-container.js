import { connect } from 'react-redux';
import { actions } from '../../state/actions';
import Notebook from './Notebook';

const mapStateToProps = ({ user }) => ({
  userId: user.userId,
});

const mapDispatchToProps = (dispatch, { notebookId }) => ({
  openNotebook: () => dispatch(actions.setActiveNotebookId({ notebookId })),
  deleteNotebook: () => dispatch(actions.deleteNotebook({ notebookId })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notebook);
