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
    actions: ['more-vert']
  };

  return (
    <View style={container}>
      <Toolbar
        /* ICONS NEEDED:
         * Left:
         * -
         * Center (If Possible):
         * (If not possible, put on right side.)
         * - Pen
         * - Highlighter
         * - Eraser
         * - Cut
         * Right:
         * - Page Settings
         */
        onLeftElementPress={onLeftElementPress}
        onRightElementPress={onRightElementPress}
        leftElement="menu"
        // I had this including style={CommandPalette} so that I could guarantee it was centered
        // but I'm not sure if it's necessary.
        centerElement={<CommandPalette />}
        rightElement={rightElement}
      />
    </View>
  );
};

Menubar.propTypes = propTypes;
Menubar.defaultProps = defaultProps;

export default Menubar;
