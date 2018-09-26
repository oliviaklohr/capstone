import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Toolbar, COLOR } from 'react-native-material-ui';
import CommandPalette from '/Users/olivialedford/Documents/School Work/2018/Fall/4980/capstone/src/components/command-palette.js/CommandPalette.js';

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
        /* ICONS NEEDED:
         * Left:
         * - Notebooks
         *   - Should trigger a
         * Center
         * - Pen
         * - Highlighter
         * - Eraser
         * - Cut
         * Right:
         * - Page Settings
         *   - Should trigger dropdown for app settings, penu settings, page settings
         * - Export
         * - Swipe out should trigger collab - should there be a button for it too?
         *   - Included for posterity's sake. Easier to undo than remember to do
         */
        onLeftElementPress={onLeftElementPress}
        onRightElementPress={onRightElementPress}
        // I don't think I like this as the notebooks trigger but it'll work for now
        leftElement="book"
        // I had this including style={CommandPalette} so that I could guarantee it was centered
        // but I'm not sure if it's necessary.
        // It doesn't automatically center correctly though >:[
        centerElement={<CommandPalette />}
        rightElement={rightElement}
      />
    </View>
  );
};

Menubar.propTypes = propTypes;
Menubar.defaultProps = defaultProps;

export default Menubar;
