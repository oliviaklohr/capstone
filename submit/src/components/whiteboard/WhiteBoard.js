import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import CircularProgress from '@material-ui/core/CircularProgress';
import shortid from 'shortid';
import IconButton from '@material-ui/core/IconButton/IconButton';
import Icon from '@mdi/react';
import { mdiPlus } from '@mdi/js';
import Modal from '@material-ui/core/Modal';
import Penu from '../penu/Penu-container';
import MenuBar from '../menubar/MenuBar';
import Canvas from '../canvas/Canvas-container';
import Paginator from '../paginator/Paginator';
import PenColorSelect from '../pen-color-select/PenColorSelect';
import HighlighterColorSelect from '../highlighter-color-select/HighlighterColorSelect';
import WidthConstraint from '../width-constraints/WidthConstraints';
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
  deletePage: PropTypes.func.isRequired,
  clearPages: PropTypes.func.isRequired,
  penColor: PropTypes.string.isRequired,
  lineWidth: PropTypes.number.isRequired,
  setActiveTool: PropTypes.func.isRequired,
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
      penColorChooserModalOpen: false,
      highlighterColorChooserModalOpen: false,
    };

    this.onPenClick = this.onPenClick.bind(this);
    this.onHighlighterClick = this.onHighlighterClick.bind(this);
    this.onEraserClick = this.onEraserClick.bind(this);
    this.onBackClick = this.onBackClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.onPageDeleteClick = this.onPageDeleteClick.bind(this);
    this.renderWhiteboardContent = this.renderWhiteboardContent.bind(this);
  }

  componentDidMount() {
    const { fetchPagesForNotebook, pageIds, page } = this.props;
    
    if (!pageIds && !page) {
      fetchPagesForNotebook();
    }
  }

  componentWillUnmount() {
    const { updatePage, setActiveNotebookId, setActivePageId, clearPages } = this.props;

    setActiveNotebookId({ notebookId: null });
    setActivePageId({ pageId: null });
    updatePage();
    clearPages();
  }

  openModal(dialog) {
    this.setState({
      [`${dialog}ColorChooserModalOpen`]: true,
    });
  }
  
  closeModal(dialog) {
    this.setState({
      [`${dialog}ColorChooserModalOpen`]: false,
    });
  }
  
  onBackClick() {
    this.setState({ willBackRedirect: true });
  }

  onPageDeleteClick() {
    const { deletePage, page } = this.props;
    
    if (page && page.pageId) {
      deletePage({ pageId: page.pageId });
    }
  }

  onPenClick() {
    const { setActiveTool } = this.props;

    setActiveTool({ tool: 'pen'});
    this.openModal('pen')
  };

  onHighlighterClick() {
    const { setActiveTool } = this.props;

    setActiveTool({ tool: 'highlighter'});
    this.openModal('highlighter')
  };

  onEraserClick() {
    const { setActiveTool } = this.props;

    setActiveTool({ tool: 'eraser' });
  }

  renderWhiteboardContent() {
    const {
      createNewPage,
      menubarProps,
      canvasProps,
      page,
      pageIds,
      setActivePageId,
      updatePage,
      lineColor,
      lineWidth,
    } = this.props;
    const { penColorChooserModalOpen, highlighterColorChooserModalOpen } = this.state;

    const canRender = !!(page) && !!(pageIds);

    const noPageColor = '#bdbdbd';

    const whiteboardBody = canRender
      ? ( <Canvas lineWidth={lineWidth} page={page} penColor={lineColor} {...canvasProps} /> )
      : (
        <div className={cx('no-pages-warning-container')}>
          <h2 style={{ color: noPageColor }}>No Pages in Notebook</h2>
          <IconButton key={shortid.generate()} onClick={createNewPage}>
            <Icon path={mdiPlus} size={1} color={noPageColor} />
          </IconButton>
        </div>
      );
    const paginator = canRender
      ? (
        <div className={cx('paginator')}>
          <Paginator
            displayedIndex={pageIds.indexOf(page.pageId) + 1}
            totalPages={pageIds.length}
            onPrevClick={() => {
              updatePage();
              setActivePageId({ pageId: pageIds[pageIds.indexOf(page.pageId) - 1] });
            }}
            onNextClick={() => {
              updatePage();
              setActivePageId({ pageId: pageIds[pageIds.indexOf(page.pageId) + 1]});
            }}
          />
        </div>
      )
      : null;

    const top = '50%';
    const left = '50%';
    
    const penColorModalPosition = {
      position: 'absolute',
      top,
      left,
      transform: `translate(-${top}, -${left})`,
    };

    return  (
      <Fragment>
        <Modal open={penColorChooserModalOpen} onClose={() => this.closeModal('pen')}>
          <div style={penColorModalPosition}>
            <WidthConstraint.ToolColorSelect>
              <PenColorSelect onColorSelect={() => this.closeModal('pen')} />
            </WidthConstraint.ToolColorSelect>
          </div>
        </Modal>
        <Modal open={highlighterColorChooserModalOpen} onClose={() => this.closeModal('highlighter')}>
          <div style={penColorModalPosition}>
            <WidthConstraint.ToolColorSelect>
              <HighlighterColorSelect onColorSelect={() => this.closeModal('highlighter')} />
            </WidthConstraint.ToolColorSelect>
          </div>
        </Modal>
        <MenuBar
          onMinusClick={this.onPageDeleteClick}
          onBackClick={this.onBackClick}
          onPlusClick={createNewPage}
          onPenClick={this.onPenClick}
          onEraserClick={this.onEraserClick}
          onHighlighterClick={this.onHighlighterClick}
          {...menubarProps}
        />
        {whiteboardBody}
        {paginator}
        <Penu />
      </Fragment>
    );
  }

  render() {
    const {
      page,
      pageIds,
      isLoading,
      setActivePageId,
    } = this.props;

    const { willBackRedirect } = this.state;
    
    const loadingSpinner = ( <CircularProgress size={100} /> );
    const shouldDisplayLoadingSpinner = isLoading;

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
