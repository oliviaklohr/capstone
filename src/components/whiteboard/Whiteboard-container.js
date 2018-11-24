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
    pageIds: Object.keys(pages.byPageId).length > 0 ? Object.keys(pages.byPageId).map((num) => parseInt(num) ): null,
    page: pages.byPageId[ pages.activePageId ],
    isLoading: pages.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const mergeProps = (propsFromState, propsFromDispatch) => {
  const { notebookId, userId, page, pageIds, ...otherPropsFromState } = propsFromState;
  const { dispatch, ...otherPropsFromDispatch } = propsFromDispatch;

  const deletePage = ({ pageId }) => {
    const indexOfPageIdToDelete = pageIds.indexOf( pageId );

    // cases 1: index of removed item is not the first item, can safely select item at index before removed index
    // case 2: index of removed item was the first index, BUT other pages still exist, just default to the first page
    let newActivePageId = indexOfPageIdToDelete !== 0
      ? pageIds[indexOfPageIdToDelete - 1]
      : pageId[1];

    // // cases 3: only page present, display fallback text indicating that no pages are present, and we need to create a new page
    // if ( pageIdsWithoutItem.length === 1 ) {
    //   newActivePageId = null;
    // }

    dispatch(actions.setActivePageId({ pageId: newActivePageId }));
    dispatch(actions.deletePage({ pageId }))
  };

  const fetchPagesForNotebook = () => dispatch(actions.fetchPagesForNotebook({ userId, notebookId }));
  const updatePage = () => dispatch(actions.updatePageData(page));
  const setActivePageId = (args) => dispatch(actions.setActivePageId(args))
  const createNewPage = () => dispatch(actions.createNewPage({ userId, notebookId }));
  const setActiveNotebookId = (args) => dispatch(actions.setActiveNotebookId(args));
  const clearPages = () => dispatch(actions.clearPages());
  
  return {
    ...otherPropsFromState,
    ...otherPropsFromDispatch,
    page,
    pageIds,
    fetchPagesForNotebook,
    setActiveNotebookId,
    updatePage,
    setActivePageId,
    createNewPage,
    deletePage,
    clearPages,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(WhiteBoard)

