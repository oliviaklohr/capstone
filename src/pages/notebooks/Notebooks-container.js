import { connect } from 'react-redux';
import Notebooks from './Notebooks';
import { actions } from '../../state/actions/index';

const mapStateToProps = ({ notebooks, user }) => ({
  notebooks: Object.values(notebooks.byNotebookId),
  isLoading: notebooks.isFetching,
  userId: user.userId,
});

// TODO: notebookId will eventually be coming from the whiteboard component 
const mapDispatchToProps = (dispatch, ownProps = { notebookId: 3 }) => ({
  dispatch,
  notebookId: ownProps.notebookId,
});

const mergeProps = (propsFromState, propsFromDispatch) => {
  const { userId, ...otherPropsFromState } = propsFromState;
  const { dispatch, notebookId, ...otherPropsFromDispatch } = propsFromDispatch;

  const onCreateNewPage = () => dispatch(actions.createNewPage({ userId, notebookId }));

  return {
    ...otherPropsFromState,
    ...otherPropsFromDispatch,
    onCreateNewPage,
  }
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Notebooks);
