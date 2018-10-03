import React from 'react';
import { View } from 'react-native';
import Socket, { Justify } from './ToolbarSocket/ToolbarSocket';

import { toolbarSocketPropTypes } from './ToolbarSocket/_toolbarSocketPropTypes';

import styles from './Toolbar_styles';

const propTypes = {
  leftSocketContent: toolbarSocketPropTypes,
  centerSocketContent: toolbarSocketPropTypes,
  rightSocketContent: toolbarSocketPropTypes,
};

const defaultProps = {
  leftSocketContent: undefined,
  centerSocketContent: undefined,
  rightSocketContent: undefined,
};

const Toolbar = ({
  leftSocketContent,
  centerSocketContent,
  rightSocketContent,
}) => (
  <View style={styles.toolbar}>
    <Socket justification={Justify.left}>
      {leftSocketContent}
    </Socket>
    <Socket justification={Justify.center}>
      {centerSocketContent}
    </Socket>
    <Socket justification={Justify.right}>
      {rightSocketContent}
    </Socket>
  </View>
);


Toolbar.propTypes = propTypes;
Toolbar.defaultProps = defaultProps;

export default Toolbar;
