import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import CircularProgress from '@material-ui/core/CircularProgress';
import MenuBar from '../menubar/MenuBar';
import Canvas from '../canvas/Canvas-container';
import Paginator from '../paginator/Paginator';
import { NOTEBOOKS } from '../../utils/routes';

import styles from './WhiteBoard.module.css';

const propTypes = {
  page: PropTypes.shape({
    pageId: PropTypes.number.isRequired,
    notebookId: PropTypes.number.isRequired,
    ownerId: PropTypes.number.isRequired,
    canvasImg: PropTypes.string.isRequired,
    dateCreated: PropTypes.string.isRequired,
    lastEdited: PropTypes.string.isRequired,
  }),
  pageIds: PropTypes.arrayOf( PropTypes.number.isRequired ),
  isLoading: PropTypes.bool.isRequired,
  fetchPagesForNotebook: PropTypes.func.isRequired,
  updatePage: PropTypes.func.isRequired,
  setActiveNotebookId: PropTypes.func.isRequired,
  setActivePageId: PropTypes.func.isRequired,
  createNewPage: PropTypes.func.isRequired,
};

const defaultProps = {
  page: null,
  pageIds: null,
};


const cx = classNames.bind(styles);


class Whiteboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      willBackRedirect: false,
    };

    this.onBackClick = this.onBackClick.bind(this);
    this.renderWhiteboardContent = this.renderWhiteboardContent.bind(this);
  }
  componentDidMount() {
    const { fetchPagesForNotebook, pageIds, page } = this.props;
    
    if (!pageIds && !page) {
      fetchPagesForNotebook();
    }
  }

  onBackClick() {
    const { updatePage, setActiveNotebookId, setActivePageId } = this.props;

    updatePage();

    this.setState({ willBackRedirect: true }, () => {
      setActiveNotebookId({ notebookId: null });
      setActivePageId({ pageId: null });
    });
  }

  renderWhiteboardContent() {
    const { createNewPage, menubarProps, canvasProps, page, pageIds, setActivePageId } = this.props;

    const canRender = !!(page) && !!(pageIds);

    if (!canRender) { return null; }

    const displayedIndex = pageIds.indexOf(page.pageId);
    const totalPages = pageIds.length;

    return  (
        <Fragment>
          <MenuBar
            onBackClick={this.onBackClick}
            onMenuClick={createNewPage}
            {...menubarProps}
            />
          { page && 
            <Canvas lineWidth={3} page={page} penColor='red' {...canvasProps} />
          }
          <div className={cx('paginator')}>
            <Paginator
              displayedIndex={displayedIndex + 1}
              totalPages={totalPages}
              onPrevClick={() => setActivePageId({ pageId: pageIds[displayedIndex - 1]})}
              onNextClick={() => setActivePageId({ pageId: pageIds[displayedIndex + 1]})}
            />
          </div>
        </Fragment>
      );
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

    const { willBackRedirect } = this.state;
    
    const loadingSpinner = ( <CircularProgress size={100} /> );

    const shouldDisplayLoadingSpinner = isLoading || !pageIds || !page;

    const content = shouldDisplayLoadingSpinner
      ? loadingSpinner
      : this.renderWhiteboardContent();
    
    if(!willBackRedirect && pageIds && !page){
      setActivePageId({ pageId: pageIds[0] });
    }

    return(
      <div>
        {willBackRedirect && <Redirect to={NOTEBOOKS} />}
        {content}
      </div>
    );
  }
}

Whiteboard.propTypes = propTypes;
Whiteboard.defaultProps = defaultProps;

export default Whiteboard;
