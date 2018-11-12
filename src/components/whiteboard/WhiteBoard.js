import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuBar from '../menubar/MenuBar';
import Canvas from '../canvas/Canvas-container';

const propTypes = {
  page: PropTypes.shape({
    pageId: PropTypes.number.isRequired,
    notebookId: PropTypes.number.isRequired,
    ownerId: PropTypes.number.isRequired,
    // canvasImg: , // TODO: figure out wtf this is
    dateCreated: PropTypes.string.isRequired,
    lastEdited: PropTypes.string.isRequired,
  }),
  pageIds: PropTypes.arrayOf( PropTypes.number.isRequired ),
  isLoading: PropTypes.bool.isRequired,
  fetchPagesForNotebook: PropTypes.func.isRequired,
  setActivePageId: PropTypes.func.isRequired,
  createNewPage: PropTypes.func.isRequired,
};

const defaultProps = {
  page: null,
  pageIds: null,
};


class Whiteboard extends Component {
  componentDidMount() {
    const { fetchPagesForNotebook, pageIds, page } = this.props;
    
    if (!pageIds && !page) {
      fetchPagesForNotebook();
    }
  }

  render() {
    const {
      createNewPage,
      page,
      pageIds,
      isLoading,
      menubarProps,
      canvasProps,
      setActivePageId,
    } = this.props;
    
    const loadingSpinner = ( <CircularProgress size={100} /> );

    const whiteboardContent = (
      <Fragment>
        <MenuBar onMenuClick={createNewPage} {...menubarProps} />
        { page && 
          <Canvas page={page} penColor='red' {...canvasProps} />
        }
      </Fragment>
    );

    const shouldDisplayLoadingSpinner = isLoading || !pageIds || !page;

    const content = shouldDisplayLoadingSpinner
      ? loadingSpinner
      : whiteboardContent;
    
    if(pageIds && !page){
      setActivePageId({ pageId: pageIds[0] });
    }

    return(
      <div>
        {content}
      </div>
    );
  }
}

Whiteboard.propTypes = propTypes;
Whiteboard.defaultProps = defaultProps;

export default Whiteboard;
