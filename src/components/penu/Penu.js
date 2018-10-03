import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { ActionButton } from 'react-native-material-ui';

const Penu = () => {

  return(
    <View>
      <ActionButton
        actions={['brush', "create"]}
        icon="menu"
        transition="speedDial"
      />
    </View>

  );
};

export default Penu;
