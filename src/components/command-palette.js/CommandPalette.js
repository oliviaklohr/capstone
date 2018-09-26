import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Icon } from 'react-native';
import { Button } from 'react-native-material-ui';

import styles from './CommandPalette_Styles'

const CommandPalette = () => {

  const { container, button } = styles;

  return (
    // Need to theme buttons based on accent color
    // should be in _theme
    // think i found how but not sure how too port it over to here.
    <View style={container}>
      {/* Icons might need changed */}
      <Button text="" icon='brush' />
      <Button text="" icon='create' />
      <Button text="" icon='healing' />
      <Button text="" icon='gesture' />
    </View>
  );
};

export default CommandPalette;
