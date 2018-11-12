import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import { componentDidMountEventListeners, componentWillUnmountEventListeners } from './helpers/_eventBindings';
import { getX, getY } from './helpers/_touchEventHelpers';

import styles from './Canvas.module.css';

const cx = classNames.bind(styles);

const drawLine = async (start, end, ctx, penColor, lineWidth) => {
  const pointsProvided = start && end;

  if(!pointsProvided) { return; }

  ctx.fillStyle = penColor;
  ctx.strokeStyle = penColor;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';
  ctx.lineWidth = lineWidth;

  ctx.beginPath();
  ctx.moveTo(start.x, start.y);
  ctx.lineTo(end.x, end.y);
  ctx.stroke();
  ctx.closePath();
};


const propTypes = {
  /** any css-parseable color value */
  penColor: PropTypes.string.isRequired,
  // saveDocument: PropTypes.func.isRequired,
  // createDocument: PropTypes.func.isRequired,
  // openDocument: PropTypes.object.isRequired,
  page: PropTypes.shape({
    pageId: PropTypes.number.isRequired,
    notebookId: PropTypes.number.isRequired,
    ownerId: PropTypes.number.isRequired,
    canvasImg: PropTypes.object, // TODO: we should actually probably be changing the saga / action / reducer that records this information to the store to simply write the raw data
    isDeleted: PropTypes.bool.isRequired,
    dateCreated: PropTypes.string.isRequired,
    lastEdited: PropTypes.string.isRequired,
  }).isRequired,
  savePage: PropTypes.func.isRequired,
};

class Canvas extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
      isDrawing: false,
    };

    // bind all relevant functions to the class
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
    this.handleDraw = this.handleDraw.bind(this);
    this.getCanvas = this.getCanvas.bind(this);
    this.getContext = this.getContext.bind(this);
    this.displayPage = this.displayPage.bind(this);

    // create and bind a unique reference to the canvas
    this.canvas = React.createRef();
    this.coords = [];
  }

  componentDidMount() {
    // AppStore.addChangeListener('DELETE_BOARD', this.resetBoard)
    window.addEventListener('resize', this.updateWindowDimensions);
    componentDidMountEventListeners(this.getCanvas());
    this.displayPage();
  }
  
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
    componentWillUnmountEventListeners(this.getCanvas());
  }

  getCanvas() {
    return this.canvas.current;
  }

  getContext() {
    return this.getCanvas().getContext("2d");
  }

  /**
   * Draws a pixel on the screen every time the
   * mouse is moved
   */
  handleMouseMove(event) {
    const { isDrawing } = this.state;
    const { lineWidth, penColor } = this.props;

    if(!isDrawing) { return; }

    const x = getX(event);
    const y = getY(event);

    const XY = { x, y };

    this.coords.unshift(XY);

    const context = this.getContext();
    const start = this.coords[0];
    const end = this.coords[1];

    context.fillRect(start.x, start.y, 1, 1);

    drawLine(start, end, context, penColor, lineWidth);
  }

  handleMouseDown() {
    this.isDrawing = true;
    this.setState(() => ({ isDrawing: true}));
  }
  
  handleMouseUp() {
    const { isDrawing } = this.state;
    if (!isDrawing) { return; }

    const { savePage } = this.props;
    this.setState(() => ({ isDrawing: false}));
    this.coords = [];
    
    savePage({
      pageData: this.getCanvas().toDataURL(),
    });
  }

  updateWindowDimensions() {
    const context = this.getContext();
    const { innerWidth, innerHeight } = window;
    const prevImageData = context.getImageData(0, 0, innerWidth, innerHeight);
    
    this.setState({
      width: innerWidth,
      height: innerHeight,
    })

    const newContext = new CanvasRenderingContext2D();
    newContext.putImageData(prevImageData, 0, 0);
    this.context = newContext;
  }

  resetBoard() {
    const context = this.getContext();
    const { width, height } = this.state;
    context.clearRect(0, 0, width, height);
  }

  handleDraw(pixels) {
    const { penColor, lineWidth } = this.props;

    for(var i = 0; i < (pixels.length - 1); i++) {
      const context = this.getContext();
      const start = pixels[i];
      const end = pixels[i+1];
      drawLine(start, end, context, penColor, lineWidth);
    }
  }

  displayPage() {
    const { page } = this.props;
    if (!page) return;

    const ctx = this.getContext();
    const img = new Image();
    img.onload = () => ctx.drawImage(img, 0, 0);

    img.src = page.canvasImg;
  }

  render() {
    const { width, height } = this.state;
    // const { openDocument, saveDocument } = this.props;

    return(
      <Fragment>
        <canvas
          id="myCanvas"
          className={cx('canvas')}
          width={width}
          height={height}
          ref={this.canvas}
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleMouseDown}
          onMouseMove={this.handleMouseMove}
          onTouchMove={this.handleMouseMove}
          onMouseUp={this.handleMouseUp}
          onTouchEnd={this.handleMouseUp}
          onMouseLeave={this.handleMouseUp}
        />
        {/* <button onClick={() => saveDocument({ id: openDocument.id, dataURL: this.getCanvas().toDataURL()})}>Save Document</button> */}
      </Fragment>
    );
  }
}

Canvas.propTypes = propTypes;

export default Canvas;
