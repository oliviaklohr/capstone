import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MenuBar from '../menubar/MenuBar';
import Canvas from '../canvas/Canvas-container';

// TODO: this will be removed... eventually
import TestReduxComponent from '../test-redux-component/TestReduxComponent-container';

const propTypes = {
  menubarProps: PropTypes.object,
  canvasProps: PropTypes.object,
  createSession: PropTypes.func.isRequired,
  openDocumentId: PropTypes.string,
  createDocument: PropTypes.func.isRequired,
};

const defaultProps = {
  menubarProps: {},
  canvasProps: {},
  openDocumentId: undefined,
};

class Whiteboard extends Component {

  componentDidMount() {
    // TODO: we'll want to pass in the userId here when creating a new session, once it's been retrieved from the back end
    this.props.createSession({ userId: 'user_hVS1WWovD__2018-10-18T09:37:10-05:00' });
  }

  render() {
    const { createDocument, menubarProps, openDocumentId, canvasProps } = this.props;
    return(
      <div>
        <MenuBar {...menubarProps} />
        <TestReduxComponent />
        <button onClick={() => createDocument()}>Create Document</button>
        { openDocumentId && 
          <Canvas penColor='red' {...canvasProps} />
        }
      </div>
    );
  }
}

Whiteboard.propTypes = propTypes;
Whiteboard.defaultProps = defaultProps;

export default Whiteboard;
