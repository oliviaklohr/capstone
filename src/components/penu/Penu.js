import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Draggable from 'react-draggable';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import { mdiLockOpenOutline, mdiLockOutline, mdiPen, mdiMarker } from '@mdi/js';


import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import Icon from '@mdi/react';
import { defaultOptions } from './_defaultPenuOptions';

import styles from './Penu.module.css';

const cx = classNames.bind(styles);

const DIRECTION_POSSIBILITIES = {
  up: 'up',
  down: 'down',
  left: 'left',
  right: 'right',
};

const optionsPropShape = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  iconPath: PropTypes.node.isRequired,
  color: PropTypes.node.isRequired,
};

const propTypes = {
  options: PropTypes.arrayOf( PropTypes.shape( optionsPropShape ) ),
  setActiveToolAndColor: PropTypes.func.isRequired,
};

const defaultProps = {
  options: defaultOptions,
};

class Penu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      direction: DIRECTION_POSSIBILITIES.up,
      isDraggable: false,
      isPanning: false,
    };

    this.handleClick = this.handleClick.bind(this);
    this.wrapOnClick = this.wrapOnClick.bind(this);
    this.preventPanning = this.preventPanning.bind(this);
    this.handleStartPanning = this.handleStartPanning.bind(this);
    this.handleStopPanning = this.handleStopPanning.bind(this);
    this.toggleDraggable = this.toggleDraggable.bind(this);

    this.penu = React.createRef();
    this.speedDial = React.createRef();
  }

  componentDidMount() {
    this.penu.current.addEventListener('touchmove', this.preventPanning,{ passive: false } )
  }

  componentWillUnmount() {
    this.penu.current.removeEventListener('touchmove', this.preventPanning,{ passive: false } )
  }

  preventPanning(event) {
    event.preventDefault();
  }

  handleClick() {
    const { isDraggable } = this.state;

    if (!isDraggable) {
      this.setState(prevState => ({
        open: !prevState.open
      }));
    }
  }

  handleClose() {

    this.setState({
      open: false,
    });
  }

  handleStartPanning() {
    this.setState({
      isPanning: true,
    });
  }
  
  handleStopPanning() {

    this.setState({
      isPanning: false,
    });
  }

  wrapOnClick( providedOnClick ) {
    return () => {

      this.handleClick();
  
      if (providedOnClick) {
        providedOnClick();
      }
    };
  }

  toggleDraggable() {
    this.setState(prevState => ({
      isDraggable: !prevState.isDraggable,
    }))
  }

  render() {
    const { options, setActiveToolAndColor } = this.props;
    const { direction, open, isDraggable } = this.state;
    const dragIcon = isDraggable
      ? ( <Icon path={mdiLockOpenOutline} size={1} color="#424242"/> )
      : ( <Icon path={mdiLockOutline} size={1} color="#424242"/> );

      const penuOptions = [
        {
          onClick: () => setActiveToolAndColor({ tool: 'pen', color: 'rgba(20, 116, 251, 1)'}),
          name: 'Pen Blue',
          iconPath: mdiPen,
          color: 'rgba(20, 116, 251, 1)',
        },
        {
          onClick: () => setActiveToolAndColor({ tool: 'pen', color: 'rgba(213, 0, 0, 1)' }),
          name: 'Pen Red',
          iconPath: mdiPen,
          color: 'rgba(213, 0, 0, 1)',
        },
        {
          onClick: () => setActiveToolAndColor({ tool: 'pen', color: 'rgba(0, 0, 0, 1)'}),
          name: 'Pen Black',
          iconPath: mdiPen,
          color: 'rgba(0, 0, 0, 1)',
        },
        {
          onClick: () => setActiveToolAndColor({ tool: 'highlighter', color: 'rgba(20, 116, 251, 0.5)'}),
          name: 'Highlighter Blue',
          iconPath: mdiMarker,
          color: 'rgba(20, 116, 251, 1)',
        },
        {
          onClick: () => setActiveToolAndColor({ tool: 'highlighter', color: 'rgba(213, 0, 0, 0.5)'}),
          name: 'Highlighter Red',
          iconPath: mdiMarker,
          color: 'rgba(213, 0, 0, 1)',
        },
        {
          onClick: () => setActiveToolAndColor({ tool: 'highlighter', color: 'rgba(99, 184, 77, 0.5)'}),
          name: 'Highlighter Green',
          iconPath: mdiMarker,
          color: 'rgba(99, 184, 77, 1)',
        },
      ];
      

    const content = (
      <Fragment>
        <SpeedDial
          ariaLabel="penu"
          open={open}
          icon={<SpeedDialIcon />}
          direction={direction}
          onClick={this.handleClick}
          >
        {penuOptions.map(({ name, iconPath, color, onClick }) => (
          <SpeedDialAction
            key={name}
            icon={<Icon path={iconPath} size={1} color={color} />}
            tooltipTitle={name}
            onClick={this.wrapOnClick(onClick)}
            // NOTE: the following has to be here in order to prevent faulty touch interfaces
            onTouch={this.wrapOnClick(onClick)}
          />
          ))}
        </SpeedDial>
        <span tabIndex='1' role='button' onClick={this.toggleDraggable}>
          {dragIcon}
        </span>
      </Fragment>
    );

    return (
      <div ref={this.penu} className={cx('penu')}>
        <Draggable
          disabled={!isDraggable}
          onStart={this.handleStartPanning}
          onStop={this.handleStopPanning}
        >
          <div>
            {content}
          </div>
        </Draggable>
      </div>
    );
  }
}

Penu.propTypes = propTypes;
Penu.defaultProps = defaultProps;

export default Penu;
export { DIRECTION_POSSIBILITIES as Directions };

