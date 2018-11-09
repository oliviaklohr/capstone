import { connect } from 'react-redux';
import { actions } from '../../state/actions';
import Notebooks from './Notebooks';

const mapStateToProps = ({ notebooks, user }) => ({
  notebooks: Object.values(notebooks.byNotebookId),
  activeNotebookId: notebooks.activeNotebookId || null,
  isLoading: notebooks.isFetching,
  userId: user.userId,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const mergeProps = (propsFromState, propsFromDispatch) => {
  const { userId, ...otherPropsFromState } = propsFromState;
  const { dispatch, ...otherPropsFromDispatch } = propsFromDispatch;

  const fetchNotebooksForUser = () => dispatch(actions.fetchNotebooksForUser({ userId }));
  
  return {
    ...otherPropsFromState,
    ...otherPropsFromDispatch,
    userId,
    fetchNotebooksForUser,
  }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Notebooks);
