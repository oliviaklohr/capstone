import { connect } from 'react-redux';
import WhiteBoard from './WhiteBoard';
import { actions } from '../../state/actions';


const mapStateToProps = ({ user, notebooks, pages }) => {
  const propsNeededForMerge = {
    notebookId: notebooks.activeNotebookId || null,
    userId: user.userId,
  };

  return {
    ...propsNeededForMerge,
    pageIds: Object.keys(pages.byPageId).length > 0 ? Object.keys(pages.byPageId).sort() : null,
    page: pages.byPageId[ pages.activePageId ],
    isLoading: pages.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const mergeProps = (propsFromState, propsFromDispatch) => {
  const { notebookId, userId, ...otherPropsFromState } = propsFromState;
  const { dispatch, ...otherPropsFromDispatch } = propsFromDispatch;

  const fetchPagesForNotebook = () => dispatch(actions.fetchPagesForNotebook({ userId, notebookId }));
  const setActivePageId = (args) => dispatch(actions.setActivePageId(args))
  const createNewPage = () => dispatch(actions.createNewPage({ userId, notebookId }));
  
  return {
    ...otherPropsFromState,
    ...otherPropsFromDispatch,
    fetchPagesForNotebook,
    setActivePageId,
    createNewPage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(WhiteBoard)

