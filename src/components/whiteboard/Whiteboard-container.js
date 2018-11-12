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
    pageIds: Object.keys(pages.byPageId).length > 0 ? Object.keys(pages.byPageId).map((num) => parseInt(num) ).sort() : null,
    page: pages.byPageId[ pages.activePageId ],
    isLoading: pages.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const mergeProps = (propsFromState, propsFromDispatch) => {
  const { notebookId, userId, page, ...otherPropsFromState } = propsFromState;
  const { dispatch, ...otherPropsFromDispatch } = propsFromDispatch;

  const fetchPagesForNotebook = () => dispatch(actions.fetchPagesForNotebook({ userId, notebookId }));
  const updatePage = () => dispatch(actions.updatePageData(page));
  const setActivePageId = (args) => dispatch(actions.setActivePageId(args))
  const createNewPage = () => dispatch(actions.createNewPage({ userId, notebookId }));
  const setActiveNotebookId = (args) => dispatch(actions.setActiveNotebookId(args));
  
  return {
    ...otherPropsFromState,
    ...otherPropsFromDispatch,
    page,
    fetchPagesForNotebook,
    setActiveNotebookId,
    updatePage,
    setActivePageId,
    createNewPage,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(WhiteBoard)

