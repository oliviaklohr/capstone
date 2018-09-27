import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import CommandPalette from '../command-palette/CommandPalette.js';
import Toolbar from '../toolbar/Toolbar';

import styles from './Menubar_Styles';

const propTypes = {
  /**
   * Callback function triggered when the left toolbar item is clicked
   */
  onLeftElementPress: PropTypes.func,
  /**
   * Callback function triggered when the right toolbar item is clicked
   */
  // Need to handle each of these elements differently....
  onRightElementPress: PropTypes.func,
};

const defaultProps = {
  onLeftElementPress: () => {},
  onRightElementPress: () => {},
};

// TODO: delete everything between the lines, once you've added real items to your menubar
//=================
const Box = ({ children }) => (<View style={styles.testBlock}><Text>{children}</Text></View>)
//=================

const Menubar = ({
  onLeftElementPress,
  onRightElementPress
}) => {
  const { container } = styles;
  const rightElement = {
    // Does 'file-upload' work as an export logo? Or is it confusing.
    actions: ['settings', 'file-upload', 'group']
  };

  // Probably should figure out how to abstract these elements
  // Since the menubar will have one look in the drawing canvas and another
  // on the main notebook generation page...
  // Or will I just make a different component for that too?
  return (
    <View style={container}>
      <Toolbar
        leftSocketContent={
          <Fragment>
            <Box>1a</Box>
          </Fragment>
        }
        centerSocketContent={<CommandPalette />}
        rightSocketContent={
        <Fragment>
          <Box>3a</Box>
          <Box>3b</Box>
          <Box>3c</Box>
        </Fragment>
        }
      />
    </View>
  );
};

Menubar.propTypes = propTypes;
Menubar.defaultProps = defaultProps;

export default Menubar;
