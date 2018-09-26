import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { Toolbar, COLOR } from 'react-native-material-ui';

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
  return (
    <View style={container}>
      <Toolbar
        onLeftElementPress={onLeftElementPress}
        onRightElementPress={onRightElementPress}
        leftElement="menu"
        rightElement="brush"
      />
    </View>
  );
};

Menubar.propTypes = propTypes;
Menubar.defaultProps = defaultProps;

export default Menubar;
