import { connect } from 'react-redux';
import WhiteBoard from './WhiteBoard';
import { actions } from '../../state/actions';


const mapStateToProps = ({ user, notebooks, pages }) => {
  const propsNeededForMerge = {
    notebookId: notebooks.activeNotebookId || null,
    userId: user.userId,
  };

  let lineWidth;
  let lineColor;
  
  const activeTool = user.props.activeTool;
  
  if (activeTool === 'pen') {
    lineWidth = user.props.penLineWidth;
    lineColor = user.props.activePenColor;
  }
  else if (activeTool === 'highlighter') {
    lineWidth = user.props.highlighterLineWidth;
    lineColor = user.props.activeHighlighterColor;
  }
  else {
    lineWidth = 15;
    lineColor = 'rgb(255, 255, 255)';
  }
  
  return {
    ...propsNeededForMerge,
    pageIds: Object.keys(pages.byPageId).length > 0 ? Object.keys(pages.byPageId).map((num) => parseInt(num) ): null,
    page: pages.byPageId[ pages.activePageId ],
    isLoading: pages.isFetching,
    lineColor,
    lineWidth,
    userProps: user.props,
  };
};

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

const mergeProps = (propsFromState, propsFromDispatch) => {
  const { notebookId, userId, page, pageIds, userProps, ...otherPropsFromState } = propsFromState;
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

  const setActiveTool = ({ tool }) => dispatch(actions.updateUserProps({
    userId,
    props: {
      ...userProps,
      activeTool: tool,
    },
  }));

  const fetchPagesForNotebook = () => dispatch(actions.fetchPagesForNotebook({ userId, notebookId }));
  const updatePage = () => {
    if (page) {
      dispatch(actions.updatePageData(page));
    }
  };
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
    setActiveTool,
  };
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(WhiteBoard)

